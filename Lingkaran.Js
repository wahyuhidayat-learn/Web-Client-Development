//Input   Jari-jari lingkaran (5)
//Output  Diameter (10), keliling 31,4159, dan luas lingkaran(78,539)

function circleProperties(radius) {
const diameter = 2 * radius;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * Math.pow(radius, 2);
return { diameter, circumference, area };
}

const result = circleProperties(5);
console.log(result); // Output: { diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }