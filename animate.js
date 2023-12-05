
document.getElementById("about-button").addEventListener("click", function() {
          
  document.body.scrollIntoView({ behavior: "smooth", block: "end" });
  
  });

const options = document.querySelector(".options");

const subMenu = document.querySelector(".sub-menu");

options.addEventListener("click", () => {
  options.classList.toggle("active");
  subMenu.classList.toggle("active");
});