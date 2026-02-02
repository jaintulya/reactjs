
import m from "./kmtom.js";
import feet from "./kmtofeet.js";
function cm(a){
    return a*100000;
}
function conv(a){
    return `Meters: ${m(a)} , Feet: ${feet(a)} , Centimeters: ${cm(a)}`;
        
    }

// function conv(a){
//     console.log(m(a));
//     console.log(feet(a));
//     console.log(cm(a));
// }


export default conv;