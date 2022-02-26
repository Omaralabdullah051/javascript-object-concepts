//1.using object literal
const student = { name: 'sakib al hasan', job: 'cricker' };
//2.constructor
const person = new Object();

//3.
// const human = Object.create(null);
const human = Object.create(student);/*inherits from another object */
// console.log(human.job);

//4.class(is a template of js object)(template = kathamo)
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);

//5.function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);