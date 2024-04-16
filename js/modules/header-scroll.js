export default function initHeaderScroll() {
  const header = document.querySelector("[data-scrolling]");
  const section = document.querySelector("[data-observer]");
  const listMenu = document.querySelector('[data-button="lista"]');
  const menu = document.querySelector('[data-button="menu"]');

  function scrollingHeader() {
    const options = {
      root: null,
      threshold: 0,
      marginTop: "0",
    };
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("scrolling");
          if (window.section <= 0) {
            listMenu.style.marginTop = "62px";
            menu.style.marginRight = "-50px";
          }
        } else {
          header.classList.remove("scrolling");
          listMenu.style.marginTop = "0px";
        }
      });
    }, options);
    observer.observe(section);
  }

  window.addEventListener("scroll", scrollingHeader);

  window.addEventListener("unload", () => {
    window.removeEventListener("scroll", scrollingHeader);
  });
}
