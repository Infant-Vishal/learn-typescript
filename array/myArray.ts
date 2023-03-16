const heroArr: string[] = []; // This array accepts only the string

const countArr: number[] = []; // This array accepts only the number

const anotherCountArr: Array<number> = []; // This array accepts only the number

const MLModels: number[][] = [
  [2, 2],
  [1, 3],
]; // This array will accept only array which contains object

type User = {
  email: string;
  password: string;
};

const allUsers: User = { email: "v@gmail.com", password: "ddddd" };

heroArr.push("Hulk");
countArr.push(2);
anotherCountArr.push(5);
