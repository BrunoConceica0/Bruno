export default function oustide(element, events, callback) {
  const html = document.documentElement;
  const oustide = "data-oustide";
  const eventos = ["click", "touchstart"];
  if (!element.hasAttribute(oustide)) {
    setTimeout(() => {
      eventos.forEach((userEvents) => {
        html.addEventListener(userEvents, clickOustide);
      });
    });
  }
  function clickOustide(event) {
    element.setAttribute(oustide, "");
    if (!element.contains(event.target)) {
      eventos.forEach((userEvents) => {
        html.removeEventListener(userEvents, clickOustide);
      });
      element.removeAttribute(oustide);
    }
    callback();
  }
}
