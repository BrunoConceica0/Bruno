export default function initHeaderScroll() {
  const header = document.querySelector("[data-scrolling]");

  function scrollingHeader() {
    const scrolling = window.scrollY;
    if (scrolling > 0) {
      header.classList.add("scrolling");
    } else {
      header.classList.remove("scrolling");
    }
  }

  window.addEventListener("scroll", scrollingHeader);

  window.addEventListener("unload", () => {
    window.removeEventListener("scroll", scrollingHeader);
  });
}
