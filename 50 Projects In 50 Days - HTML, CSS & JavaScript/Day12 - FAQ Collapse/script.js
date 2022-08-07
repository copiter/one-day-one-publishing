const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // if (button.parentNode.classList.contains("active")) {
    //   button.parentNode.classList.remove("active");
    // } else {
    //   button.parentNode.classList.add("active");
    // }
    button.parentNode.classList.toggle("active");
  });
});
