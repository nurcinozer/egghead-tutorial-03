// Use the JavaScript “in” operator for automatic type inference in TypeScript

// Sometimes we might want to make a function more generic by having it accept a union of different types as an argument. Using the JavaScript “in” operator, we can test for the presence of different properties on the argument object, and TypeScript will automatically infer the exact type of our object in that block. It does this by looking at all the possible types in the union and then keeping only the ones that have that specific property defined.

interface Admin {
  id: string;
  role: string;
}
interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  if ((<Admin>usr).role !== undefined) {
    // won't work: usr is still Admin | User
  }
  if ("role" in usr) {
    // if('role' in usr) which simply checks if that property exists on the object (take care that a property can exist even if it's undefined).

    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
    usr.email;
  }
}

function isAdmin(usr: Admin | User): usr is Admin {
  return (<Admin>usr).role !== undefined;
}

declare function routeToAdminPage(role: string): String;
declare function routeToHomePage(id: string): String;
