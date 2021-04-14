const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2009},
    {name: "Company Four", category: "Retail", start: 1970, end: 1195},
    {name: "Company Five", category: "Technology", start: 1980, end: 1998},
    {name: "Company Six", category: "Finance", start: 1985, end: 2003},
    {name: "Company Seven", category: "Auto", start: 1975, end: 2005},
    {name: "Company Eight", category: "Technology", start: 1982, end: 2005},
    {name: "Company Nine", category: "Retail", start: 1985, end: 1990}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// Standard forLoop
// for(i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// ForEach - in foreach meron tayon 3 types of parameters na pwede gamitin, 1 - a variable na mag iitirate sa buong array, 2 - yun index or kung pang ilan ang bilang, 3 - is yung buong array mismo
// companies.forEach((company, i, compArr) => {
//     console.log(company, i, compArr);
// })

// Filter
// we will filter in standard forLoop
// task get 21 and older ages
// let canDrink = [];
// for(i = 0; i <= ages.length; i++) {
//     if(ages[i] >= 20){
//         canDrink.push(ages[i]);
//         // .push means idagdag or isama sa array
//     }
// }
// console.log(canDrink);
// Lets do the filter way 
// ES5 way
// const canDrink = ages.filter(function(age) {
//     if(age >= 20) {
//         return true;
//     }
// });

// Es6 Arrow function
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter Retail companies
// ES5 way
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });
// console.log(retailCompanies);
// Filter Retail companies in ES6
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// Filter companies started in 1980's
// ES5 way
// const earlierComp = companies.filter(function(company) {
//     if(company.start >= 1980 && company.start <= 1989) {
//         return true
//     }
// });

// ES6 Arrow Function
// const earlierComp = companies.filter(company => company.start >= 1980 && company.start <= 1989);
// console.log(earlierComp);

// get companies lasted 10years or more 
// ES5 Way
// const longLastedCopm = companies.filter(function(company) {
//     if(company.end - company.start >= 10) {
//         return true;
//     }
// });

// ES6 Function
// const longLastedComp = companies.filter(company => (company.end - company.start >= 10));
// console.log(longLastedComp);

// Map
// map creates a new array with the results of calling a function for evry array element
// create an array of company names

// ES5 way
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const testComp = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`
// });
// Every functions you create it will automatically make an array for each function

// ES6 Function
// const companyNames = companies.map(company => {return company.name});
// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => {return `${company.name} [${company.start} - ${company.end}]`});
// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNames);

// get squareroot of ages
// const ageSquare = ages.map(age => Math.sqrt(age));
// const ageTimes2 = ages.map(age => age * 2);

// // or do this 
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2)

// console.log(ageMap);


// Sort
// sort simply just arraging array values from least to greatest
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// ES6 function
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort Ages
// const sortAges = ages.sort();
// const sortAges = ages.sort((a, b) => a - b );
// console.log(sortAges)

// Reduce
// lets do reduce on old for loop
// let ageSum = 0;
// for(i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }

// ES5 reduce
// let ageSum = ages.reduce(function (total, age) {
//     return total + age
// }, 0);

// ES6 Function
// let ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears);

// try 4 methods combine

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b);

console.log(combined);