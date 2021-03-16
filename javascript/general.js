/* Generelle Features für die Website */
/* 1. Die Navigationsleiste für mobile Endgeräte */
/* 2. Der to-top-Button */
/* Nachdem die Navbar geladen wurde, kommen die Funktionen, daher steht alles in der callback-Function des .load  */
$(document).ready(function() {
  $("#navbar").load("../components/navbar.html", () => {
    function navSlide() {
      /* Greife auf die HTML Elemente zu */
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");

      /* Wenn der Burger gedrückt wird, mache das, was in der callback-function steht */
      burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.5
            }s`;
          }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
      });
    }
    /* Funktionen, die ausgeführt werden sollen */
    const app = () => {
      navSlide();
    };
    app();
  }),
    $("footer").load("../components/footer.html", () => {
      /* Nachdem der footer geladen wurde, lasse den toTopButton nach kurzem Scrollen erscheinen */
      //Get the button:
      toTopBtn = document.getElementById("toTopBtn");

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          toTopBtn.style.display = "block";
        } else {
          toTopBtn.style.display = "none";
        }
      }

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };
    });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
