// const myNumber = -5;
// const outPut = Math.abs(myNumber); // negative number থেকে positive number রে রুপান্তর করার জন্য ব্যবহার করা হয়। 

// --------------

// const myNumber = 6.6411;
// const outPut = Math.ceil(myNumber);//কোনো ভগ্নাংশ নাম্বার কে উপরের পূন্য সংখ্যায় রুপান্তর করার জন্য ব্যবহার করা হয়।

// -----------------

// const myNumber = 6.6411;
// const outPut = Math.floor(myNumber);//কোনো ভগ্নাংশ নাম্বার কে নিচের পূন্য সংখ্যায় রুপান্তর করার জন্য ব্যবহার করা হয়।

// ------------------


// const myNumber = 6.400;
// const outPut = Math.round(myNumber);//কোনো ভগ্নাংশ নাম্বার কে কাছাকাছি পূন্য সংখ্যায় রুপান্তর করার জন্য ব্যবহার করা হয়।


// ------------------



// const outPut = Math.random() * 10;//1 থেকে ০ এর মধ্যে কোনো একটা random সংখ্যা প্রকাশ করে।


// -------------------


// for (let i = 0; i <= 50; i++) {
//     const randomNumber = Math.random() * 6;
//     const rounded = Math.floor(randomNumber);
//     console.log(rounded);
// }


const selected = [];
for (let i = 0; i < 10; i++) {
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    } else {
        console.log('found duplicate', selected, picked)
    }
}
console.log(selected);