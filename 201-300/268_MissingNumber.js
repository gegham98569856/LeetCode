//268.
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let sum1 = 0
    let sum2 = n
  for(let i = 0; i < n; ++i){
    sum1 += nums[i]
    sum2 += i
  }
  return sum2 - sum1
};