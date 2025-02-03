const links = document.querySelectorAll(".nav-item a");
document.querySelector(".nav-item a").style.color = "#40E0D0";
function enlargeImage(link) {
   link.style.color = "#40E0D0"; // Turquoise color
  }

links.forEach(link => {
  link.addEventListener("click", function () {
    // Remove the active class from all links
    // links.forEach(l => l.classList.remove("active"));
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      links[i].style.color = ""; // Reset color
    }
    // Add the active class to the clicked link
    this.classList.add("active");
    enlargeImage(this);
  });
});
