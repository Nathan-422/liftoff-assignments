function findLowercaseWord(word) {
	
    let hiddenWord = '';

    for (let letter of word) {
        if (isLowerCase(letter)) {
            hiddenWord += letter;
        }
    }

    return hiddenWord;
}

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

console.log(findLowercaseWord('UcUNFYGaFYFYGtNUH'));  // cat
console.log(findLowercaseWord('bEEFGBuFBRrHgUHlNFYaYr')); // burglar
console.log(findLowercaseWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')); //  embezzlement