type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private _head?: Node<T>;
  private _tail?: Node<T>;

  constructor() {
    this._head = this._tail = undefined;
    this.length = 0;
  }

  public enqueue(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (!this._tail) {
      this._tail = this._head = node;
      return;
    }
    this._tail.next = node;
    this._tail = node;
  }

  public dequeue(): T | undefined {
    if (!this._head) {
      return undefined;
    }
    this.length = Math.max(0, this.length--);
    const head = this._head;
    this._head = head.next;
    return head.value;
  }

  public peek(): T | undefined {
    return this._head?.value;
  }
}
