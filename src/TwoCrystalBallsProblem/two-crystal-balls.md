### Two Crystal Balls Problem

When given two crystal balls that will break if dropped from a high enough distance, determine the exact spot in which it will break in the most optimized way.

This is just an array full of falses, and at some point we will see a true value and all points thereafter are all true.

Important concept here to know is that this array will be sorted.

We could linearly search up the array checking each fall distance until a ball breaks. But this approach only uses 1 ball and isn't the most efficient.

What can we do instead?

Take the sqrt of N (length of the array) and use that as our jump. Once we jump to a point where we see the ball has broken, we go back to our last jump point where the ball had not broken and scan sqrt(N) times until the 2nd ball breaks.
