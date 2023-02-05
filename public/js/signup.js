const signupFormHandler = async (event) => {
    event.preventDefault();

    // collect information needed to log in
    const usernameEl = document.querySelector('#username-signup');
    const passwordEl = document.querySelector('#password-signup');

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ 
                username: usernameEl.value, 
                password: passwordEl.value, 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Please try signing up again.');
        }
    };
}

document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);