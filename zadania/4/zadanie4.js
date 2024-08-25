const faqTitles = document.querySelectorAll('.faq-title');

faqTitles.forEach( title => {
    title.addEventListener('click', function() {
        console.log('click');
        const content = this.nextElementSibling;

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
});

