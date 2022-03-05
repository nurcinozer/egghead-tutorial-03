// Create Explicit and Readable Type Declarations with TypeScript mapped Type Modifiers
const pet = { name: "Buttons", age: 5 };
const readonlyPet = {
    name: "Buttons",
    age: 5,
    favoritePark: "Central",
};
pet.age = 6;
// readonlyPet.age = 6;
// Mapped type modifiers are useful if you either:
// have an interface you can't modify directly (like one from a library)
// have an interface that you want to continue using for some purposes, and create a slight variation of it (using mapped type modifiers) to use for other purposes
