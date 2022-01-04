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
    gsap.to('#to-top', .2, {
      x: 0
    })
  }
  else {
    gsap.to(badgeEl, .3, {
      opacity: 1,
      display: 'block'
    })
    gsap.to('#to-top', .2, {
      x: 100
    })
  }
}, 300)) 
// _.throttle(함수, 시간)

/* Scroll to top Btn */

const toTop = document.querySelector('#to-top') 
toTop.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0 
  })
})


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

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
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


/* Scroll Animation */

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


/* Footer Year */

const thisYear = document.querySelector('.this-year')
thisYear.innerText = new Date().getFullYear()

