const searchEl = document.querySelector('.search')
const searchInput = searchEl.querySelector('input')

searchEl.addEventListener('click', () => {
  searchInput.focus()
})

searchInput.addEventListener('focus', () => {
  searchEl.classList.add('focused')
  searchInput.setAttribute('placeholder', 'Search')
})

searchInput.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInput.setAttribute('placeholder', '')
})

/* Badge */

const badgeEl = document.querySelector('.badges')

window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(badgeEl, .3, {
      opacity: 0,
      display: 'none'
    })
  }
  else {
    gsap.to(badgeEl, .3, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300)) 
// _.throttle(함수, 시간)