const pen = {
    brand: 'econo',
    price: 10,
    //object method
    writePoem: function (food) {
        this.brand = food;
        console.log(this);
    }
}

const keys = Object.keys(pen);
const values = Object.values(pen);
const entries = Object.entries(pen);
// console.log(entries);

for (const key in pen) {
    console.log(key, pen[key]);
}

const a = { a: 1 };
const b = { a: 1 };
// reference equality 
const c = a;
//equality by stringify method but this is not useful when the properties change their position
//equality by using a function is useful for normal object(not useful for nested object)
function compare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
console.log((compare(a, b)));

const aBounded = pen.writePoem.bind(a);
aBounded(10);

pen.writePoem.call(a, 10);

pen.writePoem.apply(a, [10]);


