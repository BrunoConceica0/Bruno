// Crie o evento do html
// no oustide coloaque o paramentro do element , events e callback
// cria um evento do html de click
// crie a função do callback do evento, com ele o parametro do oustise element, vai conferi se contém event.target, se ocorre ele tem que excuta os cleanupListeners() e o callback() dentro da função
// crei função  cleanupListeners para que quando for clicar pra fora, ele desativara o estilo de active como dispaly:none ; por padrão, pora que isso ocorra tem que criar um forEach do paramentro do events do outside, não é necesssario usar o forEach quando somento houve apenas 1 event, assim pegado html e removendo o evento  html.removeEventListener(eventName, clickOutside);
// cria uma outra váriovel outsideAtt ="data-outside"
//Tem que conferi o se existe se tem o atributo de oustide no element   if (!element.hasAttribute(outsideAttr)), "esta conferencia é isolado"
// se não existir que fazer um loop com setTemout e nele tem que colocar o outro lood events e colocar  "html.addEventListener que já existe"
//após conferir adicionar  element.setAttribute(outside, "")
// e quando for clicar para for tem que remove o elemento do element, tem que colocar após da funcão  cleanupListeners forEach
// e no final da ultimo linha tem que colocar para return cleanupListeners;

export default function oustide(element, events, callback) {
  const html = document.documentElement;
  const oustideAtrr = "data-outside";

  const outsideClick = (event) => {
    if (!element.contains(event.target)) {
      cleanupListener();
      callback();
    }
  };

  const cleanupListener = () => {
    events.forEach((eventName) => {
      html.removeEventListener(eventName, outsideClick);
    });
    element.removeAttribute(oustideAtrr);
  };

  if (!element.hasAttribute(oustideAtrr)) {
    setTimeout(() => {
      events.forEach((eventName) => {
        html.addEventListener(eventName, outsideClick);
      });
    });
    element.setAttribute(oustideAtrr, "");
  }
  return cleanupListener;
}
