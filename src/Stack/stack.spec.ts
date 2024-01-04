import Stack from "./stack";

class UndoRedo<T> {
  private _undoStack: Stack<T>;
  private _redoStack: Stack<T>;

  public constructor() {
    this._redoStack = new Stack<T>();
    this._undoStack = new Stack<T>();
  }

  public action(item: T): void {
    this._undoStack.push(item);
  }

  public peek(): T | undefined {
    return this._undoStack.peek();
  }

  public undo(): void {
    const item = this._undoStack.pop();
    if (item) {
      this._redoStack.push(item);
    }
  }

  public redo(): void {
    const item = this._redoStack.pop();
    if (item) {
      this._undoStack.push(item);
    }
  }
}

describe("Stack", () => {
  it("should work", () => {
    const stack = new Stack<number>();

    stack.push(5);
    stack.push(2);
    stack.push(8);

    expect(stack.peek()).toBe(8);
    expect(stack.pop()).toBe(8);
    expect(stack.peek()).toBe(2);
  });
});

describe("Undo/Redo", () => {
  it("should work", () => {
    const undoRedo = new UndoRedo<number>();

    undoRedo.action(5);
    undoRedo.action(8);

    expect(undoRedo.peek()).toBe(8);

    undoRedo.undo();

    expect(undoRedo.peek()).toBe(5);

    undoRedo.redo();

    expect(undoRedo.peek()).toBe(8);
  });
});
