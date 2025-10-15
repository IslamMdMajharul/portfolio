const languageSwitcher = document.getElementById("languageSwitcher");
const elements = document.querySelectorAll("[data-en]");

languageSwitcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  elements.forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});
// 🌟 Sticky header shrink effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 60) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
