const user = {
  name: "Vishal",
  isLoggedIn: true,
};

function createUser({ name: string, isPaid: boolean = true }) {}

const createCourse = ({ name: string, isPaid: boolean }): {} => {
  return {};
};

createUser({ name: "Vishal", isPaid: false });

//wierd behaviour of typescript

let newCourse = { name: "Vishal", isPaid: false, email: "v@h.com" };

createCourse(newCourse);

// type aliases

type User = {
  name: string;
  email: string;
  isPaid: boolean;
  creditCardDetail?: number; // optional
};

const createUserFunction = (user: User): User => {
  return user;
};

createUserFunction({ name: "Vishal", email: "v@v.com", isPaid: false });

//my user

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: string;
  };

export {};
