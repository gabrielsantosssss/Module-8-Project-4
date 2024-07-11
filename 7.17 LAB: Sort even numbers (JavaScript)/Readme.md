This project contains a JavaScript function `sortEvens` that takes an array of integers as input and returns a new array containing only the even integers from the input array, sorted in ascending order. If there are no even integers in the input array, the function returns an empty array.
The `sortEvens` function performs the following steps:
1. Initializes an empty array `evenNums` to store the even numbers.
2. Loops through each number in the input array `numArray` and checks if the number is even (i.e., `num % 2 === 0`). If the number is even, it is pushed into the `evenNums` array.
3. Sorts the `evenNums` array in ascending order using the `sort()` method with a comparison function `(a, b) => a - b` to ensure numerical sorting.
4. Returns the sorted array of even numbers.
The `sortEvens` function can be tested with various input arrays to verify its functionality. Below are some example test cases:

