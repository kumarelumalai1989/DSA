// Reverse String : Write a function that reverses a string. The input string is given as an array of characters s
// You must do this by modifying the input array in-place with O(1) extra memory

function(s) {
    let n = s.length;
    halflen = Math.floor(s.length/2);
    for(let i=0;i<halflen;i++)
    {
        //swap i, n-1-i
        let temp = s[i];
        s[i] = s[n-1-i];
        s[n-1-i] = temp;
    }
};
