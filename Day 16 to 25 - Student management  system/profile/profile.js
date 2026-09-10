let button = document.querySelector('.edit-button');
let form = document.querySelector('.edit-form');
let display = document.querySelector('.display');

form.style.display = "none";

button.addEventListener ('click' , function () {
    form.style.display = "flex";
    display.style.display="none";
})

// name

let name_input = document.querySelector('#name');
let display_name = document.querySelector('.display-name');
let display_name_table = document.querySelector('.display-name-table');

// roll number

let roll_input = document.querySelector('#roll-no');
let display_roll = document.querySelector('.display-roll-no');

// email

let email_input = document.querySelector('#email');
let display_email = document.querySelector('.email');

form.addEventListener('submit' , function (event) {

    event.preventDefault();
    form.style.display = "none";
    display.style.display= "flex";

    // name

    let new_name = name_input.value;
    display_name.innerHTML = new_name;
    display_name_table.innerHTML = new_name;

    // roll number

    let new_roll_no = roll_input.value;
    display_roll.innerHTML = new_roll_no;

    // email

    let new_email = email_input.value;
    display_email.innerHTML = new_email;

})