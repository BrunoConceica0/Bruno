import oustide from "./oustide.js";
export default function initMenuMobile() {
  const btnMenuMobile = document.querySelector('[data-button="menu"]');
  const listMenuMobile = document.querySelector('[data-button="lista"]');
  const eventos = ["click", "touchstart"];
  //desconhecido ? o botão esta dando null
  function openMenu(event) {
    event.preventDefault()
    listMenuMobile.classList.add("active");
    btnMenuMobile.classList.add("active");
    oustide(listMenuMobile, eventos, () => {
      listMenuMobile.classList.remove("active");
      btnMenuMobile.classList.remove("active");
    });
  }
  btnMenuMobile.addEventListener("click", openMenu);
}
