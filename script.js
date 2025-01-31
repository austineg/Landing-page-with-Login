const links = document.querySelectorAll(".nav-item a");

function enlargeImage() {
    document.getElementById("nav-item a").style.color = "#40E0D0 ";
  }

links.forEach(link => {
  link.addEventListener("click", function () {
    // Remove the active class from all links
    // links.forEach(l => l.classList.remove("active"));
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    // Add the active class to the clicked link
    this.classList.add("active");
    enlargeImage();
  });
});
