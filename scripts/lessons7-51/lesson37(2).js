// lesson 37(2) (practice)
"use strict";
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let arrNew1 =[];
    let arrNew2 =[];
    let arrNew3 =[];
    let arrNew4 =[];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            arrNew1.push(arr[i]);
        } else if (i < 6) {
            arrNew2.push(arr[i]);
        } else if (i < 9) {
            arrNew3.push(arr[i]);
        } else {
            arrNew4.push(arr[i]);
        }
    }
    console.log([arrNew1,arrNew2,arrNew3,`Оставшиеся студенты: ${arrNew4.length === 0 ? '-' : arrNew4.join(', ')}`]);
    return [arrNew1,arrNew2,arrNew3,`Оставшиеся студенты: ${arrNew4.length === 0 ? '-' : arrNew4.join(', ')}`];
}
sortStudentsByGroups(students);