const Calculation = require('./models/Calculation')
const Sum = require('./Operations/Sum');
const Subtract = require('./Operations/Subtract');
const Multiply = require('./Operations/Multiply');
const Divide = require('./Operations/Divide');
const Squared = require('./Operations/Squared');
const SquareRoot = require('./Operations/SquareRoot');
class Calculator{
    //static methods can be called without instatiating and are good for actions
    static Sum(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Sum);
    }
    static Difference(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Subtract);
    }
    static Multiply(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Multiply);
    }

    static Divide(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Divide);
    }

    static Squared(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Squared);
    }

    static SquareRoot(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, SquareRoot);
    }

}


module.exports = Calculator;