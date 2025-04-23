const reverseString = function(string) {
    let length = string.length
    newString = ""
    for (i = 1; i <= length; i++) {
        newString += string.charAt(length - i)
        console.log(newString)
    }
    console.log(newString)
    return newString
};

// Do not edit below this line
module.exports = reverseString;
