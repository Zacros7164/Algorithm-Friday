// // console.log("sanity check")

// // guess a number
// // - loop through all

// let numberList = [1,2,3,4,5]
// // let number = Math.ceil(Math.random()* numberList.length);
// let number = 5;
// console.log(`Number chosen is ${number}`)
// // for(let i = 0; i < numberList.length; i++){
// //     if (numberList[i] == number){
// //         console.log("Found!", number)
// //         console.log(`it took ${i+1} guesses to get the answer`)
// //         break
// //     }
// // }

// // guess random (not a good option)
// let found = false;
// // let counter = 0
// // while(!found) {
// //     counter++
// //     let randIndex = Math.floor(Math.random() * numberList.length);
// //     if(numberList[randIndex]=== number){
// //         found = true;
// //         console.log("Found", number)
// //         console.log(`it took ${counter} guesses`)
// //     }
// // }

// // binary search

// found = false;
// let index = (Math.floor(numberList.length/2))
// while(!found){
//     if(number === numberList[index]){
//         console.log(`Number was `,numberList[index])
//         found = true
//     }else if(number< numberList[index]){
//         // cut off the top half by moving the index to the middle of the lower half
//         index = Math.floor(index/2);
//         console.log("Number is lower")
//     }else{
//         // we know it's higher
//         index = Math.floor((index+numberList.length)/2)
//         console.log("Number is lower")
//     }
// }


function binarySearch(list, value){
    // we will set a range or bounds to check
    // this will get smaller as we guess
    // start the bottom number at 0
    let bottomIndex = 0;

    // start the top number

    let topIndex = list.length -1;

    let middleIndex = Math.floor((topIndex + bottomIndex)/2);
    // console.log(bottomIndex,middleIndex,topIndex);


    // we need a while looop
    // we need to keep looking until we find the correct number

    // keep looping while middle is not the right number and there isn't only one left
    let found = false;
    let counter = 1;
    while(!found){
        counter++
        if(value < list[middleIndex]){
            topIndex = middleIndex -1;
            
        }else if(value > list[middleIndex]){
            bottomIndex = middleIndex + 1;
            
        }else{
            found = true;
        }
        // recalculate the middle because we changed the top or bottom
        middleIndex = Math.floor((topIndex + bottomIndex)/2);
    }
    return `we found ${middleIndex} and it took ${counter} guesses`
}



let numbers = [];
for(let i =0; i < 1000; i++){
    numbers.push(i)
}

const index = binarySearch(numbers,98)
console.log(index)