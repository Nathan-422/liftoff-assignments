function LongestWord(sen) { 

    const regex = /([A-z|0-9])\w+/g;
    let words = sen.match(regex);
    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("fun&!! time"));