const logout = async () => {
    const response = await fetch(`/api/user/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Please log out!');
    }
};

document.querySelector('#logout-link').addEventListener('click', logout);
