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

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str){
    //initialize count 
    let count = 0;

    //loop to test if each character is a vowel 
    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)){
            count++;
        }
    }
    //returns the number of vowels 
    return count


}

//Prompt string input 
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);