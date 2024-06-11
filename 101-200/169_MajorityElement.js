//169
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; ++i){
        if(obj[nums[i]]){
            obj[nums[i]] += 1 
        }else{
            obj[nums[i]] = 1
        }
            if(obj[nums[i]] >= nums.length / 2){
                return nums[i]
            }
    }
        return false
};