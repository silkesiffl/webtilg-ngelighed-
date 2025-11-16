const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector("header > nav").classList.toggle("show");
    document.querySelector("#bars i").classList.toggle("fa-bars");
    document.querySelector("#bars i").classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);

/*Javascript til at lave accordion er taget direkte fra W3 school "How TO - Collapsibles/Accordion" og kopiret ind herunder*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}