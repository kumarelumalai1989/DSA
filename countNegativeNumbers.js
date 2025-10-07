function countNegativeNumbers(arr)
{
    let count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        {
            count += 1;
        }
    }
    return count;
}

let arr = [-10, 9, -3, 4, -6, 7]
console.log(countNegativeNumbers(arr));
