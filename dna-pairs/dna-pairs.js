// Please do not change the name of this function
function dnaPairs(dna) {

  const dnaPairs = { "C": "G", "G": "C", "T": "A", "A": "T" };
  let dnaArr = [];
  let dnaArrTemp = [];

  if (dna === "") {
    return []
  }

  for (let i=0; i < dna.length; i++) {
      dnaArrTemp[0] = dna[i]
      dnaArrTemp[1] = dnaPairs[dna[i]];
      dnaArr = dnaArr.concat(dnaArrTemp); 

      console.log(dnaArrTemp)
      console.log(dnaArr)
     
  }

  return dnaArr;
}

module.exports = dnaPairs;
