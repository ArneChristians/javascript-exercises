const repeatString = function(string, num) {
    let stringNtimes = "";
    if(num >= 0) {
        for(let i = 0; num > i; i++) {
            stringNtimes += string;
        }
    } else {
        return "ERROR";
    }

    return stringNtimes;
};

// Do not edit below this line
module.exports = repeatString;
