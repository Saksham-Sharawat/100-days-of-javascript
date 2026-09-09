let button = document.querySelector('.edit-button');
let form = document.querySelector('.edit-form');

form.style.display = "none";

button.addEventListener ('click' , function () {
    form.style.display = "flex";
})

let name_input = document.querySelector('#name');
let display_name = document.querySelector('.display-name');
let save_button = document.querySelector('.save-button');

save_button.addEventListener('click' , function () {
    let new_name = name_input.value;
    display_name.innerHTML = new_name;
})