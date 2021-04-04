// Objects - Objects are usually created to represent entities of the real world, like users, orders and so on:
// objects in real life have a property and methods just like a car
// properties of a car is car name, car model, car color etc
// methods of a car is start, drive, brake, stop etc

// same with javascrip objects it has properties and methods
// example object is User object
// properties of User is, name, email, address
// methods of user is login, logout


//  -------------------------------------------------------------  //
// Object literals

// let user = {
//     name: 'Mel', // name is called a key the string 'Mel' is called value.
//     age: 30,
//     email: 'meljohn@gmail.com',
//     location: 'Manila',
//     blogs: ['the best way to understand javascript', 'start from the basics']
// };

// console.log(user) // displays the whole objects
// console.log(user.name) // displays the specific value of an object

// // if we want to overwrite one of user values
// user.age = 35;
// console.log(user.age)

// // another way to access object value using square braket notation
// console.log(user['name'])
// user['name'] = 'Juvy';
// console.log(user['name']);

// using square brakets is same behavior of using (.) notation but square brakets can be usefull if we have stored object value into a variable 

// const key = 'location'
// console.log(user[key]); // is same as user['location']

// but if we try to do this
// user.key // it will try to find a key inside an object wich will turned into an error or undefined
// console.log(user.key)
// console.log(typeof user);


//  ----------------------------------------------------------  //
// adding function inside an object or called methods
let user = {
    name: 'Mel',
    age: 30,
    email: 'meljohn@gmail.com',
    location: 'Manila',
    // old version of blog array
    // blogs: ['the best way to understand javascript', 'start from the basics'],
    
    // new version of blog array
    blogs: [
        {title: 'the best way to understand javascript' , likes: 20},
        {title: 'start from the basics', likes: 50}
    ],
    login: function () { // this methods are a function defined inside an object
        console.log('the user logged in'); 
    },
    logout: function () {
        console.log('the user logged out');
    },
    logBlogs: function () { 
        // console.log(this.blogs)
        console.log('This user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
    // this keyword refers to user object is a context object and it will differ depends on where we called it

    // note: we can still make shorter methods inside our objects 
    // logBlogs() { 
    //     // console.log(this.blogs)
    //     console.log('This user has written the following blogs');
    //     this.blogs.forEach(blog => {
    //         console.log(blog)
    //     })
    // }
    // just remove parenthesis and : key and still can apply in any method na pwede nating ilagay sa loobg ng object

};

// note: observe logBlogs key gumamit tayo ng regular function why ? dahil kapag kinonvert natin ito into arrow function yung this keyword ay magiging value ng global scope mag rereffer na yun sa window object. pero kung regular function ang gagamitin natin, magrerefer si this keyword kay user object.

// user.login();
// user.logout();
user.logBlogs();
console.log(this)

// an object can store an arrays, and we can store object inside an arrays
// example
// const blogs = [
//     {title: 'the best way to understand javascript' , likes: 20},
//     {title: 'start from the basics', likes: 50}
// ];

// console.log(blogs)