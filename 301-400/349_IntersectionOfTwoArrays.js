//349
// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Set()
    for(let i = 0;i <nums1.length; ++i){
        for(let j = 0;j < nums2.length; ++j){
            if(nums1[i] === nums2[j]){
                res.add(nums1[i])
            }
        }
    }
    return [... res]
};