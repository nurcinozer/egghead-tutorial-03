// Simplify iteration of custom data structures in TypeScript with iterators
class BackwardsActionIterator {
    constructor(_currentActionNode) {
        this._currentActionNode = _currentActionNode;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
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
let actionNode1 = {
    prev: null,
    next: null,
    value: action1,
};
let actionNode2 = {
    prev: actionNode1,
    next: null,
    value: action2,
};
actionNode1.next = actionNode2;
let actionNode3 = {
    prev: actionNode2,
    next: null,
    value: action3,
};
actionNode2.next = actionNode3;
let actionNode4 = {
    prev: actionNode3,
    next: null,
    value: action4,
};
actionNode3.next = actionNode4;
const backwardsActionsList = new BackwardsActionIterator(actionNode4);
for (let action of backwardsActionsList) {
    console.log(action.type);
}
