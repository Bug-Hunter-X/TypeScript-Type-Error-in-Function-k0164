function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return 0; // Or throw an error
  }
}

let result1 = addSafe(10, 20); // 30
let result2 = addSafe("hello", "world"); // 0