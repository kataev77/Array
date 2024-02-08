const arr = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];
console.log(arr[2], arr[4], arr[7]);



let people = [
    {name: 'Bradly', age: 74}, 
    {name: 'Juliya', age: 20},
    {name: 'Walter', age: 35},
    {name: 'Kristen', age: 12}, 
    {name: 'Sam', age: 2}
];
for(let i = 0; i < people.length; i++){
    console.log(people[i].name)
};



for( let i = 0; i < people.length; i++){
    if(people[i].age > 18) {
        console.log(people[i].name)
    }
};


for( let i = 0; i < people.length; i++){
    if(people[i].age > 65) {
        console.log(people[i].name)
    }
};


function addPeople(name, age) {
    people.push({name, age})
    console.log(people)
}
addPeople('Cirsten', 40)
addPeople('Boris', 10)




let num1 = [10, -12, 231, 1, -32, -0.001, 75];

let num2 = [311, 122, -3, 132, 3.1, -2];

let num3 = [-2, -31, -65, -1, 7, -78, -5]


function getPositiveArr(arr) {
   const getPositive = arr.filter((arr) => arr > 0)
   console.log(getPositive)
}

getPositiveArr(num1); // Вернет массив: [10, 231, 1, 75]`

getPositiveArr(num2); // Вернет массив: [311, 122, 132, 3.1]`

getPositiveArr(num3); // Вернет массив: [7]`



