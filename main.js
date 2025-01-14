const anchors = document.querySelectorAll('.link');

anchors.forEach(anchor => {
  anchor.addEventListener('click', (evt) => {

    evt.preventDefault();

    const blockId = anchor.getAttribute('href');

    const block = document.querySelector(blockId);

    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
});
