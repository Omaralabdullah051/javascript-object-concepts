const kibria = {
    name: 'RJ kibria',
    id: 101,
    money: 5000,
    treatDey: function (expense) {
        this.money = this.money - expense;
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
const aminulIslam = {
    id: 104,
    money: 9000,
    name: 'aminul Islam',

}

//with the bind method,an object can borrow a method from another object

kibria.treatDey(100);
const heroTreatDey = kibria.treatDey.bind(heroBalam);/*here with the bind method heroBalam object borrow a method from kibria object*/
heroTreatDey(500);
heroTreatDey(300);
kibria.treatDey(400);
const golamTreatDey = kibria.treatDey.bind(normalGolam);/*here with the bind method normalGolam object borrow a method from kibria object*/
golamTreatDey(400);

const aminulTreatDey = kibria.treatDey.bind(aminulIslam);/*here with the bind method aminulIslam object borrow a method from kibria object*/
aminulTreatDey(2000);
