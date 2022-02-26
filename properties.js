const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
//getting all property keys (names) in an array by this method
const keys = Object.keys(bottle);
// console.log(keys);

//getting all property values in an array by this method
const values = Object.values(bottle);
console.log(values);

//getting all property (key and values pairs) in a two dimentional array by this method
const pairs = Object.entries(bottle);
// console.log(pairs);

//when we apply Object.seal();we can't delete of existing property,can't insert of new property,but we can modify of new propery;
// Object.seal(bottle);

//Object.freeze() is almost same ;but we can't modify of new property after apply this method
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;
//delete an object propety
delete bottle.isCleaned;
console.log(bottle);

const student = { name: 'habib ullah', age: 17, class: 2, section: 'a' };
const studentKeys = Object.keys(student);
// console.log(studentKeys);
const studentValues = Object.values(student);
// console.log(studentValues);
const studentPairs = Object.entries(student);
// console.log(studentPairs);

// const studentSeal = Object.seal(student);
//modify a propery
student.class = 3;
//try to inserts a new property 
student.college = 17;
//try to delete
delete student.class;
// console.log(student);

const studentFreeze = Object.freeze(student);
//try to modify a property
student.name = 'ahsan';
//try to inserts a new property 
student.university = 19;
//try to delete
delete student.section;
console.log(student);


