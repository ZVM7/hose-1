document.addEventListener("DOMContentLoaded", () => {
  // ===== Services Section Animation =====
  const servicesSection = document.querySelector(".services");
  const header = document.querySelector(".services-header h2");
  const paragraph = document.querySelector(".services-header p");
  const cards = document.querySelectorAll(".service-cards .card");
  const fallingElements = document.querySelectorAll(".falling-element");

  if (servicesSection) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate header and paragraph
          header.classList.add("visible");
          setTimeout(() => paragraph.classList.add("visible"), 300);

          // Animate cards staggered
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add("visible"), 600 + i * 300);
          });

          // Start falling elements animation
          fallingElements.forEach(el => el.style.animationPlayState = "running");

          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(servicesSection);
  }

  // ===== About Section Darken =====
  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    window.addEventListener("scroll", () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        aboutSection.classList.add("darkened");
      }
    });
  }

  // ===== Expandable Value Cards =====
  document.querySelectorAll(".value-card").forEach(card => {
    const arrow = card.querySelector(".arrow");
    const content = card.querySelector(".value-text");
    if (arrow && content) {
      arrow.addEventListener("click", () => {
        content.classList.toggle("active");
        arrow.classList.toggle("rotated");
      });
    }
  });

  // ===== Show/Hide Portfolio =====
  const expandArrow = document.querySelector(".expand-arrow");
  const portfolioArea = document.querySelector(".portfolio-area");
  if (expandArrow && portfolioArea) {
    expandArrow.addEventListener("click", () => {
      const isVisible = portfolioArea.style.display === "flex";
      portfolioArea.style.display = isVisible ? "none" : "flex";
      expandArrow.textContent = isVisible ? "▼ Show Portfolio" : "▲ Hide Portfolio";
    });
  }

  // ===== Portfolio Filters =====
  const filterButtons = document.querySelectorAll(".portfolio-filters button");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        card.style.display = filter === "all" || card.dataset.category === filter ? "block" : "none";
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesSection = document.querySelector(".services");
  const headerElements = servicesSection.querySelectorAll(".services-header h2, .services-header p");
  const cards = servicesSection.querySelectorAll(".service-cards .card");

  // Reveal options
  const revealOptions = { threshold: 0.3 };

  // Reveal header (h2 + p together)
  const revealHeader = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        headerElements.forEach(el => el.classList.add("reveal"));
        observer.unobserve(entry.target);
      }
    });
  };
  const headerObserver = new IntersectionObserver(revealHeader, revealOptions);
  headerObserver.observe(servicesSection.querySelector(".services-header"));

  // Reveal each card individually
  const revealCard = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // reveal only once
      }
    });
  };
  const cardObserver = new IntersectionObserver(revealCard, revealOptions);
  cards.forEach(card => cardObserver.observe(card));
});


