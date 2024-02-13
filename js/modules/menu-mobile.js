import outside from "./oustide.js";
export default function initMenuMobile() {}
const btnMenuMobile = document.querySelector('[data-button="menu"]');
const listMenuMobile = document.querySelector('[data-button="lista"]');
const eventos = ["click", "touchstart"];

function openMenu(event) {
  listMenuMobile.classList.add("active");
  btnMenuMobile.classList.add("active");
  outside(listMenuMobile, ["click", "touchstart"], () => {
    console.log("test");
    listMenuMobile.classList.remove("active");
    btnMenuMobile.classList.remove("active");
  });
}
eventos.forEach((userEventos) => {
  btnMenuMobile.addEventListener(userEventos, openMenu);
});
