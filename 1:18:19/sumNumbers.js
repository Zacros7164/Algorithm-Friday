const fs= require('fs');
const file = fs.readFileSync('numbers.txt', 'utf-8');
// console.log(file)
const numStr = file.split('\n').join('')
const numArr = numStr.split('')
// console.log(numArr)
let count = 0

for(let i=0;i<numArr.length;i++){
    count += Number(numArr[i]) 
}

console.log(count)
