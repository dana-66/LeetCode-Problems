// 440. K-th Smallest in Lexicographical Order
// Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].

function findKNumber(n, k) {
    function countSteps(prefix, n) {
        let current = prefix;
        let nextPrefix = prefix + 1;
        let steps = 0;

        while(current <= n){
            steps += Math.min(n + 1, nextPrefix) - current;
            current *= 10;
            nextPrefix *= 10;
        }

        return steps;
    }

    let prefix = 1;
    k -= 1;

    while( k > 0) {
        const steps = countSteps(prefix, n);

        if(steps <= k) {
            prefix += 1;
            k -= steps;
        }else {
            prefix *= 10;
            k -= 1;
        }
    }
    return prefix;
}

// example
console.log(findKNumber(13, 2));