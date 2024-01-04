```ts
interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}
```

Queues are a FIFO type of data structure, meaning that the first object that goes in the data structure is also the first element that gets removed from the data structure.

#### Enter a world of DSA where contraints make things fast

You will notice that what makes a lot of datastructures fast is the lack of features.
