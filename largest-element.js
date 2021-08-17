// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [12, 13, 42, 52, 20, 14, 23];
// const oldest = largestElement(ages);
// console.log("oldest = ", oldest);

// ---------------------------------------------

function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [-12, -13, -42, -52, -20, -14, -23];
const oldest = largestElement(ages);
console.log("oldest = ", oldest);