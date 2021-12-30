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