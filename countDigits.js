// Function to count the nuber of digits from the given number.
function countDigits(n)
{
    if (n == 0) return 1;
    //Handle the negative number
    n = Math.abs(n);

    let count = 0;
    while (n > 0)
    {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let num = -259;
let result = countDigits(num);
console.log(result);
