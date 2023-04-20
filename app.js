const contents = document.querySelectorAll('.content');
contents.forEach(content => {
  content.addEventListener('transitionend', () => {
    if (content.classList.contains('content-exit')) {
      content.style.display = 'none';
    }
  });
});

const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElem = document.querySelector(targetId);
    const targetOffsetTop = targetElem.getBoundingClientRect().top + window.pageYOffset;

    document.body.classList.add('animate');

    window.setTimeout(() => {
    document.body.classList.remove('animate');
    window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth'
    });
    }, 1000);
});
})