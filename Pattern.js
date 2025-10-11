//Star pattern
/*
*
* *
* * *
* * * *
* * * * *
*/
for (let i = 0; i < 5; i++)
{
    let row = "";
    for (let j = 0; j <= i; j++)
    {
        row = row + "*";
    }
    console.log(row);
}
console.log()

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
for (let i = 0; i < 5; i++)
{
    let row = "";
    for (let j = 0; j <= i; j++)
    {
        row = row + (j + 1);
    }
    console.log(row);
}
console.log("         ")

/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1)
    }
    console.log(row);
}
console.log();

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
let n = 5;
for (let i = 0; i < n; i++)
{
    let row = "";
    for (let j = 0; j<(n-i); j++)
    {
        row = row + (j+1);
    }
    console.log(row);
}
console.log();

/*
* * * * *
* * * *
* * *
* *
*
*/
for (let i = 0; i < n; i++)
{
    let row = "";
    for (let j = 0; j < (n - i); j++)
    {
        row = row + "*";
    }
    console.log(row);
}
console.log();

/*
     *
    **
   ***
  ****
 *****
*/
for (let i = 0; i < n; i++)
{
    let row = "";
    //Print the empty spaces
    for (let j = 0; j < n - (i + 1); j++)
    {
        row = row + " ";
    }
    //Print the star
    for (let k = 0; k < (i + 1); k++)
    {
        row = row + "*";
    }
    console.log(row);
}
console.log();

/*
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
*/
for (let i = 0; i < n; i++)
{
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++)
    {
        row = row + toggle;
        if (toggle == 1)
        {
            toggle = 0;
        }
        else
        {
            toggle = 1;
        }
    }
    console.log(row);
}
console.log();

/*
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
*/
let toggle = 1;
for (let i = 0; i < n; i++)
{
    let row = "";
    for (let j = 0; j <= i; j++)
    {
        row = row + toggle;
        if (toggle == 1)
        {
            toggle = 0;
        }
        else
        {
            toggle = 1;
        }
    }
    console.log(row);
}
