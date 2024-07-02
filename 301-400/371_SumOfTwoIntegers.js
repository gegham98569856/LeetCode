//371.
//Given two integers a and b, return the sum of the two integers without using the operators + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let tmp = 0;
    while(b != 0)
    {
 tmp = (a & b) << 1
    a = a^b
    b= tmp 
    }
    return a
};