function sortEvens(numArray) {
    // Create a new array to store the even numbers
    let evenNums = [];

    // Loop through the input array and add even numbers to the evenNums array
    for (let num of numArray) {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    }

    // Sort the array of even numbers in ascending order
    evenNums.sort((a, b) => a - b);

    // Return the sorted array of even numbers
    return evenNums;
}
console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);


// Do NOT remove the following line:
export default sortEvens;