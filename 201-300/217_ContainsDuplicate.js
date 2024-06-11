//217
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(num){
    let obj = {}
    for(let i = 0; i < num.length; ++i){
       if(obj[num[i]]){
        return true
       }
       obj[num[i]] = 1
    }
    return false
};