const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};