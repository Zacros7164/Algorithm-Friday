numberList= [5,4, 11, 2, 6]
let notSorted = true;
while(notSorted){
    // let loopNumber = 1
    let counter = 0
    for(let i = 0; i< numberList.length; i++){
        // console.log(loopNumber, " times through")
        // loopNumber++    
        let currentNum = i
        let nextNum = i+1
        if(numberList[currentNum] > numberList[nextNum]){
            let stash = numberList[currentNum]
            // console.log("stash",stash)
            numberList[currentNum] = numberList[nextNum]
            // console.log("curr num",numberList[currentNum])
            numberList[nextNum] = stash
            // console.log("next num", numberList[nextNum])
            counter++
            // console.log("counter",counter++)
        }
        // console.log("counter = ", counter)
        // console.log(numberList)
    }
    if(counter == 0){
        notSorted = false;
    }
}
console.log(numberList)



// more effecient bubble list