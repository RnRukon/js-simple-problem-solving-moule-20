const numbers = [45, 55, 58, 65, 55, 54, 83, 88, 61, 58,];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }


// ---------------------------------------------


// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);


// ---------------------------------------------

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
console.log(sum(numbers));