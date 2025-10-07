function searchElement(arr, elem)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == elem)
        {
            return i;
        }
    }
    return -1;
}

let arr = [10, 9, 3, 4, 6, 7]
console.log(searchElement(arr, 6));
