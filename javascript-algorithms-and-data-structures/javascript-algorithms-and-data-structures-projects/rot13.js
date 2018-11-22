function rot13(str) { // LBH QVQ VG!
  var codeOfA='A'.charCodeAt(0);
  return str.replace(/[A-Z]/g,function(letter){
      var num=letter.charCodeAt(0)-codeOfA;
      return String.fromCharCode((num<13?26:0)+num-13+codeOfA);
  });
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");