console.log(6 === 4 + 2)

function add(num1, num2) {
    return num1 + num2;
}

console.log(6 === add(2, 4)) 

function subtract(sub1, sub2) {
    return sub1 - sub2; 
}

console.log(-2 === subtract(2, 4)) 

function multiply(mult1, mult2) {
    return mult1 * mult2;
}

console.log(60 === multiply(10, 6))

function divide(div1, div2) {
    return div1 / div2;
}

console.log(6 === divide(24, 4))

function assert(expected, actual, message) {
    if (expected === actual) {
    }
    console.log(message)
}

assert(60, multiply(12, 5), "yay multiply!");

function assert(expected, actual, message) {
    if (expected === actual) {
        return true;
    }
    console.log(message)
}

assert(40, multiply(5, 100), "yay multiply!");

//=================//SAT 02.24.18==================//

var whtevs = "a"
console.log(whtevs === "b")

module.exports = {
    assert: function(expected, actual, message = "Test") {
        if (expected === actual) {
            console.log( 'thumbs up' + message)
        } else {
            diff = util.inspect(expected) + "\n   " + util.inspect(actual);
            console.log('poop' + message + "\n   Assertion failed no match\n   " + diff);
        }
    },

    assert_true: function(actual, message) {
        this.assert(true, actual, message)
    },

    assert_false: function(actual, message) {
        this.assert(false, actual, message)
    },

};



    