// Write a function and find the second largest number in an array

function findSecondLargest(arr)
{
    // corner case 1: If array has only one number, retunr -1
    if (arr.length < 2)
    {
        return -1;
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > firstLargest)
        {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        //corner cast 2: If array has duplicate num with first largest,
        //we have to check arr[i]!=firstlargest then it will return the second largest number even there is a duplicate number
        else if (arr[i] > secondLargest && arr[i]!= firstLargest)
        {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [10, 9, 3, 14, 6, 7, 14]
console.log(findSecondLargest(arr));
