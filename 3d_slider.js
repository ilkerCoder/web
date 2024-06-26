let currentRotateY = 0;
let currentRotateX = -16;
let startX = 0;
let startY = 0;
let isDragging = false;
const navToggler = document.querySelector(".navbar-toggler");
const container = document.querySelector(".container");

navToggler.addEventListener("click", function () {
  container.style.transition = "opacity 2s ease";
  container.style.opacity = container.style.opacity === "0" ? "1" : "0";
});

let degerler = [
  "Döner",
  "Döner",
  "Döner",
  "Izgara",
  "Tatlı",
  "Kebap",
  "Lahmacun",
  "Pide",
];
const banner = document.querySelector(".slider");
const desc = document.querySelector(".desc");

banner.addEventListener("mousedown", startDragging);
banner.addEventListener("touchstart", startDragging);

function startDragging(e) {
  e.preventDefault();

  if (e.type === "mousedown") {
    startX = e.clientX;
    startY = e.clientY;
  } else if (e.type === "touchstart") {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  isDragging = true;
  cancelAnimationFrame(animationLoop);
}

banner.addEventListener("mousemove", dragBanner);
banner.addEventListener("touchmove", dragBanner);

function dragBanner(e) {
  if (isDragging) {
    let mouseX;
    let mouseY;

    if (e.type === "mousemove") {
      mouseX = e.clientX;
      mouseY = e.clientY;
    } else if (e.type === "touchmove") {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }

    const sensitivity = 0.5;
    const deltaX = (mouseX - startX) * sensitivity;
    const deltaY = (mouseY - startY) * sensitivity;
    currentRotateY += deltaX;
    currentRotateX += deltaY;
    currentRotateY = currentRotateY % 360;
    if (currentRotateY < 0) currentRotateY += 360;
    currentRotateX = Math.max(-90, Math.min(90, currentRotateX));

    let transformValue = `perspective(500vw) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
    banner.style.transform = transformValue;

    startX = mouseX;
    startY = mouseY;

    updateDesc();
  }
}

banner.addEventListener("mouseup", stopDragging);
banner.addEventListener("touchend", stopDragging);

function stopDragging() {
  isDragging = false;
  animateRotateY();
}

let animationLoop;
function animateRotateY() {
  currentRotateY += 0.2;
  currentRotateY = currentRotateY % 360;
  if (currentRotateY < 0) currentRotateY += 360;

  let transformValue = `perspective(500vw) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
  banner.style.transform = transformValue;

  updateDesc();
  animationLoop = requestAnimationFrame(animateRotateY);
}

function updateDesc() {
  const index = Math.floor(currentRotateY / 43) % degerler.length;
  desc.textContent = degerler[index];
}

animateRotateY();
