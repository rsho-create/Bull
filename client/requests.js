const post = document.querySelector('.form-container');

post.addEventListener('submit', e => {
    e.preventDefault();
    const post = {
        title: e.target['title-bs'].value.trim(),
        author: e.target['author-bs'].value.trim(),
        story:  e.target['bullshit'].value.trim()
    }
    const options = { // object
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json" // good practice
        }
    }

    post.reset()

    fetch('http://localhost:3000/posts', options) // response - json - or 200 - constructed on backend
        .then(r => r.json()) // expect to recieve a result of any kind - can be anything
        .catch(err => console.log(err));
})