const revealElements = document.querySelectorAll(".reveal");

const handleScrollReveal = () => {
  const triggerPoint = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    el.classList.toggle("active", top < triggerPoint);
  });
};

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains("active")) {
      entry.target.classList.add("active");

      const progressBars = entry.target.querySelectorAll(".progress-fill");
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width") || bar.style.width;
        bar.style.width = targetWidth;
      });
    }
  });
}, {
  threshold: 0.3
});

revealElements.forEach(el => observer.observe(el));
