/* 
    CIT 281 Lab 1
    Name: Randy Cao
 */

const character = 'abcdefghijklmnopqrstuvwxyz';

    // Returns a random number between min (inclusive) and max (exclusive)

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomLetters(length){
    let result = '';
    const charLength = character.length;

    for (let i = 0; i < length; i++){
        result += character.charAt(Math.floor(Math.random()* charLength));
    }

    console.log(result)
}

randomLetters(getRandomInteger(5, 25))