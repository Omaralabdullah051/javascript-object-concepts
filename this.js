//this is an execution context.this refers to the current object.

//Alone, this refers to the global object(window)
// console.log(this);

const kibria = {
    name: 'RJ kibria',
    id: 101,
    money: 5000,
    //In an object method,this refers to the global object(window)when the method is an arrow function.so that is why,arrow function is not used as methods or constructors.because arrow function don't have their own this ,they can't access any other properties from a parent object.
    treatDeyArrow: () => {
        console.log(this);
    },
    //In an object method,this refers to the object(here kibria)when the method is a regular function.
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    },
    //In an object method,this refers to the object(here kibria)when the method is a normal function(even an inner function is an arrow function )
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    }
    //so,the at the end,we clearly say that,In an object method,this refers to the object.because we cannot use arrow function as method.
};
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero balam',

}

//In a function,this refers to the global object(window)
function add() {
    console.log(this);
}