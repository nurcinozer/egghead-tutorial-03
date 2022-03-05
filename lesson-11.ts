// Use TypeScript conditional types to create a reusable Flatten type

// Generics can be a useful mechanism for transforming one type into another. In this lesson we will look at how we can use them to create different types for flattening array and object types (extracting the types of their boxed values). We will then look at how we can use conditional types to create a single multi-purpose Flatten type, that can dynamically chose a flattening strategy based on the type passed into it.

const numbers = [2, 1]; // --> number[]

const someObject = {
    id: 21,
    name: 'Jonathan'
};

const someBoolean = true;

// type FlattenArray<T extends any []> = T[number];
// type FlattenObject<T extends object> = T[keyof T];
// type Flatten<T>

// yukarıdaki kodları aşağıdakine çevirdik

type Flatten<T> = T extends any [] ? T[number] :
    T extends object ? T[keyof T] :
    T;

// keyof T --> "id" | "name"
// T["id" | "name"] --> T["id"] | T["name"] --> number | string

type NumbersArrayFlattened = Flatten<typeof numbers>; // --> number
type SomeObjectFlattened = Flatten<typeof someObject>; // --> number | string
type SomeBooleanFlattened = Flatten<typeof someBoolean>; // --> true