// Simplify iteration of custom data structures in TypeScript with iterators

// Traversing items of custom data structures, like trees or linked lists, require knowledge of how that data structure is built. That can lead to problems, as faulty iteration strategies might not visit all the items, or they might not know when they've finished visiting all of them. In this lesson, we're going to look at how TypeScript supports us in building custom ES6 iterators that can be then used by a simple "for..of" loop to ensure we provide an easy to use and reliable API for other developers to traverse our data structures.

interface Action {
  type: string;
}

interface ListNode<T> {
  value: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}

class BackwardsActionIterator implements IterableIterator<Action> {
  constructor(private _currentActionNode: ListNode<Action>) {}
  [Symbol.iterator](): IterableIterator<Action> { // Whenever an object needs to be iterated (such as at the beginning of a for..of loop), its @@iterator method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.
    return this;
  }

  next(): IteratorResult<Action> {
    const curr = this._currentActionNode;
    if (!curr || !curr.value) {
      return { value: null, done: true };
    }
    //1. move through each item in the list
    this._currentActionNode = curr.prev;
    //2. return each item
    return { value: curr.value, done: false };
  }
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };
let action3 = { type: "DISPLAY_POSTS" };
let action4 = { type: "LOGOUT" };

let actionNode1: ListNode<Action> = {
  prev: null,
  next: null,
  value: action1,
};
let actionNode2: ListNode<Action> = {
  prev: actionNode1,
  next: null,
  value: action2,
};
actionNode1.next = actionNode2;

let actionNode3: ListNode<Action> = {
  prev: actionNode2,
  next: null,
  value: action3,
};
actionNode2.next = actionNode3;

let actionNode4: ListNode<Action> = {
  prev: actionNode3,
  next: null,
  value: action4,
};
actionNode3.next = actionNode4;

const backwardsActionsList = new BackwardsActionIterator(actionNode4);

for (let action of backwardsActionsList) {
  console.log(action.type);
}
