const progress = document.querySelector('.progress');

function calculateProgress() {

  const pageHeight = document.body.offsetHeight
  const viewportHeight = window.innerHeight
  const currentPosition = window.scrollY

  const totalHeight = pageHeight - viewportHeight;
  const persent = currentPosition / totalHeight * 100

  console.log(persent);

  progress.value = persent;
}


function throttle(callee, delay) {
  let timeout = null
    return (...args) => {
      if(!timeout) {
      callee(...args)
      timeout = setTimeout(() => {
        timeout = null
      }, delay);
    }
  }
}

const optimazedHandler = throttle(calculateProgress, 50)

window.addEventListener("scroll", optimazedHandler);
