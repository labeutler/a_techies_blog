const signupFormHandler = async function (event) {
    event.preventDefault();

    // collect information needed to log in
    const username = document.querySelector('#username-signup').value;
    const password = document.querySelector('#password-signup').value;

    // if (username && password) {
    const response = await fetch(`/api/user`, {
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
        alert('Please try signing up again.');
    }
}


document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);