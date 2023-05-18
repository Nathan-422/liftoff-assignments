function addUp(num) {
	
    let isOdd = false;

    if (num % 2 === 1) {
        isOdd = true;
        num += 1;
    }

    let half = num / 2;

    let result = isOdd ? half * (num - 1) : half * (num + 1);

    return result;

}

console.log(addUp(4));  // 10
console.log(addUp(13)); // 91
console.log(addUp(600)); //  180300