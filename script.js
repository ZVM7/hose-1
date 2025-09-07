const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

// Auto slide every 5s
setInterval(() => {
  let nextIndex = (currentIndex + 1) % 3;
  showSlide(nextIndex);
}, 5000);

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Init
showSlide(0);

 document.addEventListener("DOMContentLoaded", () => {
    // select only the sections we want to reveal
    const sections = document.querySelectorAll(
      ".services-section, .about-section, .portfolio-section, .contact-section, .invest-section"
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 } // reveal when 20% is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  });



let greenWidths = [50, 150, 250, 350];
let redWidths   = [300, 220, 150, 80];

let greenValues = [100, 500, 1000, 2000];
let redValues   = [1000, 700, 400, 200];

let i = 0;

setInterval(() => {
  document.getElementById("greenLineH").style.width = greenWidths[i % greenWidths.length] + "px";
  document.getElementById("redLineH").style.width = redWidths[i % redWidths.length] + "px";

  document.getElementById("greenAmountH").innerText = "$" + greenValues[i % greenValues.length];
  document.getElementById("redAmountH").innerText = "$" + redValues[i % redValues.length];

  i++;
}, 1500);


const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  // Toggle hamburger "X"
  hamburger.classList.toggle('active');
  
  // Toggle nav visibility
  mainNav.classList.toggle('show');

  // Update aria-expanded for accessibility
  const expanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', expanded);
});
