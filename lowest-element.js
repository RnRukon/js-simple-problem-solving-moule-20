// function lowestElement(numbers) {
//     let lowest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element < lowest) {
//             lowest = element;
//         }
//     }
//     return lowest;
// }

// const ages = [12, 13, 42, 52, 20, 14, 23];
// const oldest = lowestElement(ages);
// console.log("oldest = ", oldest);

// ---------------------------------------------

function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [-12, -13, -42, -52, -20, -14, -23];
const oldest = lowestElement(ages);
console.log("oldest = ", oldest);