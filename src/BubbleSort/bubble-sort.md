### Bubble Sort

O(n^2)

Guarentees that the largest element will be placed where it should be after each iteration.

Bubble sort will sort an array in-place. Meaning no copies of the array are created. This is great for memory cost savings!

What if I have an immutable array?

If you have an immutable array, you are opting into a fundamental understanding that you are creating a poor performing data structure. Immutability is for ease of use at the cost of space and replicating space (performance).

In general..."immutability" and "sorting" are words that should not be used together in the same sentence.
