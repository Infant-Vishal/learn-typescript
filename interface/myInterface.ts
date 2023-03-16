interface User {
  readonly dbId: number;
  name: string;
  age: number;
  gender?: string;
  startTrial(): number;
  getCoupon(userName: string, age: number): string;
}

//Reopening of interface

interface User {
  gitToken: string;
}

//Inheritance

interface Admin extends User {
  role: "admin" | "support";
}

const user1: User = {
  dbId: 1122,
  name: "Vishal",
  age: 22,
  startTrial: () => {
    return 10;
  },
  getCoupon: (name: "Vishal", age: 22) => {
    return name;
  },
  gender: "Male",
  gitToken: "github",
};

const admin1: Admin = {
  dbId: 1122,
  name: "Vishal",
  age: 22,
  startTrial: () => {
    return 10;
  },
  getCoupon: (name: "Vishal", age: 22) => {
    return name;
  },
  gender: "Male",
  gitToken: "github",
  role: "admin",
};

export {};
