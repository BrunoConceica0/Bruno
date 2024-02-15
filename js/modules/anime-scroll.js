//na estruta do html tem que puxa os sections principais usando o data-scroll='section'
//criando um evento com window, "janela que contém um elemento DOM" e o callback
// pega a sections e fale com cada elemento com o forEach crie um variante do top section do cliente/usuário, usando o .getBoundingClientRect().top
//faz um conferencia de se sectionTop for menor do que zero e então o section terá classe de ativo
// indo ao css usando o atributo do data-scrol"section", use o opacity, transfom e transition e quando for ativo faz animar
//por tanto não esta 100% para melhora tem que peag a metade da tela do usuário e
export default function initAnimeScroll() {}
const sections = document.querySelectorAll("[data-scroll='section']");

function animeScroll() {
  sections.forEach((section) => {
    const metaTela = window.innerHeight * 0.6;
    const sectionTop = section.getBoundingClientRect().top - metaTela;
    if (sectionTop < 0) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", animeScroll);
