// NOTE: Generics have always been a good solution to making reusable types. You can pass in one type and return a completely new type from it. It's like a function, really.

// Dynamically Allocate Function Types with Conditional Types in TypeScript

// Conditional types take generics one step further and allow you to test for a specific condition, based on which the final type will be determined. We will look at how they work on a basic level and then leverage their power to allocate function types dynamically based on the type of their parameters, all without any overloads.

interface Book {
  id: string;
  tableOfContents: string[];
}

interface Tv {
  id: number;
  diagonal: number;
}

interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
}

let itemService: IItemService;

const book = itemService.getItem("10");
const tv = itemService.getItem(10);
