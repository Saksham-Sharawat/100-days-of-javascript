let button = document.querySelector('.edit-button');
let form = document.querySelector('.edit-form');

form.style.display = "none";

button.addEventListener ('click' , function () {
    form.style.display = "flex";
})

// name

let name_input = document.querySelector('#name');
let display_name = document.querySelector('.display-name');
let display_name_table = document.querySelector('.display-name-table');

form.addEventListener('submit' , function (event) {

    event.preventDefault();

    let new_name = name_input.value;
    
    display_name.innerHTML = new_name;
    display_name_table.innerHTML = new_name;

})