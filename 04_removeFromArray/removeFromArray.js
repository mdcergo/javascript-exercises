const removeFromArray = function() {
    let args = Array.from(arguments);
    argumentNum = args.length
    let array = args.shift()
    for (remove of args) {
        let index = array.indexOf(remove)
        while (index !== -1) {
            array.splice(index, 1)
            index = array.indexOf(remove)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
