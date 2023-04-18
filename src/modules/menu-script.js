export default function menuScript() {
  let mobMenu = document.querySelector('.mobileMenu')
  let hBurger = document.querySelector('.header__burger')

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
      e.preventDefault();


      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      if (link.classList.contains('mobileMenu__list-item')){
        mobMenu.classList.remove('mobileMenu-open')
        hBurger.classList.remove('header__burger-active')
      }

      const topOffset = document.querySelector('.header').offsetHeight;
      //const topOffset = 300;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 1024){
      const slider = new Swiper()
    }
  })

}

