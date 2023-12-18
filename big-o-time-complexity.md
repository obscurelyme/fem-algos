Big O

- is a general way to categorize the way your algorithm grows
- it is used so that we can determine what data structures to use
- as your input grows, how fast does computation or memory grow?

Growth is with respect to the input

Here is a function with O(n) complexity...

```ts
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < m.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

Why?

Look for loops.

we can see that the for loop loops over the character array (string) and because of this the algorithm grows linearly with the length of the string.

Linear grow = O(n)

How about this function?

```ts
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < m.length; i++) {
    sum += n.charCodeAt(i);
  }

  for (let i = 0; i < m.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

We can think of this as O(2N), BUT we can drop the constants, in this case 2...

so the complexity of this function is, like the first one, O(n)

But why don't we care about constants?

Take for example

N = 1, O(10N) = 10, O(N^2) = 1
N = 5 O(10N) = 50, O(N^2) = 25
N = 100 O(10N) = 1000, O(N^2) = 10,000 10x bigger
N = 1000 O(10N) = 10,000, O(N^2) = 1,000,000 100x bigger
N = 10000 O(10N) = 100,000, O(N^2) = 100,000,000 1000x bigger

See how our constant only grows by 10 but once we square it, the difference is massive compared to the linear.

There are practial vs theory differences

Just because N is faster than N^2 doesn't mean practically that it's always faster for smaller input.

O(100N) is faster than O(N^2) but practically speaking, O(N^2) would win if given a small input size.

REMEMBER: in practice we always assume the worst case scenario

Take the following function...

```ts
function find_char(n: string): boolean {
  for (let i = 0; i < n.length; i++) {
    if (n.getCharAt(i) === "E") {
      return true;
    }
  }
  return false;
}
```

Because the worst case here is we traverse the entire string, the time complexity here is O(n)

Let's look at other algorithms and what they look like...

#### O(N^2)

---

```ts
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(j);
    }
  }
  return sum;
}
```

#### O(N^3)

---

```ts
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(j);
      for (let k = 0; k < n.length; k++) {
        sum += n.charCodeAt(k);
      }
    }
  }
  return sum;
}
```

O(N^3) algorithm typically are seen when you wish to multiple matrices

#### O(n log n)

---

quicksort
you half the space you need to search, and then search the remaining space, rinse and repeat

#### O(log n)

---

binary search tree

you half the space you need to search, look at only 1 thing, rinse and repeat

#### O(sqrt(n))

---

Crystal Ball problem
