function palindrome(str) {
  var onlyAlphas=str.replace(/[^0-9a-z]/ig,'').toLowerCase();
  var i=Math.floor(onlyAlphas.length/2);
  while(i>=0 && onlyAlphas[i]===onlyAlphas[onlyAlphas.length-i-1]) i--;
  return i<0;
}

palindrome("eye");
