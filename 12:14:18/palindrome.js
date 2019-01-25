let largestPalindrome = 0;
for(let i = 999; i > 900; i--){
   for(let j = 999; j > 900; j--){
       let temp = i * j;
       let reversedTemp = temp.toString();
       if(findPalindrome(reversedTemp)){
           if(temp > largestPalindrome){
               largestPalindrome = temp
           }
       }
       
   }
}
console.log(largestPalindrome)

function findPalindrome(product){
   let reversedProduct= product.split("").reverse().join("");
   if (product === reversedProduct){
   let numProduct = Number(product)
   return true
   }
}
