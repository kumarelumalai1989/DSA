// Write a function and find the largest number in an array

function findLargest(arr)
{
    let largestNum = -1;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > largestNum)
        {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

let arr = [-10, 9, -3, 14, -6, 7]
console.log(findLargest(arr));
