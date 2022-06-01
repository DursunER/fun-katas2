// Please do not change the name of this function
function calculateDivisors(arg) {
  
  let threeTotal = 0;
  let fiveTotal = 0
  let threes = 0
  let fives = 0

  if (arg < 3) {
    return 0
  } else {
    while (threes + 3 < arg) {
      threes += 3;
      threeTotal += threes;
     
    }
    while (fives + 5 < arg) {
      fives += 5;
      fiveTotal += fives;
      
    }  
}
return threeTotal + fiveTotal;
}

module.exports = calculateDivisors;