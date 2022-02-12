/*
 * Greatest Common Divisor
 */
function gcd(a, b) {
    // a must be greater than b
    if (a < b) {
        var t = a;
        a = b;
        b = t;
    }

    // Euclidean algorithm
    // https://en.wikipedia.org/wiki/Euclidean_algorithm
    while (b !== 0) {
        t = b;
        b = a % b;
        a = t;
    }

    return a
}

/*
 * Least Common Multiple
 */
function lcm(a, b) {
    return a * b / gcd(a, b);
}