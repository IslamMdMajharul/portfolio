const languageSwitcher = document.getElementById("languageSwitcher");
const elements = document.querySelectorAll("[data-en]");

languageSwitcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  elements.forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});
