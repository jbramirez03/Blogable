
const blogFormHandler = async (event) => {
        event.preventDefault();

        const blog_name = document.querySelector('#blog-name').value;
        const description = document.querySelector('#description').value;

        if (blog_name && description) {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                body: JSON.stringify({ blog_name, description }),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response);
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
};

document.querySelector('#blog-form')
document.addEventListener('submit', blogFormHandler);