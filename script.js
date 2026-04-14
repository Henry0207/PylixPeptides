// Mouse light effect
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();