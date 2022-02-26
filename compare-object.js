const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

if (first === second) {
    console.log('objects are equal ');
}
else {
    console.log('objects are different');
}//because non-primitive values are compared with reference ;even the property values are exactly same;   


const first2 = { a: 1, b: 2, };
const second2 = { b: 2, a: 1 };
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('both are equal');
}/*this comparison is not useful when object propeties change their positive;*/

//this comparision is useful for normal object;but it is not useful for nested object
function compareObjects(obj1, obj2) {
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


const isEqual = compareObjects(first2, second2);
console.log(isEqual);

//compare two objects
//this way is useful for normal objects;it doesn't work on nested object
const first3 = { x: 1, y: 2 };
const second3 = { y: 2, x: 1 };

function compareTwoObjects(obj1, obj2) {
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
console.log(compareTwoObjects(first3, second3));

const first4 = { c: 1, d: 2, e: 3 };
const second4 = { d: 2, c: 1, e: '3' };

function compareTwoObjectsBoth(obj1, obj2) {
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
console.log((compareTwoObjectsBoth(first4, second4)));