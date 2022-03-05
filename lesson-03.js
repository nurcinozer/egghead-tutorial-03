// Use the JavaScript “in” operator for automatic type inference in TypeScript
function redirect(usr) {
    if (usr.role !== undefined) {
        // won't work: usr is still Admin | User
    }
    if ("role" in usr) {
        // if('role' in usr) which simply checks if that property exists on the object (take care that a property can exist even if it's undefined).
        routeToAdminPage(usr.role);
    }
    else {
        routeToHomePage(usr.email);
        usr.email;
    }
}
function isAdmin(usr) {
    return usr.role !== undefined;
}
