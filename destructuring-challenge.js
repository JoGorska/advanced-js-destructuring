let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// You will create three variables using destructuring on an array returned from a function. The first and second variables will be the first two items in the array and the final one will be the remainder of items in the array. You will also create an arrow function, Which should return an array containing all the subjects for whichever students name is supplied when the function is called.
 
// Declare a variable named: makeList using the keyword const
// The variable makeList should be assigned an arrow function
// The arrow function should take two parameters named: arr, student
// The arrow function should use a return statement
// The function should return an array of the subjects for the student whose name is passed into the function when called.
// Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
// log out the values  first, second, and rest to view their values

const makeList = (arr, student) => {
    for (let i in arr) {
        let studentName = arr[i]["name"]

        if (studentName === student) {
            let studentSubjects = arr[i]["subjects"]
            return studentSubjects
        }
    }
    
};

let subjects = makeList(students, "John");

let [first, second, ...rest] = subjects;
console.log(first, second, rest);
