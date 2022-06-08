// Please do not change the name of this function
function dnaPairs(dna) {

  const dnaPairs = { "C": "G", "G": "C", "T": "A", "A": "T" };
  let dnaArr = [];

  if (dna === "") {
    return []
  }

  for (let i=0; i < dna.length; i++) {

    let key = dnaPairs[dna[i]];
    let dnaArrTemp = [];
    dnaArrTemp.push(dna[i])
    dnaArrTemp.push(key)
    dnaArr.push(dnaArrTemp)
  }

  return dnaArr;
}

module.exports = dnaPairs;
