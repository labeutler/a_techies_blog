const loginFormHandler = async (event) => {
    event.preventDefault();

    // collect information needed to log in
    const username = document.querySelector('#username-login').value;
    const password = document.querySelector('#password-login').value;

    // if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ 
                username: username, 
                password: password, 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Please try logging in again.');
        }
    }
// }

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);