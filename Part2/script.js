let nikola = { firstName: "Nikola", lastName: "Tesla" };
let bob = { firstName: "Bob" };
let mike = { lastName: "Smith" };
let michael = {};

let getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    let user = args[0] || {};
    let firstName = user.firstName || "";
    let lastName = user.lastName || "";

    if (!firstName && !lastName) {
      return "No name";
    } else if (!firstName) {
      return lastName;
    } else if (!lastName) {
      return firstName;
    } else {
      return target.apply(thisArg, args);
    }
  },
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));
