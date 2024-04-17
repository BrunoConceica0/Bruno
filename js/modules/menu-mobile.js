import oustide from "./oustide.js";
export default function initMenuMobile() {
  const btnMenuMobile = document.querySelector('[data-button="menu"]');
  const listMenuMobile = document.querySelector('[data-button="lista"]');
  const events = ["click", "touchstart, change"];
  //desconhecido ? o botão esta dando null

  function openMenu(event) {
    event.preventDefault();
    listMenuMobile.classList.add("active");
    btnMenuMobile.classList.add("active");
    oustide(listMenuMobile, events, () => {
      listMenuMobile.classList.remove("active");
      btnMenuMobile.classList.remove("active");
    });
  }
  events.forEach((userEvent) => {
    btnMenuMobile.addEventListener(userEvent, openMenu);
  });
}
