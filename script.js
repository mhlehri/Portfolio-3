// bact to top button
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

// animation scroll
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", () => {
  const windowH = window.innerHeight;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < windowH) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
