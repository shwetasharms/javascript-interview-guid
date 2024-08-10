// input const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'Dave', grade: 'C' },
// ];

// output= {
//     A: [ { name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' } ],
//     B: [ { name: 'Bob', grade: 'B' } ],
//     C: [ { name: 'Dave', grade: 'C' } ]
//   }


// solution
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },

    { name: 'Charlie', grade: 'A' },
    { name: 'Dave', grade: 'C' },
];
// let output={}
//  students.forEach((data)=>{
//      if(output[data.grade]){
//          output[data.grade].push(data)
//      }else{
//          output[data.grade]=[data]
//      }
//  })
//  console.log(output)


// function groupByCustom(array, callback) {
//     return array.reduce((acc, item) => {
//         const key = callback(item);
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key].push(item);
//         return acc;
//     }, {});
// }
// function groupByGrade(students) {
//     return students.reduce((acc, student) => {
//         const { grade } = student;
//         if (!acc[grade]) {
//             acc[grade] = [];
//         }
//         acc[grade].push(student);
//         return acc;
//     }, {});
// }
// console.log(groupByGrade(students));