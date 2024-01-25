const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const menuOne = document.getElementById("menuOne");
const menuTwo = document.getElementById("menuTwo");
const menuThree = document.getElementById("menuThree");

section1.addEventListener(
  "click",
  (displayMenuOne = () => {
    section1.style.backgroundColor = "#a74d03";
    section1.style.color = "#fff";
    section2.style.backgroundColor = "";
    section2.style.color = "";
    section3.style.backgroundColor = "";
    section3.style.color = "";
    menuOne.classList.remove("hide");
    menuTwo.classList.add("hide");
    menuThree.classList.add("hide");
  })
);
section2.addEventListener(
  "click",
  (displayMenuTwo = () => {
    section1.style.backgroundColor = "";
    section1.style.color = "";
    section2.style.backgroundColor = "#a74d03";
    section2.style.color = "#fff";
    section3.style.backgroundColor = "";
    section3.style.color = "";
    menuOne.classList.add("hide");
    menuTwo.classList.remove("hide");
    menuThree.classList.add("hide");
  })
);
section3.addEventListener(
  "click",
  (displayMenuThree = () => {
    section1.style.backgroundColor = "";
    section1.style.color = "";
    section2.style.backgroundColor = "";
    section2.style.color = "";
    section3.style.backgroundColor = "#a74d03";
    section3.style.color = "#fff";
    menuOne.classList.add("hide");
    menuTwo.classList.add("hide");
    menuThree.classList.remove("hide");
  })
);
