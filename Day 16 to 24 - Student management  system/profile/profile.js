let button = document.querySelector('.edit-button');
let form = document.querySelector('.edit-form');

form.style.display = "none";

button.addEventListener ('click' , function () {
    form.style.display = "flex";
})
