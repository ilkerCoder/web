let currentRotateY = 0;
let startX = 0;
let isDragging = false;

const banner = document.querySelector(".slider");

// Fare tıklama olayını dinleyin
banner.addEventListener("mousedown", startDragging);
banner.addEventListener("touchstart", startDragging);

function startDragging(e) {
  e.preventDefault(); // Varsayılan işlemi engelle

  if (e.type === "mousedown") {
    startX = e.clientX;
  } else if (e.type === "touchstart") {
    startX = e.touches[0].clientX; // İlk dokunulan noktanın konumunu al
  }

  isDragging = true;

  // Animasyon döngüsünü durdurun
  cancelAnimationFrame(animationLoop);
}

// Fare hareketi olayını dinleyin
banner.addEventListener("mousemove", dragBanner);
banner.addEventListener("touchmove", dragBanner);

function dragBanner(e) {
  if (isDragging) {
    let mouseX;

    if (e.type === "mousemove") {
      mouseX = e.clientX;
    } else if (e.type === "touchmove") {
      mouseX = e.touches[0].clientX; // İlk dokunulan noktanın konumunu al
    }

    const sensitivity = 0.5; // Hareket hassasiyeti

    // Hareket mesafesine göre rotateY değerini hesaplayın
    const deltaX = (mouseX - startX) * sensitivity;
    currentRotateY += deltaX;

    // Şu anda uygulanan transform değerini alın
    let transformValue = `perspective(500vw) rotateX(-16deg) rotateY(${currentRotateY}deg)`;

    // Transform değerini uygulayın
    banner.style.transform = transformValue;

    // Başlangıç noktasını güncelleyin
    startX = mouseX;
  }
}

// Fare bırakma olayını dinleyin
banner.addEventListener("mouseup", stopDragging);
banner.addEventListener("touchend", stopDragging);

function stopDragging() {
  isDragging = false;

  // Animasyon döngüsünü tekrar başlatın
  animateRotateY();
}

// Fare hareketi olayını izleme
let animationLoop;
function animateRotateY() {
  currentRotateY += 0.2; // Her adımda rotateY değerini artırın

  // RotateY değerini 0 ile 360 arasında döngü yaparak sınırlayın
  currentRotateY = currentRotateY % 360;

  // Şu anda uygulanan transform değerini alın
  let transformValue = `perspective(500vw) rotateX(-16deg) rotateY(${currentRotateY}deg)`;

  // Transform değerini uygulayın
  banner.style.transform = transformValue;

  // Animasyon döngüsünü tekrar başlatın
  animationLoop = requestAnimationFrame(animateRotateY);
}

// Animasyonu başlatın
animateRotateY();
