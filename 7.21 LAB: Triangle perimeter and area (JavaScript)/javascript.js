// Calculates the perimeter of a triangle given its vertices coordinates
function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
    // Calculate the length of each side using the distance formula
    let side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
    let side3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    
    // Calculate and return the perimeter
    return side1 + side2 + side3;
}

// Calculates the area of a triangle given its vertices coordinates
function triangleArea(x1, y1, x2, y2, x3, y3) {
    // Calculate the area using the determinant formula
    return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
}

console.log("Testing trianglePerimeter()...");
let perimeter = trianglePerimeter(1, 0, 2, 4, 4, 3);
console.log("Perimeter = " + perimeter);

console.log("Testing triangleArea()...");
let area = triangleArea(1, 0, 2, 4, 4, 3);
console.log("Area = " + area);

// Do NOT remove the following line:
export { trianglePerimeter, triangleArea };
