type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  public constructor() {
    this.head = undefined;
    this.length = 0;
  }

  public push(item: T): void {
    this.length++;
    const node: Node<T> = { value: item };

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  public pop(): T | undefined {
    this.length = Math.max(0, this.length--);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as Node<T>;
    this.head = head.prev;
    return head.value;
  }

  public peek(): T | undefined {
    return this.head?.value;
  }
}
