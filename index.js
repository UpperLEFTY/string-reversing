// iterative method

function reverse(str){
  const rtnStr = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  for(let i = str.length-1; i>=0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}
        



// recursive method

function reverse(str){
  if (typeof str !== 'string' || str.length < 2) return str;

  function helper(chars, index) {
    if (index <= 0) return chars[0];
    return chars[index] + helper(chars, index - 1);
  }

  const chars = str.split('');
  return helper(chars, chars.length - 1);
}
