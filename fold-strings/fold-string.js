// Please do not change the name of this function
function foldString (str) {

let newStr = "";

if (str.length % 2 === 0) {
      newStr = str.slice(0,str.length/2).split("").reverse().join("") + str.slice(str.length/2, str.length).split("").reverse().join("")
      return newStr;

} else {
      newStr = str.slice(0,(str.length-1)/2).split("").reverse().join("") + str.charAt(((str.length-1)/2)) + str.slice(((str.length-1)/2)+1, str.length).split("").reverse().join("")
      return newStr;

}
};

module.exports = foldString
