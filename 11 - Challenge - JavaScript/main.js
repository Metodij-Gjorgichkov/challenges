// selecting the buttons
const buttons = document.querySelectorAll(".btn");
const paragraph = document.querySelector("p");
const spaceBtn = document.querySelector(".btn-long");

// hover on the buttons
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
  });
});

// adding the textContent to the paragragh
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    paragraph.textContent += event.target.textContent;
  });
});

spaceBtn.addEventListener("click", () => {
  paragraph.textContent += " ";
});
