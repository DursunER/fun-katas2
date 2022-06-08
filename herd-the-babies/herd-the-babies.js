// Please do not change the name of this function
function herdTheBabies (str) {
  
  if(str === "") {
    return str
  }

let strArr = str.split("")
console.log(str)
const sorted = strArr.sort().join('');  
console.log(sorted)
return sorted
};


module.exports = herdTheBabies;
