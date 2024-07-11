This JavaScript code calculates the perimeter and area of a triangle given its vertices coordinates.
`trianglePerimeter(x1, y1, x2, y2, x3, y3)`
Calculates the perimeter of a triangle using the distance formula for each side:
  `(x1, y1)`, `(x2, y2)`, `(x3, y3)`: Coordinates of the triangle's vertices.
  Perimeter of the triangle, which is the sum of the lengths of all three sides.
`triangleArea(x1, y1, x2, y2, x3, y3)`
Calculates the area of a triangle using the determinant formula:
  `(x1, y1)`, `(x2, y2)`, `(x3, y3)`: Coordinates of the triangle's vertices.
  Area of the triangle, computed as \( \frac{1}{2} \times |x1 \cdot (y2 - y3) + x2 \cdot (y3 - y1) + x3 \cdot (y1 - y2)| \).


