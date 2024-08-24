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
})