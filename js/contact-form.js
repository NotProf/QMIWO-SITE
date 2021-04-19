const inputsIds = ['name', 'email', 'subject', 'message'];
const contactForm = document.getElementById('contactForm');
const errorMessage = document.getElementById('errorMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isError = false;

    let body = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    for (let inputId of inputsIds) {

        let input = document.getElementById(inputId);
        body[inputId] = input.value;

        if (!input.value) {
            isError = true;
            input.classList.add('incorrect-input');

            if (errorMessage.style.getPropertyValue('display') === '') {
                errorMessage.style.setProperty('display', 'block');
            }

        } else {
            input.classList.remove('incorrect-input');
        }
    }

    if (!isError) {
        sendForm(body);
    }
});

function sendForm(body) {

    fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST', body})
        .then(() => {
            alert('Your message is sent');
            location.reload();
        });
}
