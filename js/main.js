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


/* Visual Animation */

const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})

/* Swiper Css */

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, 
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', 
    nextEl: '.promotion .swiper-next'
  }
})


/* Toggle Promotion */

const promotionEl = document.querySelector('.promotion')
const promotionToggelBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggelBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    promotionEl.classList.add('hide')
  }
  else {
    promotionEl.classList.remove('hide')
  }
})


/* Floating Animation */

function floatingObject(selector, delay, size) {
  gsap.to(selector, Math.random(1.5, 2.5), {
    y: size,
    repeat: -1,  // -1이면 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)