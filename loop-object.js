const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/*
for(let i=0;i<10;i++){}
for(const num of numbers){} //for iterable object
for(const prop in student)// object
*/

//we can loop through over an object by using for in loop

//we want all the property keys and values
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    console.log(prop, bottle[prop]);
}

const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

//we want all the property keys and values
const student = {
    name: 'sogir uddin',
    age: 17,
    class: 3,
    section: 'a'
};
//option:1
for (const prop in student) {
    console.log(prop, student[prop]);
}
//option:2
//Object.keys() returns an array including object property keys
for (const prop of Object.keys(student)) {
    console.log(prop, student[prop]);
}
//option:3
//Object.entries() returns an array of array including object property (key and value pairs)
for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}