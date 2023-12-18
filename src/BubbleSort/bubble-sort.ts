export function bubbleSort(haystack: number[]): void {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < haystack.length - 1 - i; j++) {
      if (haystack[j] > haystack[j + 1]) {
        const tmp = haystack[j];
        haystack[j] = haystack[j + 1];
        haystack[j + 1] = tmp;
      }
    }
  }
}
