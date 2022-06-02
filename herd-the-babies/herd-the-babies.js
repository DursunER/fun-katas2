// Please do not change the name of this function
function herdTheBabies (str) {
  
  if(str === "") {
    return str
  }

let strArr = str.split(" ")

const sorted = strArr.sort((a,b) =>  b-a )

return sorted
};


module.exports = herdTheBabies;
