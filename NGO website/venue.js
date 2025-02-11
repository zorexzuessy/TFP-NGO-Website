document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("animate-slide-up")) {
          entry.target.style.animation = "slideUp 1s ease forwards";
        }
        if (entry.target.classList.contains("bounce-in")) {
          entry.target.style.animation = "bounce 1s ease forwards";
        }
        if (entry.target.classList.contains("fade-in")) {
          entry.target.style.animation = "fadeIn 1s ease forwards";
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
      ".animate-slide-up, .bounce-in, .fade-in"
    );
    animatedElements.forEach((el) => observer.observe(el));

    // Navbar scroll effect
    let prevScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-100px";
      }

      prevScrollPos = currentScrollPos;

      // Add shadow to navbar when scrolling
      if (currentScrollPos > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
      } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "white";
      }
    };
  });
});
