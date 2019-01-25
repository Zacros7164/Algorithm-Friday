function numberValidator(number){
    const validNumber = number.match(/\d{1,10}/g);
    return validNumber
}

const array = ['555-555-5555',

'(555)555-5555',

'555 555 5555',

'555 555-555',

'1-555-555-5555',

'(1)555-555-5555',

'5555555555',

'555-five-55-aebdgtxi;;3tt4greqr6seven',

'5-trumprules-555-5-5-5-5-5-5',

'2798504trumpforprez23587928579428795458792',

'1-800-ninjas-are-cool',

'1900-acdc4life.']


function convertPhone(numberArray){
    for(i=0;i<array.length;i++){
        let regex = /\d?\d{10}/
        let goodNumber = numberArray[i].match(regex)
        if(goodNumber){
            console.log("number matched")
        }else{
            console.log("Not a valid number")
        }
    }
}
function numberAsString(array){
    let numberArray = []
    for(let i=0;i<array.length;i++){
        let numberString = numberValidator(array[i]).join('')
        numberArray.push(numberString)
        // console.log(numberArray)
        return numberArray
    }
}

function allTogether(number){
    let returnValue = numberValidator(number);
    returnValue = numberAsString(returnValue);
    returnValue = convertPhone(returnValue);
    console.log(returnValue)
}

for(let i=0;i<array.length;i++){
    allTogether(array[i]);
}