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

// phone number

let phone_no_input = document.querySelector('#phone');
let display_phone_no = document.querySelector('.phone-no');

// date of birth

let dob_input = document.querySelector('#dob');
let display_dob = document.querySelector('.dob');

// program

let program_input = document.querySelector('#program');
let display_program = document.querySelector('.program');

// department

let department_input = document.querySelector('#department');
let display_department = document.querySelector('.department');

// semester

let semester_input = document.querySelector('#semester');
let display_semester = document.querySelector('.semester');

// enrollment

let enrollment_input = document.querySelector('#enrollment');
let display_enrollment = document.querySelector('.enrollment');

// address

let address_input = document.querySelector('#address');
let display_address = document.querySelector('.address');

// city

let city_input = document.querySelector('#city');
let display_city = document.querySelector('.city');

// state

let state_input = document.querySelector('#state');
let display_state = document.querySelector('.state');


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

    // phone number

    let new_phone_no = phone_no_input.value;
    display_phone_no.innerHTML = new_phone_no;

    // date of birth

    let new_dob = dob_input.value;
    display_dob.innerHTML = new_dob;

    // program

    let new_program = program_input.value;
    display_program.innerHTML = new_program;

    // department

    let new_department = department_input.value;
    display_department.innerHTML = new_department;

    // semester

    let new_semester = semester_input.value;
    display_semester.innerHTML = new_semester;

    // enrollment

    let new_enrollment = enrollment_input.value;
    display_enrollment.innerHTML = new_enrollment;

    // address

    let new_address = address_input.value;
    display_address.innerHTML = new_address;

    // city

    let new_city = city_input.value;
    display_city.innerHTML = new_city;

    // state

    let new_state = state_input.value;
    display_state.innerHTML = new_state;

})