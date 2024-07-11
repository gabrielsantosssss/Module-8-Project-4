function drawTriangle(triangleSize) {
    // Loop to construct each line of the triangle
    for (let i = 1; i <= triangleSize; i++) {
        // Initialize an empty string for the current line
        let line = "";
        // Inner loop to build the asterisk line
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        // Output the current line
        console.log(line);
    }
}

console.log("Testing drawTriangle()...");

// Test drawTriangle() with different arguments
drawTriangle(4);

// Do NOT remove the following line
export default drawTriangle;
