function minMax(arrayOfNumbers) {
    
    // could also check for an array in the first place

    if (arrayOfNumbers.length === 0) {
        return null;
    }
    
    let min = arrayOfNumbers[0];
    let max = arrayOfNumbers[0];
    for (const num of arrayOfNumbers) {

        // could check that the element is a number

        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return [min, max];
}