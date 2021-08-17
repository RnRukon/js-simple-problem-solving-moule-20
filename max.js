const business = 450;
const minister = 3550;
const army = 6000;

// --------------------------------------

// if (business > minister) {
//     console.log("Business person er pola is bigger");
// } else {
//     console.log("minister er pola is bigger");
// }


//--------------------------------------
// compare 3---------------
/*
if (business > minister && business > army) {
    console.log("business is bigger");
} else if (minister > business && minister > army) {
    console.log("minister is bigger");
} else {
    console.log("army is bigger");
}
*/

// ---------------------------------------------
/*
function fineBigger(business, minister, army) {
    if (business > minister && business > army) {
        return "business is bigger";
    } else if (minister > business && minister > army) {
        return "minister is bigger";
    } else {
        return "army is bigger";
    }
}

console.log(fineBigger(business, minister, army))
*/


// --------------------------------------------
/*

var max = Math.max(business, minister, army); //কত গুলো সংখ্যা থেকে সর্ব উচ্চ সংখ্যা বের করার জন্য ব্যবহার করা হয়।
console.log("largest is", max);
// ------------------------------------
var min = Math.min(business, minister, army);//কত গুলো সংখ্যা থেকে সর্ব নিম্ন সংখ্যা বের করার জন্য ব্যবহার করা হয়।
console.log("largest is", min);
*/

// --------------------------------------//
// function maxNumber(business, minister, army) {
//     const number = Math.max(business, minister, army);
//     return number;
// }
// console.log(maxNumber(business, minister, army));