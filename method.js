//we can set a function as a propery of an object .it is called method.
const student = {
    name: 'RJ kibria',
    id: 101,
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
};

student.takeExam();
const remeaining1 = student.treatDey(900, 100);
const remeaining2 = student.treatDey(500, 50);
console.log(remeaining2);


const team = {
    name: 'bangladesh',
    categories: 'ODI',
    membersNumber: 11,
    membersName: ['sakib', 'tamim', 'musfiq'],
    newMembarAdd: function (player) {
        this.membersName.push(player);
        return this.membersName;
    },
    newMembarAddNumber: function (number) {
        this.membersNumber = this.membersNumber + number;
        return this.membersNumber;
    }

};

console.log(team.newMembarAdd('mahmudullah'));
console.log(team.newMembarAddNumber(1));
