import {calc} from "./calc.js";

var btn=document.querySelector(".btn");
var ip1=document.querySelector(".inp1");
var ip2=document.querySelector(".inp2");
var result=document.querySelector("h1");
btn.addEventListener("click",()=>{
   result.textContent=calc(Number(ip1.value),Number(ip2.value))
});
