import conv from "./kmtocm.js";
let inp = document.querySelector(".inp1");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
	const value = Number(inp.value);
	result.textContent = conv(value);
});
