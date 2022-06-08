// Please do not change the name of this function
function changeCalculator (change) {

   let changeBack = {};

  if (change >= 50) {
      const xFifties = Math.floor(change/50);
      const key = "50";
      changeBack[key] = xFifties
      change = change % 50
   } 
   
   if (change >= 20) {
      const xTwenties = Math.floor(change/20);
      const key = "20";
      changeBack[key] = xTwenties
      change = change % 20
   } 
  
   if (change >= 10) {
      const xTens = Math.floor(change/10);
      const key = "10";
      changeBack[key] = xTens
      change = change % 10
 } 

  if (change >= 5) {
      const xFives = Math.floor(change/5);
      const key = "5";
      changeBack[key] = xFives
      change = change % 5
} 

if (change >= 2) {  
   const xTwos = Math.floor(change/2);
   const key = "2";
   changeBack[key] = xTwos
   change = change % 2
} 

if (change === 1) {
   const key = "1";
   changeBack[key] = 1
} 

 console.log(changeBack)
return changeBack
  
};
  


module.exports = changeCalculator;
