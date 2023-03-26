let users = [
  { name: "Nikola", age: 18, id: 1 },
  { name: "Bob", age: 25, id: 2 },
  { name: "Mike", age: 32, id: 3 },
];

let usersJson = JSON.stringify(users);

localStorage.setItem("users", usersJson);

function sayHelloToUser(id) {
  let usersJson = localStorage.getItem("users");
  let usersStorage = JSON.parse(usersJson);

  let user = usersStorage.find((user) => user.id === id);
  if (user) {
    console.log(`Hello: ${user.name}`);
  } else {
    console.log(`User with id ${id} not found.`);
  }
}

sayHelloToUser(3);
