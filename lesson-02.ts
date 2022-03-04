// Make TypeScript Class Usage Safer with Strict Property Initialization

// By setting the strictPropertyInitialization flag in the .tsconfig file, TypeScript will start throwing errors unless we initialize all properties of classes on construction. We’ll explore how you can fix the errors by assigning to them directly or in the constructor body. And if you can’t initialize directly but you’re sure it will be assigned to at runtime by a dependency injection library, you can use the definite assignment assertion operator to ask TypeScript to ignore that property.

// You can also use strict: true, which is a shorthand for enabling: noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization.

class Library {
  titles!: string[];
  address: string = "1 Duck Lane";
  isPublic: boolean;

  constructor() {
    this.isPublic = true;
    // this.titles = [];
  }
}

const library = new Library();

// sometime later & elsewhere in our codebase..
const shortTitles = library.titles.filter((book) => book.length < 5);
