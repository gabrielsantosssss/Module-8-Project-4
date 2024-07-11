function printSum(x, y) {
    // Convert x and y to numbers using parseFloat
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
    
    // Check if num1 and num2 are valid numbers
    let isNum1 = !isNaN(num1);
    let isNum2 = !isNaN(num2);

    // If both x and y are numbers, print their sum
    if (isNum1 && isNum2) {
        console.log(`Sum is ${num1 + num2}.`);
    } 
    // If neither x nor y are numbers, indicate both are not numbers
    else if (!isNum1 && !isNum2) {
        console.log(`'${x}' and '${y}' are not numbers.`);
    } 
    // If only x is not a number, indicate which one specifically
    else if (!isNum1) {
        console.log(`'${x}' is not a number.`);
    } 
    // If only y is not a number, indicate which one specifically
    else if (!isNum2) {
        console.log(`'${y}' is not a number.`);
    }
}

console.log("Testing printSum()...");

printSum(3, 6);            // Sum is 9.
printSum(3.5, 6.1);        // Sum is 9.6.
printSum("hello", 6);      // 'hello' is not a number.
printSum(10, "hi");        // 'hi' is not a number.
printSum("hello", "hi");   // 'hello' and 'hi' are not numbers.

// Do NOT remove the following line
export default printSum;
