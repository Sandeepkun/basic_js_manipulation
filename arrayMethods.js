const array = [1, 2, 3, 4, 5];

console.log(`Original Array: ${array}`);
console.log(`Reversed Array: ${array.reverse()}`);
console.log(`Joined Array: ${array.join("-")}`);

array.push(6);
console.log(`Array after push: ${array}`);

array.pop();
console.log(`Array after pop: ${array}`);
