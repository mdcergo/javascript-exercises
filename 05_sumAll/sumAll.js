const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR"
    if (!Number.isInteger(num1) || !Number.isInteger(num1)) return "ERROR"
    if (typeof num1 != "number") return "ERROR"
    if (typeof num2 != "number") return "ERROR"
    
    if (num1 > num2) {numBig = num1; numSmall = num2;}
    else {numBig = num2; numSmall = num1;}
    let sum = 0
    for (i = numSmall; i <= numBig; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
