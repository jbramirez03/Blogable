const blogFormHandler = async (event) => {
    event.preventDefault();

    const blogName = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#description').value.trim();

    if (blogName && description) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ blogName, description }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
          alert(response.statusText);
        }
    }
};

document.querySelector('#blog-form').addEventListener('submit', blogFormHandler);