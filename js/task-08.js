const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert('Усі поля повинні бути заповнені');
    }
    // console.dir(event.currentTarget);

    // The first option using elements

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    };

    console.log(formData);

    // The second option using formData

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log('name', name);
    //     console.log('value', value);
    // });

    event.currentTarget.reset();
}

// function resetForm (event) {
//     document.getElementsByClassName('login-form').reset();
// }

