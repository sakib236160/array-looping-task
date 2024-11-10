/*
Task 3:
    Use a for...of loop to concatenate all the elements of an array into a single string.
Input:
    var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
    'TomTimTinTik'
 */

// Step 1
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(numbers.join(''));


// Step 2
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// var concatenate = '';
// for(const num of numbers){
//     concatenate = concatenate + num;
// }
// console.log(concatenate);


//Step 3 

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatenate = '';
for(const num of numbers){
    concatenate = num.concat('').concat(concatenate);
}
console.log(concatenate);