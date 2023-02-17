const box = document.querySelector(".cartoon--speech--animate");

setTimeout(() => {
  const box = document.querySelector(".cartoon--speech--animate");
  box.classList.add("hidden");
}, 5000);
  box.addEventListener("transitionend", () => {
    box.style.display = "none";
  });