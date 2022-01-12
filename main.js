
const form = document.querySelector('.form')
const gender = document.querySelector('input[type="radio"]:checked')

form.addEventListener('submit',function(e){
    e.preventDefault();

    console.log(gender.value)

});