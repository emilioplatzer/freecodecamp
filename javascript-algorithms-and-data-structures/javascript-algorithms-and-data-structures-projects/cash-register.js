/** @typedef {"PENNY"|"NICKEL"|"DIME"|"QUARTER"|"ONE"|"FIVE"|"TEN"|"TWENTY"|"ONE HUNDRED"} Denom */

/**
 * @param {number} price 
 * @param {number} cash
 * @param {[Denom, number][]} cid
 */

function checkCashRegister(price, cash, cid) {
  /** @type { {[key: Denom]: number} } */
  var values={
    "PENNY"      :0.01,
    "NICKEL"     :0.05,
    "DIME"       :0.10,
    "QUARTER"    :0.25,
    "ONE"        :   1,
    "FIVE"       :   5,
    "TEN"        :  10,
    "TWENTY"     :  20,
    "ONE HUNDRED": 100,
  };
  var change={OPEN:[], CLOSED:[], INSUFFICIENT_FUNDS:[]}
  var remain=cash-price;
  var PRECISION=0.000005;
  remain += PRECISION/10;
  var pos=cid.length-1;
  var balance=0;
  var status="OPEN";
  while(remain > 0 && pos >= 0){
    var take = 0;
    var name = cid[pos][0];
    var denom = values[name];
    if(remain >= denom){
      take = Math.min(remain - remain % denom, cid[pos][1]);
      remain = remain - take;
      change.OPEN.push([name, take]);
    }
    change.CLOSED.unshift([name, take]);
    balance += cid[pos][1] - take;
    pos--;
  }
  if(remain>PRECISION){
    status="INSUFFICIENT_FUNDS";
  }else if(Math.abs(balance)<PRECISION){
    status="CLOSED";
  }
  return {status, change: change[status]};
}

console.log(JSON.stringify(
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
));

console.log(JSON.stringify(
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
))

console.log(JSON.stringify(
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
))


console.log(JSON.stringify(
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
))
