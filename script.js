// Typed Text
var typed = new Typed('#typed', {
    strings: ["Web Developer", "ML Enthusiast", "Tech Explorer 🚀"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
  
  // Tabs Switch
  function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  
  // Theme Switcher
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // 3D tilt effect
  VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
