### Binary Search

If your dataset is ordered, you can take some new advantages when searching it.
One such advantage is a Binary Search

How?

You start at the mid point of a sorted array, and then compare that element to the element you want to find. If the mid point is less than the element you want to find we can immediately eliminate the first half of the array before the mid point.

This halfing over and over again results in O(log n) complexity.

THE IMPORTANT THING TO REMEMBER HERE IS WE DO NOT SCAN

Scanning would make this algorithm O(n log n), which isn't what Binary Search is.
