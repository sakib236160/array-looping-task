/*
Task 2:
    Write a JavaScript code to get the even numbers from an array using any looping technique.

Input:
    const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
    [12, 98, 76, 46]
 */

// Step 01
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];
// for(let i = 0; i< numbers.length ; i++){
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i]);
//     }
// }
// console.log(evenNumbers);


// Step 2
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let i = 0;
// const evenNumbers = [];
// while(i<numbers.length){
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i]);
//     }
//     i++;
// }
// console.log(evenNumbers);

// Step 3 
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for(const num of numbers){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);