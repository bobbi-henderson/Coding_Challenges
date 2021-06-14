// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let answer = []
    if(nums.includes(target)){
        nums.forEach((x,i)=>{
            if(x===target || (x===target && nums[i+1]!== target)){
                answer.push(i)
            }
        })
    } else {
        answer = [-1,-1]
    }
    let len = answer.length
    return len === 1 ? answer.concat(answer) : len > 2 ? [answer[0], answer[len-1]]: answer
};