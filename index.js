// Script for RPG Forest Project animations and interactions

// Select floating leaves and add subtle random float movement
const leaves = document.querySelectorAll('.floating-leaf');

leaves.forEach((leaf, index) => {
  let floatDirection = 1;
  let floatAmount = 0;
  let maxFloat = 10;
  let speed = 0.05 + Math.random() * 0.05;

  function floatLeaf() {
    floatAmount += speed * floatDirection;
    if (floatAmount > maxFloat || floatAmount < -maxFloat) {
      floatDirection *= -1;
    }
    leaf.style.transform = `translateY(${floatAmount}px) rotate(${floatAmount * 1.8}deg)`;
    requestAnimationFrame(floatLeaf);
  }
  floatLeaf();
});

// Button click magic glow effect
const actionButton = document.querySelector('.action-button');
actionButton.addEventListener('click', () => {
  actionButton.classList.add('button-glow');
  setTimeout(() => {
    actionButton.classList.remove('button-glow');
    // Redirect to another website after glow effect
    window.location.href = 'https://example.com'; // Change URL to your target website
  }, 500);
});

// Add parallax effect to leaves on mouse move for depth
document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (e.clientX - centerX) / centerX;
  const offsetY = (e.clientY - centerY) / centerY;

  leaves.forEach((leaf, index) => {
    const depthFactor = 5 + index * 2;
    const moveX = -offsetX * depthFactor;
    const moveY = -offsetY * depthFactor;
    leaf.style.transform = `translate(calc(${moveX}px + var(--float-x, 0px)), calc(${moveY}px + var(--float-y, 0px))) rotate(${moveX * 2}deg)`;
  });
});

