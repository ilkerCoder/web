const banner = document.querySelector(".slider");
banner.addEventListener("mousemove", (e) => {
  const bannerRect = banner.getBoundingClientRect();
  const bannerWidth = bannerRect.width;
  const mouseX = e.clientX - bannerRect.left;

  // Calculate the new rotateY value based on mouse position
  const rotateY = (mouseX / bannerWidth) * 10;

  // Stop the animation
  banner.style.animation = "none";

  // Apply the new transform property
  banner.style.transform = `perspective(50vw) rotateX(-16deg) rotateY(${rotateY}deg)`;
});
