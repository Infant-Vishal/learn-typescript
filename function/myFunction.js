"use strict";
exports.__esModule = true;
function addTwo(num) {
    // By doing this the function must return a number
    return num + 2;
}
var myValue = addTwo(3);
function toUpper(val) {
    return val.toUpperCase();
}
toUpper("aaa");
var loginDetails = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "Login details";
};
loginDetails("Vishal", "Vishal@gmail.com", true);
// arrow
var getUsersArrow = function (name) {
    return name;
};
var heroes = ["Iron man", "Thor", "Hulk"];
// const heroes = [1, 2, 3];
heroes.map(function (hero) {
    return "".concat(hero, " is an avenger");
});
// not returing a return
var consoleErr = function (errMsg) {
    console.log(errMsg);
};
var handleErr = function (errMsg) {
    throw new Error(errMsg);
};
