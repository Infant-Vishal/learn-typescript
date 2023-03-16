"use strict";
exports.__esModule = true;
var user = {
    name: "Vishal",
    isLoggedIn: true
};
function createUser(_a) {
    var string = _a.name, _b = _a.isPaid, boolean = _b === void 0 ? true : _b;
}
var createCourse = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
    return {};
};
createUser({ name: "Vishal", isPaid: false });
//wierd behaviour of typescript
var newCourse = { name: "Vishal", isPaid: false, email: "v@h.com" };
createCourse(newCourse);
var createUserFunction = function (user) {
    return user;
};
createUserFunction({ name: "Vishal", email: "v@v.com", isPaid: false });
