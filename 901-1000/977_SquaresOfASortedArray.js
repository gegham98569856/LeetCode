//977.

//Given an integer array nums sorted in non-decreasing order, return an array of 
//the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = nums.map(num => num ** 2).sort((a,b) => a - b)
    return arr
};