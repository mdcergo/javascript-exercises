const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let newString = ""
    for (let i = 1; i <= num; i++) {
        newString = (newString + string)
    }
    string = newString
    return string
};

// Do not edit below this line
module.exports = repeatString;
