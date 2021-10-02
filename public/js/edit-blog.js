const editFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    const id = window.location.pathname.split('/').pop();
  
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        blog_name,
        description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector('#edit-blog-form')
    .addEventListener('submit', editFormHandler);