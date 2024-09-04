const openMenuBtn = document.querySelector(".open_menu_btn");
const closeMenuBtn = document.querySelector(".close_menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");

/* function */
function openMenu() {
  mobileMenu.classList.add("active");
}
function closeMenu(){
  mobileMenu.classList.remove("active");
}
/* Events */
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu)