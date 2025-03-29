function addNumberToArray(numbers: number[]): number[] {
  return numbers.map((num) => num + 5);
}

const arr = [1, 2, 3];
console.log(addNumberToArray(arr));
