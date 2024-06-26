let currentRotateY = 0;

const banner = document.querySelector(".slider");

// Function to update rotation and continue animation
const updateRotationAndAnimate = (clientX) => {
  const bannerRect = banner.getBoundingClientRect();
  const bannerWidth = bannerRect.width;
  const mouseX = clientX - bannerRect.left;

  // Calculate the new rotateY value based on position
  const rotateY = (mouseX / bannerWidth) * 20;
  currentRotateY = rotateY;

  // Stop the animation
  banner.style.animation = "none";

  // Apply the new transform property
  banner.style.transform = `perspective(50vw) rotateX(-16deg) rotateY(${rotateY}deg)`;

  // Create a new keyframes animation starting from the currentRotateY value
  const newKeyframes = `
    @keyframes autoRunFromCurrent {
      from {
        transform: perspective(50vw) rotateX(-16deg) rotateY(${rotateY}deg);
      }
      to {
        transform: perspective(50vw) rotateX(-16deg) rotateY(${
          rotateY + 360
        }deg);
      }
    }
  `;

  // Append the new keyframes to the document
  const styleSheet = document.createElement("style");
  styleSheet.innerText = newKeyframes;
  document.head.appendChild(styleSheet);

  // Apply the new animation
  banner.style.animation = "autoRunFromCurrent 20s linear infinite";
};

// Mouse events
banner.addEventListener("mousedown", (e) => {
  updateRotationAndAnimate(e.clientX);
});

window.addEventListener("mousemove", (e) => {
  if (e.buttons === 1) {
    updateRotationAndAnimate(e.clientX);
  }
});

// Touch events
banner.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  updateRotationAndAnimate(touch.clientX);
});

window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  updateRotationAndAnimate(touch.clientX);
});
