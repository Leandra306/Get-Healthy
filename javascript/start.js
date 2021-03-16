/* Nachdem die Navbar geladen wurde, kommen die Funktionen, daher steht alles in der callback-Function des .load */
$(function () {
  $("#navbar").load("../components/navbar.html", () => {
    function navSlide() {
      /* Greife auf die HTML Elemente zu */
      const burger = document.querySelector(".burger");
      const nav = document.querySelector("nav");
      const navLinks = document.querySelector(".nav-links");
      const navLinks_li = document.querySelectorAll(".nav-links li");
      const html = document.querySelector("html");

      let bigHeaderNav = false;
      burger.addEventListener("click", () => {
        //Toggle Nav
        navLinks.classList.toggle("nav-active");

        //Verhindere das Scrollen, während auf dem mobilen Endgerät die Navbar geöffnet ist
        if (!navLinks.classList.contains("nav-active")) {
          html.style.overflowY = "auto";
        } else {
          html.style.overflow = "hidden";
        }

        //Wenn der Header groß ist, muss er beim Öffnen der Navbar klein gemacht werden
        if (nav.classList.contains("bigHeader")) {
          nav.classList.remove("bigHeader");
          bigHeaderNav = true;
        } else if (bigHeaderNav) {
          nav.classList.add("bigHeader");
          bigHeaderNav = false;
        }

        //Animate Links
        navLinks_li.forEach((link, index) => {
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

    const app = () => {
      navSlide();
    };
    app();

    /* Google Chart */

    google.charts.load("current", {
      packages: ["geochart"],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ["Country", "Health index"],
        ["Norway", 0.946],
        ["Australia", 0.961],
        ["Switzerland", 0.963],
        ["Netherlands", 0.939],
        ["United States", 0.907],
        ["Germany", 0.935],
        ["New Zealand", 0.94],
        ["Canada", 0.946],
        ["Singapore", 0.959],
        ["Denmark", 0.914],
        ["Ireland", 0.934],
        ["Sweden", 0.951],
        ["Iceland", 0.955],
        ["United Kingdom", 0.931],
        ["South Korea", 0.947],
        ["Hong Kong", 0.975],
        ["Japan", 0.978],
        ["Liechtenstein", 0.921],
        ["Israel", 0.951],
        ["France", 0.951],
        ["Luxembourg", 0.931],
        ["Belgium", 0.932],
        ["Austria", 0.941],
        ["Finland", 0.931],
        ["Slovenia", 0.917],
        ["Italy", 0.96],
        ["Spain", 0.955],
        ["Czech Republic", 0.888],
        ["Greece", 0.935],
        ["Brunei Darussalam", 0.901],
        ["Qatar", 0.898],
        ["Cyprus", 0.921],
        ["Estonia", 0.838],
        ["Saudi Arabia", 0.854],
        ["Poland", 0.868],
        ["Lithuania", 0.802],
        ["Slovakia", 0.852],
        ["Andorra", 0.941],
        ["Malta", 0.919],
        ["United Arab Emirates", 0.874],
        ["Portugal", 0.922],
        ["Chile", 0.922],
        ["Hungary", 0.84],
        ["Cuba", 0.912],
        ["Bahrain", 0.871],
        ["Kuwait", 0.835],
        ["Croatia", 0.878],
        ["Latvia", 0.802],
        ["Argentina", 0.866],
        ["Uruguay", 0.88],
        ["Montenegro", 0.843],
        ["Bahamas", 0.85],
        ["Belarus", 0.768],
        ["Romania", 0.828],
        ["Libya", 0.851],
        ["Oman", 0.87],
        ["Russia", 0.738],
        ["Bulgaria", 0.824],
        ["Barbados", 0.852],
        ["Palau", 0.806],
        ["Antigua and Barbuda", 0.861],
        ["Malaysia", 0.846],
        ["Mauritius", 0.825],
        ["Trinidad and Tobago", 0.767],
        ["Panama", 0.885],
        ["Lebanon", 0.923],
        ["Venezuela", 0.841],
        ["Costa Rica", 0.922],
        ["Turkey", 0.85],
        ["Kazakhstan", 0.716],
        ["Seychelles", 0.818],
        ["Mexico", 0.885],
        ["Sri Lanka", 0.835],
        ["Saint Kitts and Nevis", 0.824],
        ["Iran", 0.832],
        ["Azerbaijan", 0.781],
        ["Serbia", 0.832],
        ["Jordan", 0.829],
        ["Grenada", 0.812],
        ["Georgia", 0.835],
        ["Brazil", 0.83],
        ["Peru", 0.843],
        ["Ukraine", 0.747],
        ["Macedonia", 0.849],
        ["Belize", 0.829],
        ["Bosnia and Herzegovina", 0.867],
        ["Armenia", 0.839],
        ["Fiji", 0.766],
        ["Thailand", 0.837],
        ["Tunisia", 0.86],
        ["Saint Vincent and the Grenadines", 0.808],
        ["China", 0.851],
        ["Dominica", 0.887],
        ["Algeria", 0.785],
        ["Albania", 0.883],
        ["Jamaica", 0.823],
        ["Saint Lucia", 0.843],
        ["Ecuador", 0.869],
        ["Colombia", 0.831],
        ["Tonga", 0.81],
        ["Suriname", 0.785],
        ["Dominican Republic", 0.822],
        ["Turkmenistan", 0.699],
        ["Mongolia", 0.731],
        ["Maldives", 0.891],
        ["Samoa", 0.818],
        ["Palestine, State of", 0.819],
        ["Indonesia", 0.782],
        ["Botswana", 0.683],
        ["Egypt", 0.787],
        ["Paraguay", 0.804],
        ["Gabon", 0.669],
        ["Bolivia", 0.727],
        ["Moldova", 0.752],
        ["El Salvador", 0.809],
        ["Uzbekistan", 0.742],
        ["Philippines", 0.749],
        ["Syrian Arab Republic", 0.839],
        ["South Africa", 0.568],
        ["Iraq", 0.76],
        ["Viet Nam", 0.861],
        ["Guyana", 0.712],
        ["Cape Verde", 0.848],
        ["Micronesia", 0.754],
        ["Kyrgyzstan", 0.731],
        ["Guatemala", 0.802],
        ["Namibia", 0.684],
        ["Timor-Leste", 0.731],
        ["Morocco", 0.784],
        ["Honduras", 0.828],
        ["Vanuatu", 0.794],
        ["Nicaragua", 0.844],
        ["Tajikistan", 0.727],
        ["Kiribati", 0.752],
        ["India", 0.714],
        ["Cambodia", 0.799],
        ["Bhutan", 0.743],
        ["Ghana", 0.633],
        ["Lao People's Democratic Republic", 0.743],
        ["Congo", 0.597],
        ["Zambia", 0.586],
        ["Sao Tome and Principe", 0.713],
        ["Bangladesh", 0.779],
        ["Equatorial Guinea", 0.509],
        ["Nepal", 0.745],
        ["Pakistan", 0.716],
        ["Kenya", 0.642],
        ["Swaziland", 0.446],
        ["Angola", 0.491],
        ["Myanmar", 0.695],
        ["Rwanda", 0.678],
        ["Nigeria", 0.5],
        ["Cameroon", 0.539],
        ["Yemen", 0.663],
        ["Madagascar", 0.688],
        ["Zimbabwe", 0.613],
        ["Solomon Islands", 0.733],
        ["Papua New Guinea", 0.653],
        ["Tanzania", 0.639],
        ["Comoros", 0.629],
        ["Mauritania", 0.639],
        ["Lesotho", 0.453],
        ["Senegal", 0.668],
        ["Uganda", 0.603],
        ["Benin", 0.605],
        ["Togo", 0.562],
        ["Sudan", 0.647],
        ["Haiti", 0.663],
        ["Afghanistan", 0.63],
        ["Djibouti", 0.643],
        ["Cate d'Ivoire", 0.473],
        ["Gambia", 0.597],
        ["Ethiopia", 0.671],
        ["Malawi", 0.543],
        ["Liberia", 0.624],
        ["Mali", 0.539],
        ["Guinea-Bissau", 0.528],
        ["Mozambique", 0.465],
        ["Guinea", 0.556],
        ["Burundi", 0.525],
        ["Burkina Faso", 0.559],
        ["Eritrea", 0.659],
        ["Sierra Leone", 0.393],
        ["Chad", 0.48],
        ["Central African Republic", 0.464],
        ["Congo", 0.461],
        ["Niger", 0.591],
      ]);

      var options = {
        colorAxis: { colors: ["#e31b23", "cyan", "#00853f"] },
      };

      var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );

      chart.draw(data, options);
    }
  }),
    $("footer").load("../components/footer.html", () => {
      /* Nachdem der footer geladen wurde, mache das Folgende: */
      //Get the button:
      toTopBtn = document.getElementById("toTopBtn");

      //Wenn gescrollt wird, wird der Header kleiner
      function scrollFunction() {
        let nav = document.querySelector("nav");
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          nav.classList.remove("bigHeader");
        } else {
          nav.classList.add("bigHeader");
        }
      }

      /* lasse den toTopButton nach kurzem Scrollen erscheinen */
      function scrollFunction_topBtn() {
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
        scrollFunction_topBtn();
        scrollFunction();
      };
    });
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
