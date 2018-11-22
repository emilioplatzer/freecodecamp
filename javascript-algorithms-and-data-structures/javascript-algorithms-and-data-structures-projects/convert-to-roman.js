function convertToRoman(num) {
  var substract=[
    {sign:'M' , val:1000},
    {sign:'CM', val: 900},
    {sign:'D' , val: 500},
    {sign:'CD', val: 400},
    {sign:'C' , val: 100},
    {sign:'XC', val:  90},
    {sign:'L' , val:  50},
    {sign:'XL', val:  40},
    {sign:'X' , val:  10},
    {sign:'IX', val:   9},
    {sign:'V' , val:   5},
    {sign:'IV', val:   4},
    {sign:'I' , val:   1},
  ];
  var result='';
  var current={val:4000,sign:'ERROR!'};
  while(num>0){
    if(num>=current.val){
      result+=current.sign;
      num-=current.val;
    }else{
      current=substract.shift();
    }
  }
  return result;
}

convertToRoman(36);