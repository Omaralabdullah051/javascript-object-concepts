//Different ways to create objects
//using object literals 
const student = {
    name: 'aminul',
    age: 12,
    class: 1
};
//new keyword 
const company = new Object();

//inherits all properties and methods 
const student2 = Object.create(student);
console.log(student2.age);

//class (a template of js objects)
class Support {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const people = new Support('manus', 11);
console.log(people);

//constructor function
function Manus(name) {
    this.name = name;
}
const man = new Manus('aftab');
console.log(man);

//object method property
//when the object property values is a primitive data types(number,string,boolean)or another object is called values.when the object property values is a function ;it is called method.here task is a method.
const fish = {
    name: 'hilsha',
    age: 17,
    color: 'silver',
    isRich: false,
    money: 5000,
    task: function (name) {
        this.name = name;
        return this.name;
    },
    treatDey: function (expenses) {
        this.money = this.money - expenses;
        return this.money;
    }
}

const salmon = fish.task('name');
console.log(salmon);
const moneyLeft = fish.treatDey(200);
console.log(moneyLeft);



const fish2 = {
    name: 'salmon',
    age: 10,
    phone: 0956992
};
//Object.keys() for getting all property keys in an array
const keys = Object.keys(fish2);
console.log(keys);
//Object.values() for getting all property values in an array
const values = Object.values(fish2);
console.log(values);
//Object.entries() for getting all property key and value pairs in an array of arrays(two dimensional array)
const entries = Object.entries(fish2);
console.log(entries);

//when we apply Object.seal();we can't delete of existing property,we can't insert of new property,but we can modify of new property
const seal = Object.seal(fish2);
//try to delete of existing property
delete fish2.name;
//try to inserst of new property
fish2.color = 'silver';
//modify property 
fish2.age = 9;
console.log(fish2);

//when we apply Object.freeze();almost same of seal.but we can't modify of new property after apply Object.freeze;
const freeze = Object.freeze(fish2);
//try to modify property
fish2.age = 12;
console.log(fish2);


//loop through over an object
//we want the keys and values from an object by throughing loop

//option-1:
for (const prop in fish2) {
    console.log(prop, fish2[prop]);
}
//option-2:
for (const [key, value] of Object.entries(fish2)) {
    console.log(key, value);
}
//option-3:
for (const prop of Object.keys(fish2)) {
    console.log(prop, fish2[prop]);
}

//compare objects 
//objects are compared by reference;so we cann't compare objects by using double-equal or triple-equal in if-else conditional statement;
//the best way is compare in a function theck those conditions;(this trick is useful for normal objects.(not apply on nested objects))

const a = { x: 1, y: 2 };
const b = { y: 2, x: 1 };

function compare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in a) {
        if (a[prop] !== b[prop]) {
            return false;
        }
    }
    return true;
}
console.log((compare(a, b)));


//bind(),call(),apply() 
const fish3 = {
    name: 'hilsha',
    color: 'silver',
    money: 5000,
    task: function (name) {
        this.name = name;
        console.log(this);
    },
    treatDey: function (expenses, boksis) {
        this.money = this.money - expenses - boksis;
        console.log(this);
    }
};

//with the bind methods,an object can borrow a method from another object

const aminulIslam = {
    name: 'aminul Islam',
    age: 25,
    money: 5000,
};
const aminulTreatDey = fish3.treatDey.bind(aminulIslam, 200, 20);
aminulTreatDey();
// or 
const aminulTreatDey2 = fish3.treatDey.bind(aminulIslam)
aminulTreatDey2(200, 20);

//with call method
const solaiman = {
    name: 'solaiman',
    age: 15,
    money: 8000,
};
fish3.treatDey.call(solaiman, 500, 50);

//with apply method 
const balamKhan = {
    name: 'balam',
    age: 80,
    money: 2000
}
fish3.treatDey.apply(balamKhan, [200, 20]);