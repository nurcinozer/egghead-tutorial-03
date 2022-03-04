// Build self-referencing type aliases in TypeScript

// We usually think of types as something that can define a single layer of an object: with an interface we normally specify a list of a few properties and their respective types. If any one of those properties is another object we must refer again to its type. This is a finite process, as eventually we will get to a flat object, that doesn’t reference any other objects. Trees and Linked Lists are dynamic data structures, that can have infinitely many levels of depth. A type alias in TypeScript can use generics and refer to itself - this can be used to create these potentially infinitely long data structures. We will also explore using Linked Lists for building a Redux time travelling debugger.

interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}

let node: LinkedListNode<string>;

interface Action {
  type: string;
}

// action1/state1 --> action2/state2 --> action3/state3

interface ListNode<T> {
  value: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };

let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null,
};

let actionNode2: ListNode<Action> = {
  value: action2,
  next: null,
  prev: actionNode1,
};

actionNode1.next = actionNode2;

let currentNode = actionNode2;

do {
  console.log(currentNode.value);
  currentNode = currentNode.prev;
} while (currentNode);
