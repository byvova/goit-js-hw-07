const form = document.querySelector('.login-form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const response = {
        
    };

    Array.from(event.target.elements).forEach((element) => {
        if (element.nodeName === 'INPUT') {
            response[element.name] = element.value.trim();
        }
    });

    const hasEmptyFields = Object.values(response).some(value => value === '');

    if (hasEmptyFields) {
        alert('All form fields must be filled in');
    } else {
        console.log('Email:', response.email);
        console.log('Password:', response.password);
        console.log('Submitted Data:', response);
        event.target.reset();
    }
});
