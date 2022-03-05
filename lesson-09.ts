// Use the TypeScript "unknown" type to avoid runtime errors

// The "any" type can be very useful, especially when adding types to an existing JavaScript codebase, but it can also lead to lots of runtime errors, as it provides no type-checking. The "unknown" type on the other hand, restricts developer from calling anything on it or assigning to any other type. The only way to use "unknown" variables is to apply logic flow type narrowing or casting, as that's the only way TypeScript can trust that it's dealing with a correct type. The "unknown" type is useful when building services or APIs that can return data of an unknown shape, so we might want to stop other developers from using it in potentially dangerous ways until it's been narrowed down to a specific type.

// Any type example
const halloweenCostumeIdeas: any = ["😱", "👹 ", "🤖", "👻", "👽"];

halloweenCostumeIdeas.indexOf("👽");
halloweenCostumeIdeas.a.b.c.d; // kodu yazarken hata çıkmadı ama runladıktan sonra "TypeError: Cannot read property 'b' of undefined" hatası aldım. run-time error!!
halloweenCostumeIdeas();

function randomCostume(ideas: string[]) {
  return ideas[Math.floor(Math.random() * ideas.length)];
}

randomCostume(halloweenCostumeIdeas);

// Unknown type example
interface IComment {
  date: Date;
  message: string;
}

interface IDataService {
  getData(): unknown;
}

let service: IDataService;

const response = service.getData();
response.a.b.c.d; // runlamadan hata verdi.

if (typeof response === "string") {
  console.log(response.toUpperCase());
} else if (isComment(response)) {
  response.date;
} else {
  const numbers = <number[]>response;
  numbers.indexOf(1);
}

function isComment(type: any): type is IComment {
  return (<IComment>type).message !== undefined;
}
