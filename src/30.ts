function findLongestPalindromicSubstring(input: string): string {
  if (!input || input.length < 2) {
    throw new Error("Input must be at least two characters long.");
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < input.length - 1; i++) {
    const leftIndex = i;
    const rightIndex = i + 1;

    while (leftIndex >= 0 && rightIndex < input.length) {
      if (input[leftIndex] === input[rightIndex]) {
        end = leftIndex;
        break;
      }
      leftIndex--;
      rightIndex++;
    }

    start = rightIndex - 1;
  }

  return input.substring(start, end + 1);
}

console.log(findLongestPalindromicSubstring("babad")); // Output: "bab"
