const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(`Full Name: ${person.firstName} ${person.lastName}`);
console.log(`Age: ${person.age}`);

person.age = 31;
console.log(`Updated Age: ${person.age}`);
