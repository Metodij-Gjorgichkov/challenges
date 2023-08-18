//  solution with a class

// class Cube {
//   constructor(sideLength) {
//     this.sideLength = sideLength;
//   }
//   calculatingArea() {
//     return 6 * Math.pow(this.sideLength, 2);
//   }

//   calculatingPerimetar() {
//     return 12 * this.sideLength;
//   }
// }

// const sideLength = +prompt("Enter the side length of the cube");

// const cube = new Cube(sideLength);
// const area = cube.calculatingArea();
// const perimetar = cube.calculatingPerimetar();

// console.log("Area:", area);
// console.log("Perimetar:", perimetar);

// solution with a constructor function

function Cube(sideLength) {
  this.sideLength = sideLength;

  this.calculatingArea = function () {
    return 6 * Math.pow(this.sideLength, 2);
  };

  this.calculatingPerimetar = function () {
    return 12 * this.sideLength;
  };
}

const cube = new Cube(+prompt("Enter the side length of the cube"));
const area = cube.calculatingArea();
const perimetar = cube.calculatingPerimetar();

console.log("Area:", area);
console.log("Perimetar:", perimetar);
