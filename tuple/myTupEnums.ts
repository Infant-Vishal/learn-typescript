let tUser: [string, number, boolean];

tUser = ["Vishal", 1, true];

type User = [number, string];

let newUser: User = [106, "Tsunade"];

// But still we can use over write this type restriction by JS methods

newUser.push("Vishal");

export {};
