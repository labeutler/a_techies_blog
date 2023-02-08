const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.replace('/dashboard');
};




// If they are adding a new post
document
    .querySelector('#newPost-form')
    .addEventListener('submit', newFormHandler);
