// let students = [{
//     name: "safia",
//     age: 21,
//     grade: 90,
// },
// {
//     name: "Zakariye",
//     age: 22,
//     grade: 95,

// },
// {
//     name: "maxamed",
//     age: 25,
//     grade: 78,

// },
// {
//     name: "ismacil",
//     age: 19,
//     grade: 88,

// },
// {
//     name: "iqra",
//     age: 20,
//     grade: 89,

// },
// {
//     name: "meymuuna",
//     age: 24,
//     grade: 67,

// },
// ];

// for(student of students){
//     console.log(student.name)
// };

// for(student of students){
//     if(student.grade >= 80){
//         console.log(student.name)

//     }
// }

// for(student of students){
//     if(student.grade >= 80){
//         console.log(student.name +" " + "have passed" +" " + student.grade) 

//     }
// }

// let passedStudents = [];

// for (let student of students) {
//     if (student.grade >= 80) {
//         passedStudents.push(student);
//     }
// }

// console.log(passedStudents)



// let students = [
//     {
//         name: "Safia",
//         age: 21,
//         grade: 90
//     },
//     {
//         name: "Zakariye",
//         age: 22,
//         grade: 95
//     },
//     {
//         name: "Maxamed",
//         age: 25,
//         grade: 78
//     },
//     {
//         name: "Ismacil",
//         age: 19,
//         grade: 88
//     }
// ];

// let passedStudents = [];

// for (let student of students) {

//     if (student.grade >= 80) {
//         passedStudents.push(student);
//     }

// }

// console.log(passedStudents);


// let products = [
//     { name: "Laptop", price: 700 },
//     { name: "Phone", price: 400 },
//     { name: "Mouse", price: 20 },
//     { name: "Keyboard", price: 50 }
// ];

// let cheapProducts = [];

// for (let product of products) {

//     if (product.price < 100) {
//         cheapProducts.push(product);
//     }

// }

// console.log(cheapProducts);

let students = [
    {
        name: "Safia",
        grades: [90, 85, 95]
    },
    {
        name: "Ali",
        grades: [60, 55, 70]
    },
    {
        name: "Amina",
        grades: [88, 92, 84]
    },
    {
        name: "Ahmed",
        grades: [40, 50, 45]
    }
];

let passedStudents = [];

 for (let student of students) {

    let total = 0;

    for (let grade of student.grades) {
        total += grade;
    }

    let average = total / student.grades.length;

    if (average >= 60) {
        passedStudents.push(student.name);
    }
}

console.log(passedStudents);