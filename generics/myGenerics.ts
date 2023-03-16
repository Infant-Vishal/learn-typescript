function identityOne<T>(val: T): T {
  return val;
}

const vishal = identityOne(1);

// We can also create our own type and do the same in the generics

// In Arrow function
const identityTwo = <T>(products: T[]): T => {
  let myIndex = 4;
  let productLength = products.length;
  return products[myIndex];
};
