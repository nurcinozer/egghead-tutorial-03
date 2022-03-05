// Infer the Return Type of a Generic Function Type Parameter

// When working with conditionals types, within the “extends” expression, we can use the “infer” keyword to either get the type of the elements of an array, or even to get the return type of a function. We can use this to build a “FnReturnType<T>” type, that will give us the return type of the function passed in as the generic parameter.

function generateId(seed: number) {
  return seed + "5";
}

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = ReturnType<typeof generateId>;

lookupEntity(generateId(10));
function lookupEntity(id: Id) {
  //query DB for entity by ID
}

//////////////

type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
const arr = [Promise.resolve(true)];

type ExpectedBoolean = UnpackPromise<typeof arr>;

export default {};
