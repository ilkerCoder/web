var radius = 490; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 340; // width of images (unit: px)
var imgHeight = 200; // height of images (unit: px)

function setRadiusForSmallScreens() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 992) {
    radius = 600; // Küçük ekranlar için daha küçük bir radius değeri
  } else {
    radius = 600; // Büyük ekranlar için varsayılan değer
  }
}

function initSlider() {
  setRadiusForSmallScreens(); // İlk başlangıç için ayarla

  window.addEventListener("resize", function () {
    setRadiusForSmallScreens(); // Pencere boyutu değiştiğinde güncelle
    init(1); // Slider'ı yeniden başlat
  });

  init(1); // Slider'ı başlat
}

setTimeout(initSlider, 1000);

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.getElementsByTagName("img");
var aVid = ospin.getElementsByTagName("video");
var aEle = [...aImg, ...aVid]; // combine 2 arrays

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" +
      i * (360 / aEle.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
  updateCaption();
}

function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
        updateCaption();
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 10 || -e.detail;
  radius += d;
  imgWidth += d;
  imgHeight += d;
  init(1);
};

function updateCaption() {
  var currentIndex = Math.round(tX / (360 / aEle.length)) % aEle.length;
  if (currentIndex < 0) currentIndex += aEle.length;
  var currentImg = aEle[currentIndex];
  var caption = document.querySelector(".caption");
  caption.textContent = currentImg.alt;
}

setInterval(updateCaption, 1000); // Caption güncellemesini her saniye çağır

// Slider'ı oluştur
