// Write a function and find the smallest number in an array

function findSmallest(arr)
{
    let smallestNum = Infinity;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < smallestNum)
        {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}

let arr = [-10, -9, -3, -14, -6, -7]
console.log(findSmallest(arr));
