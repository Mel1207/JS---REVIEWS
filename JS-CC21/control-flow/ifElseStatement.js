// if else statements

// const password = 'pass';

// if (password.length >= 8) {
//     console.log('that password is long enough');
// } else {
//     console.log('that password is not long enough');
// }

// if else if 
// const password = 'theU';

// if (password.length >= 12) {
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8) {
//     console.log('that password is long enough');
// } else {
//     console.log('that password is not long enough');
// }


// Logical Operators
// && - means and or another condition
// || - means 'or' wich serves as alternate condition

// const password = 'ae@sssdsd';

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8 || password.includes('@' && password.length >= 5)) {
//     console.log('that password is long enough');
// } else {
//     console.log('that password is not long enough');
// }

// logical NOT (!)

// let user = false; 

// if (!user) {
//     console.log('You must be logged in to continue');
// }

// Break and continue

const scores = [50, 25, 0, 39, 100, 20, 10];

// Break rule
// for (i = 0; i < scores.length; i++) {
//     console.log('Your score :', scores[i])
//     if (scores[i] === 100) {
//         console.log('Congrats, you got the top score!');
//         break;
//     }
// }

// for (i = 0; i < scores.length; i++) {

//     if(scores[i] === 0 ) {
//         continue;
//     }

//     console.log('Your score :', scores[i])
//     if (scores[i] === 100) {
//         console.log('Congrats, you got the top score!');
//         break;
//     }
// }
