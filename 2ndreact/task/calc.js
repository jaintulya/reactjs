import sum from "./add.js";
import subtract from "./sub.js";
import multiply from "./multi.js";
import divide from "./div.js";


export function calc(a, b) {
   return `
Sum: ${sum(a, b)}
Subtract: ${subtract(a, b)}
Multiply: ${multiply(a, b)}
Divide: ${divide(a, b)}
   `;
}



