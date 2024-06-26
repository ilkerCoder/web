let currentRotateY = 0;

const banner = document.querySelector(".slider");

banner.addEventListener("mousemove", (e) => {
  const bannerRect = banner.getBoundingClientRect();
  const bannerWidth = bannerRect.width;
  const mouseX = e.clientX - bannerRect.left;

  // Calculate the new rotateY value based on mouse position
  const rotateY = currentRotateY + (mouseX / bannerWidth) * 4;

  // Stop the animation
  banner.style.animation = "none";

  // Apply the new transform property
  banner.style.transform = `perspective(50vw) rotateX(-16deg) rotateY(${rotateY}deg)`;

  // Update currentRotateY for the next mouse movement
  currentRotateY = rotateY;
});

banner.addEventListener("mouseleave", () => {
  // Apply the updated rotateY value
  banner.style.transform = `perspective(50vw) rotateX(-16deg) rotateY(${currentRotateY}deg)`;

  // Create a new keyframes animation starting from the currentRotateY value
  const newKeyframes = `
    @keyframes autoRunFromCurrent {
      from {
        transform: perspective(50vw) rotateX(-16deg) rotateY(${currentRotateY}deg);
      }
      to {
        transform: perspective(50vw) rotateX(-16deg) rotateY(${
          currentRotateY + 360
        }deg);
      }
    }
  `;

  // Append the new keyframes to the document
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = newKeyframes;
  document.head.appendChild(styleSheet);

  // Apply the new animation
  banner.style.animation = "autoRunFromCurrent 20s linear infinite";
});
