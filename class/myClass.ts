class User {
  protected _courseCount = 1; // we can use in this class as well as its children class

  email: string;
  public name: string; // we can use it anywhere
  private readonly age: string = ""; // we can use only in this class

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set setCourseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    } else {
      this._courseCount = courseNum;
    }
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 2;
  }
}

const vishal = new User("V@gmail.com", "Vishal");
vishal.name; // Typescript allows us to use the name outside the class because it is in public (default)
// vishal.age; // Typescript does not allows us to use the age outside the class because it is in private. So we can it only inside the class user (default)

export {};
