"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
  //private readonly age: string; // only we can use in this class

  function User(email, name) {
    this._courseCount = 1;
    this.email = email;
    this.name = name;
  }
  Object.defineProperty(User.prototype, "getAppleEmail", {
    get: function () {
      return "apple".concat(this.email);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(User.prototype, "getCourseCount", {
    get: function () {
      return this._courseCount;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(User.prototype, "setCourseCount", {
    set: function (courseNum) {
      if (courseNum <= 1) {
        throw new Error("Course count should be more than 1");
      } else {
        this._courseCount = courseNum;
      }
    },
    enumerable: false,
    configurable: true,
  });
  return User;
})();
var vishal = new User("V@gmail.com", "Vishal");
vishal.name; // Typescript allows us to use the name outside the class because it is in public (default)
