let currentRotateY = 0;
let startX = 0;
let isDragging = false;

const banner = document.querySelector(".slider");

// Fare tıklama olayını dinleyin
banner.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;

  // Animasyon döngüsünü durdurun
  cancelAnimationFrame(animationLoop);
});

// Fare hareketi olayını dinleyin
banner.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const mouseX = e.clientX;
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
});

// Fare bırakma olayını dinleyin
banner.addEventListener("mouseup", () => {
  isDragging = false;
  console.log("mouse up oldu");
  // Animasyon döngüsünü tekrar başlatın
  animateRotateY();
});

// Fare hareketi olayını izleme
let animationLoop;
function animateRotateY() {
  currentRotateY += 1; // Her adımda rotateY değerini artırın

  // Şu anda uygulanan transform değerini alın
  let transformValue = `perspective(500vw) rotateX(-16deg) rotateY(${currentRotateY}deg)`;

  // Transform değerini uygulayın
  banner.style.transform = transformValue;

  // Animasyon döngüsünü tekrar başlatın
  animationLoop = requestAnimationFrame(animateRotateY);
}

// Animasyonu başlatın
animateRotateY();
