const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  }
});



let dateField = document.querySelectorAll('.date-field');

dateField.forEach((dateItem)=>{
  dateItem.addEventListener('input', function(){
    if(dateItem.value){
      dateItem.classList.add('has-date');
      this.parentElement.classList.add('width-no-label')
    }else{
      dateItem.classList.remove('has-date')
    }
  })
})
// swiper2
const swiper2 = new Swiper('.packdges-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
  }
});