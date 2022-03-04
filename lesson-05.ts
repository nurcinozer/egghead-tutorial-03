// Create Explicit and Readable Type Declarations with TypeScript mapped Type Modifiers

// Using the optional “+” sign together with mapped type modifiers, we can create more explicit and readable type declarations. We can also use the “-” (minus) sign to remove optional declarations from properties.

interface IPet {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K];
};

const pet: IPet = { name: "Buttons", age: 5 };
const readonlyPet: ReadonlyPet = {
  name: "Buttons",
  age: 5,
  favoritePark: "Central",
};

pet.age = 6;
// readonlyPet.age = 6;


// Mapped type modifiers are useful if you either:
// have an interface you can't modify directly (like one from a library)
// have an interface that you want to continue using for some purposes, and create a slight variation of it (using mapped type modifiers) to use for other purposes