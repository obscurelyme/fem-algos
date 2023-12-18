export function linearSearch(needle: number, haystack: number[]): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      return true;
    }
  }
  return false;
}
