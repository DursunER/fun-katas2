// Please do not change the name of this function
function getTweetData (tweet) {
  
let myObj =  { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 }
let myArr = tweet.split(" ");
let tagCount = 0;
let mentionCount = 0;
let myWord = "";

for (let i=0; i< myArr.length; i++) {
  
  myWord = myArr[i]
  
  if (myWord[0] === "#") {
      tagCount ++;
      myObj.tags.push(myWord)
      }

  if (myWord[0] === "@") {
      mentionCount ++;
      myObj.mentions.push(myWord)
        }
}

myObj.tagCount = tagCount;
myObj.mentionCount = mentionCount;
myObj.length = tweet.length;

return myObj;

}

module.exports = getTweetData;
