const loadMoreButton = document.getElementById('loadMoreButton');
// const loadMoreButton = document.querySelector('#loadMoreButton');
const hiddenPosts = document.querySelectorAll('.post.hide');

let currentIndex = 0;

loadMoreButton.addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
        if (currentIndex < hiddenPosts.length)  {
            hiddenPosts[currentIndex].classList.remove('hide');
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

    console.log(author, title, content);
    const post = `
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">${title}</span>
                            <p>${content}</p>
                        </div>
                    </div>
    `;

    const newPost = document.createElement('div');
    newPost.classList.add('col');
    newPost.classList.add('s12');
    newPost.classList.add('m6');

    newPost.innerHTML = post;

    postsContainer.appendChild(newPost);

    postForm.reset();
});