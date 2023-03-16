function identityOne(val) {
    return val;
}
var vishal = identityOne(1);
// We can also create our own type and do the same in the generics
// In Arrow function
var identityTwo = function (products) {
    var myIndex = 4;
    var productLength = products.length;
    return products[myIndex];
};
