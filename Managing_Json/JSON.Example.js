const jsonString = '{"name":"John","age":30,"city":"New York"}';
const jsonObject = JSON.parse(jsonString); 
console.log(jsonObject.name); // Output: John
console.log(jsonObject.age); // Output: 30

const student = {
  name: "Alice",
  age: 22,
  subjects: ["Math", "Science", "History"]
};
const studentJson = JSON.stringify(student);
console.log(studentJson); // Output: {"name":"Alice","age":22,"subjects":["Math","Science","History"]}