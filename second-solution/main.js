const btns = document.querySelectorAll("button");
const butt = document.querySelectorAll(".btn-k");
const paragraph = document.querySelector("p");
const spaceBtn = document.querySelector(".btn-long");
const aBtn = document.querySelector(".aBtn");
const body = document.querySelector("body");

// adding hover and border on the buttons
btns.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
  });
});

// adding the textContent in the paragraph
butt.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    paragraph.textContent = paragraph.textContent + event.target.textContent;
  });
});

spaceBtn.addEventListener("click", (event) => {
  paragraph.textContent += " ";
});

// changing the whole background on click and choosing random

const randomBackground = () => {
  return Math.floor(Math.random() * 255);
};

aBtn.addEventListener("click", (event) => {
  const r = randomBackground();
  const g = randomBackground();
  const b = randomBackground();

  body.style.background = `rgb(${r}, ${g}, ${b})`;
  event.target.style =
    "border: 1px solid green; padding: 20px; background: green; color: white;";
});

// beforeunload question

window.addEventListener("beforeunload", (event) => {
  event.returnValue = "Are you sure you want to leave this page";
  return true;
});
