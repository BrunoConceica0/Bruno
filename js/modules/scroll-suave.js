//1 primeiro passo é chamar os linksInternos
//com ele faça um forEach para cada elemento adcionar um evento de click
//2 com isso faz a função de animação ao scroll
// previne o clica quando ocorrer e crie um nova variante que puxe o href do evento, que vem do link, para cada link ussando this (this.getAttribute("href"))
//  agora puxe os atributo da section do href
// para funcionar o animaçãoScroll tem que pegar o top de cada section usando offsetTop
// usando o window.scrollTo, usando este metódo use so paramentros de top para topo do sections e  behavior: "smooth",

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  function animeScroll(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    const top = section.offsetTop;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", animeScroll);
  });
}
