//Remove Duplicates from Sorted Array
function Remove_Duplicate(nums) {
    let x = 0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>nums[x])
        {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
};
