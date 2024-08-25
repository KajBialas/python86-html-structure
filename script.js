const loadMoreButton = document.getElementById('loadMoreButton');
// const loadMoreButton = document.querySelector('#loadMoreButton');
const hiddenPosts = document.querySelectorAll('.post.hidden');

let currentIndex = 0;

loadMoreButton.addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
        if (currentIndex < hiddenPosts.length)  {
            hiddenPosts[currentIndex].classList.remove('hidden');
            currentIndex++;
        } else {
            loadMoreButton.style.display = 'none';
        }

    } 
});

const postForm = document.getElementById('postForm');
const postsContainer = document.querySelector('.posts-list');

postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const post = `
                    <h2>
                        ${title}
                    </h2>
                    <p>
                        ${content}
                    </p>
    `;

    const newPost = document.createElement('article');
    newPost.classList.add('post');
    newPost.innerHTML = post;

    postsContainer.appendChild(newPost);

    postForm.reset();
});