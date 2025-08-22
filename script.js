
    
// Dark mode toggle
    const toggle = document.getElementById("darkmode-toggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    // Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const menuWrapper = document.querySelector(".menu-wrapper");
    menuBtn.addEventListener("click", () => {
      menuWrapper.classList.toggle("show");
    });
    document.addEventListener("click", (e) => {
      if (!menuWrapper.contains(e.target) && !menuBtn.contains(e.target)) {
        menuWrapper.classList.remove("show");
      }
    });

    // Navbar transition effect on scroll
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });