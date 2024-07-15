// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
    let largestPrime = -1;

    // Divide n by 2 until it is odd
    while (number % 2 === 0) {
        largestPrime = 2;
        number = number / 2;
    }

    // Now n must be odd, start checking from 3 onward
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestPrime = i;
            number = number / i;
        }
    }

    // If n is still greater than 2, then it must be prime
    if (number > 2) {
        largestPrime = number;
    }

    return largestPrime;
}

// Example usage:
let number = 13195;
console.log(largestPrimeFactor(number));  // Output: 29
