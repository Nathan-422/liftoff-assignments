function minMax(arrayOfNumbers) {
    let min = arrayOfNumbers[0];
    let max = arrayOfNumbers[0];
    for (const num of arrayOfNumbers) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return [min, max];
}