//JS Whiteboard (Julian Robinson, April 19th 2023)


//Problem 8

const str = 'S A I N T E D';
const allSpacesRemoved = str.replaceAll(' ', '');

console.log(allSpacesRemoved);







//Problem 9

function booleanNum(num){
    return num % 10 === 0 ? true : false;
}

console.log(booleanNum(25))






//Probem 10

function getVowels(str){
    //Intializes the count
    let vowelsCount = 0;

    const regex = /[aeiou]/gi;
    vowelsCount = str.match(regex);
    return vowelsCount ? vowelsCount.length : 0;
}

console.log(getVowels("I'm the greatest coder ever"))