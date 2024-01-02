const gearButton = document.querySelector(".gear-tab");
// Menu Start
const menuButton = document.querySelector(".hamburger_menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const close_button = document.querySelector(".close_button");
// Menu End
const modeIcon = document.getElementById("modeIcon");
const header = document.querySelector(".header");


const handleScroll = () => {
  if (window.scrollY > 70) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

window.addEventListener("scroll", handleScroll);

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

gearButton.addEventListener("click", toggleMode);

function toggleMode() {
  const element = document.body;

  if (element.classList.contains("dark-mode")) {
    element.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    modeIcon.innerHTML = '<i  class="fa-regular fa-sun"></i>';
  } else {
    element.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    modeIcon.innerHTML = '<i style="color:black" class="fa-solid fa-moon"></i>';
  }
}

// On page load, check if dark mode is enabled from localStorage
window.onload = function () {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
    modeIcon.innerHTML = '<i  style="color:black" class="fa-regular fa-sun"></i>';
  } else {
    document.body.classList.remove("dark-mode");
    modeIcon.innerHTML = '<i  class="fa-solid fa-moon"></i>';
  }
};

// Menu 
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "auto";
}

function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  enableScroll();
}

menuButton.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  disableScroll();
});

close_button.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

