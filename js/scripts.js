// scripts.js

// var a = prompt('Enter base a'),
// 	h = prompt('Enter height h');

function getTriangleArea(a, h) {
	if (a <= 0 && h <= 0) {
		return 'Nieprawidłowe dane';
	}	else {
			return a * h / 2;
			}
}
getTriangleArea();

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(15, 25),
	triangle3Area = getTriangleArea(45, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);