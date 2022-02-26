const kibria = {
    name: 'RJ kibria',
    id: 101,
    money: 5000,
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero balam',

}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'normal Golam',

}
//with the call and apply method,we can write a method that can be used on different object.

//call
kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 50, 30);

//apply
kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 100]);

kibria.treatDey.apply(normalGolam, [700, 100, 70]);

//the difference between call and apply method is:
//call() method takes arguments seperately.
//apply() method takes arguments as an array.

//call() method execution : at the time of binding.
//apply() method execution: at the time of binding.
//bind() method execution : at the time when we execute the return function.
//call() parameter: Any number of arguments one by one.
//apply() parameter: array[].
//bind() parameter: takes parameter also