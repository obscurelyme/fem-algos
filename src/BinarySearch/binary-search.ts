export default function binarySearch(
  needle: number,
  haystack: number[]
): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const midPoint = Math.floor(lo + (hi - lo) / 2);
    const value = haystack[midPoint];

    if (value == needle) {
      return true;
    } else if (value > needle) {
      hi = midPoint;
    } else {
      lo = midPoint + 1;
    }
  } while (lo < hi);

  return false;
}
