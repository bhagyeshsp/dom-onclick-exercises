// Demo-2 code
const heading3 = document.querySelector("#demo-2");
heading3.addEventListener("click", () => changeColor(heading3, "red"));
function changeColor(element, color) {
    element.style.color = color;
}

// Demo-3 code
const fieldValue1 = document.querySelector("#field1");
const fieldValue2 = document.querySelector("#field2");
const btnCopy = document.querySelector("#demo-3");

btnCopy.addEventListener("click", () => {
    fieldValue2.value = fieldValue1.value;
})

// Demo-4 code
const bodyContainer = document.querySelector("body");
bodyContainer.addEventListener("click", () => {
    bodyContainer.style.backgroundColor = "lightblue";
})

// Demo-5 code. This demo uses little bit of CSS styles
const hiddenElement = document.querySelector("#hidden");
const btnToggle = document.querySelector("#demo-5");

btnToggle.addEventListener("click", () => {
    hiddenElement.classList.toggle("show");
})