function telephoneCheck(str) {
  return /^(1[- ]?)?(\(\d\d\d\)|\d\d\d)[- ]?\d\d\d[- ]?\d\d\d\d$/.test(str);
}

telephoneCheck("555-555-5555");