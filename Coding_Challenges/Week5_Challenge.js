function addUp(num) {
	
    let isOdd = false;

    if (num % 2 === 1) {
        isOdd = true;
        num += 1;
    }

    let half = num / 2;
    num += isOdd ? -1 : 1;

    return half * num;
}

console.log(addUp(4));  // 10
console.log(addUp(13)); // 91
console.log(addUp(600)); //  180300