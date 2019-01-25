const fs = require('fs');
const file = fs.readFileSync('names.txt', 'utf-8');
let wordArr = file.split('\n')
// console.log(wordArr)
function findPalindrome(word){
    let reversedWord= word.split("").reverse().join("");
    // console.log(reversedWord)
    if (word === reversedWord){
        return true
    }
}
for(let i=0; i<wordArr.length;i++){
    // console.log('entered for loop')
    if(findPalindrome(wordArr[i])){
        console.log(wordArr[i])
    }
}