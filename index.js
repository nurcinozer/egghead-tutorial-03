var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const fetch = require("node-fetch");
function Get(url) {
    return function (target, name) {
        const hiddenInstanceKey = "_$$" + name + "$$_";
        const init = () => {
            return fetch(url).then((response) => response.json());
        };
        Object.defineProperty(target, name, {
            get: function () {
                return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
            },
            configurable: true,
        });
    };
}
function First() {
    return function (target, name) {
        const hiddenInstanceKey = "_$$" + name + "$$_";
        const prevInit = Object.getOwnPropertyDescriptor(target, name).get;
        const init = (prevInit) => {
            return prevInit().then((response) => response[0]);
        };
        Object.defineProperty(target, name, {
            get: function () {
                return (this[hiddenInstanceKey] ||
                    (this[hiddenInstanceKey] = init(prevInit.bind(this))));
            },
            configurable: true,
        });
    };
}
class TodoService {
}
__decorate([
    First(),
    Get("https://jsonplaceholder.typicode.com/todos")
], TodoService.prototype, "todos", void 0);
const todoService = new TodoService();
todoService.todos.then((todos) => {
    console.log(todos);
});
