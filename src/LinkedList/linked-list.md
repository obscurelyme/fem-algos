### Linked List

What sucks about an array?

- Deletion
- Insertion
- No expansion

Linked Lists are also known as node based data structures. Node: being the container

Linked Lists contains nodes which contain values and links to the next node.

There are singly linked lists and doubly linked lists. Singly linked lists can be traversed in a single direction, while doubly linked lists are bidirectional in each node having a reference to the next and previous node.

```ts
interface Node<T> {
  value: T;
  next?: Node<T>;
}

interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
}
```

API

```ts
interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}
```

Understanding Linked Lists will help you with trees, graphs, etc...
