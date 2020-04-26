// EVENT BUBBLING - This event will call the function of related parent elements even if the parent element is not click

// document.querySelector('.lead').addEventListener('click', function () {
//     console.log('Lead');
// });

// document.querySelector('#form').addEventListener('click', function () {
//     console.log('form');
// });

// document.querySelector('.card-body').addEventListener('click', function () {
//     console.log('card-body');
// });

//  ---------------------------------------------------------------------------------------  //
// EVENT DELEGATION - the event is called from its parent down to its children
document.body.addEventListener('click', deleteItem)

function deleteItem (e) {
    // console.log('delete item');
    // console.log(e.target);

    // if(e.target.parentElement.className === 'delete-item text-danger'){ // This will only check for exact classname of the target
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){ // This will look for a class list with relative to what its looking for 
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}