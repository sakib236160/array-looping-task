/*
Task 1:
        Write a JavaScript code to reverse the array colors without using the reverse method.
Input: 
        const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
        ['orange', 'yellow', 'green', 'blue', 'red']
*/
// Step 01
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// colors.reverse();
// console.log(colors);

// Step 02
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev_color =[];
// for(const color of colors){
//     // console.log(color);
//     rev_color.unshift(color);
// }
// console.log(rev_color);


// Step 03
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev_color = [];
// for(let i = 0; i<colors.length; i++){
//     const color = colors[i];
//     // console.log(color);
//     rev_color.unshift(color);
// }
// console.log(rev_color);


// Step 04
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev_color = [];
// for(let i = colors.length - 1; i>= 0; i--){
//     const color = colors[i];
//     // console.log(color);
//     rev_color.push(color);
// }
// console.log(rev_color);

// Step 05
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let i = 0;
const rev_color =[];
while(i<colors.length){
    const color = colors[i]
    // console.log(color);
    rev_color.unshift(color)
    i++;
}
console.log(rev_color);