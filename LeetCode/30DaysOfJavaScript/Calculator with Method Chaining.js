//2726. Calculator with Method Cahining
/*
    Design a Calcolator class. The class should provide the mathmatical operations of addition, Subtraction, Multiplication, division and expontiation.It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the inital value of result.

    Your Calculator class should have the following methods:

    - add - This method adds the given number value to the result and returns the updated Calculator.

    - subtract - This method subtracts the given number value from the result and returns the updated Calculator.

    -multiply - This method multiplies the result  by the given number value and returns the updated Calculator.

    -divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.

    -power - This method raises the result to the power of the given number value and returns the updated Calculator.

    -getResult - This method returns the result.

    Solutions within 10^-5 of the actual result are considered correct.

*/

class Calculator {
  constructor(value) {
    // this.value = value;
    this.result = value;
  }

  // operations
  //+
  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
        throw new Error("Division by zero is not allowed");
    }

    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}

//testing the code
const obj = new Calculator(10);
const obj2 = new Calculator(20);

console.log(obj.add(5).subtract(2).getResult());    //13
console.log(obj2.add(5).divide(0).getResult()); //should throw an error in the console
