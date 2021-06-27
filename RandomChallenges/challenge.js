//array of ints called nums, and target,  return array of two interegers that will add up to targer

function findTarget(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let k=0; k<nums.length; k++){
            if(nums[i]+nums[k]===target && i!==k){
                return [i,k]
            }
        }
    }
}

console.log(findTarget([1,2,3,4,5], 4))