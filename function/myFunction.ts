function addTwo(num: number): number {
  // By doing this the function must return a number
  return num + 2;
}

let myValue = addTwo(3);

function toUpper(val: string) {
  return val.toUpperCase();
}

toUpper("aaa");

const loginDetails = (name: string, email: string, isPaid: boolean = false) => {
  return "Login details";
};

loginDetails("Vishal", "Vishal@gmail.com", true);

// arrow

const getUsersArrow = (name: string): string => {
  return name;
};

const heroes = ["Iron man", "Thor", "Hulk"];
// const heroes = [1, 2, 3];

heroes.map((hero) => {
  return `${hero} is an avenger`;
});

// not returing a return

const consoleErr = (errMsg: string): void => {
  console.log(errMsg);
};

const handleErr = (errMsg: string): never => {
  throw new Error(errMsg);
};

export {};
