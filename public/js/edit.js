const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.replace('/dashboard');
    };
    //If deleting instead of updating
    const deleteClickHandler = async function() {
        await fetch(`/api/post/${postId}`, {
            method: 'DELETE',
        });
        document.location.reload('/dashboard');
    };

// If they are leaving a comment and updating
document
    .querySelector('#editPost-form')
    .addEventListener('submit', editFormHandler);
// If they chose to delete instead
document
    .querySelector('#deleteBtn')
    .addEventListener('click', deleteClickHandler);
