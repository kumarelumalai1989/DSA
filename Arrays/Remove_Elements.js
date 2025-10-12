//Remove Element: Given an integer array nums and an integer val, remove all occurrences of val in nums in-place
function Remove_String(nums, val) {
    let x = 0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]!=val)
        {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
};