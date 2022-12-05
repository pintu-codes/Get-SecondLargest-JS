function getSecondLargest(nums) {
    let largest = Math.max(...nums);
    
    let secondLargest = nums[0];
    for (let i=1; i<nums.length; i++){
        if(nums[i] > secondLargest && nums[i] < largest){
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));
