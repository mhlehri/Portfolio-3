const toTop = () => {
  scrollTo(0, 0);
};

const button = document.querySelector("#up-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
  }
});
