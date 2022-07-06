window.addEventListener("load", () => {
  var buttons = document.querySelectorAll(".join-buttons-section>a>button");
  var imgsButton = document.querySelectorAll(
    ".join-buttons-section>a>button>img"
  );
  buttons.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      imgsButton[index].classList.add("filter-img");
    });
    element.addEventListener("mouseleave", () => {
      imgsButton[index].classList.remove("filter-img");
    });
  });
});
