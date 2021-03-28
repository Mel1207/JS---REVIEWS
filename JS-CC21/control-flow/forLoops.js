// for loops
// formula for loops
// for (let i = 0; i < 5; i++) {
//     console.log('in loop:',i);
// }
// console.log('Console finished');


const names = ['Mel', 'Juvy', 'John'];
for(let i = 0; i < names.length; i++ ){
    // console.log(names[i])
    let html = `
    <div>
        ${names[i]}
    </div>
    `
    console.log(html);
}