module.exports = function reverse (n) {

    const arrayN = Array.from(String(Math.abs(n)));
   
    const result = Number(arrayN.reverse().join(''));
    return result
}
