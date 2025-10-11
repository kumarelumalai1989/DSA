/*
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/
function(x) {
    xcopy = x;
    //Handle the negative value
    x = Math.abs(x);
    let rev = 0;
    while(x>0)
    {
      let lastDigit = x%10;
      rev = (10*rev) + lastDigit;
      x = Math.floor(x/10);
    }
    //32-bit integer range
    let limit = Math.pow(2,31);//2**31;
    if(rev < -limit || rev > limit-1) return 0;
    // Add the negative sign for the negative numbers after finding the reverse value
    return xcopy < 0 ? -rev : rev;
};
