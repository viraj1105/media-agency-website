const title = document.querySelector(".agency-name");
const eyebrow = document.querySelector(".eyebrow");
console.log(eyebrow);
eyebrow.style.color = "purple";
const nav = document.querySelector(".top-nav");

console.log(eyebrow.innerHTML);
eyebrow.innerText = "CREATIVE STUDIOS";
eyebrow.style.color = "blue";
const editor = document.querySelector("#editor-link");
console.log(editor);
editor.addEventListener("keydown", function(){
    console.log("Editor Clicked!");
})