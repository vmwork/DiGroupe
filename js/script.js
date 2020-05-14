if (document.querySelector('.partners-slider')) {
  var andSwiper = new Swiper('.partners-slider', {
    speed: 700,
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 1,
    clickable: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.partners-button-next',
      prevEl: '.partners-button-prev',
    },
    breakpoints: {
      768: {
        speed: 700,
        direction: 'horizontal',
        clickable: true,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true
      },
      991: {
        speed: 700,
        direction: 'horizontal',
        clickable: true,
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true
      }
    }
  })


  var andSwiper = new Swiper('.offers-slider', {
    speed: 700,
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 'auto',
    clickable: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        speed: 700,
        direction: 'horizontal',
        clickable: true,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true
      },
      991: {
        speed: 700,
        direction: 'horizontal',
        clickable: true,
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true
      }
    }
  })

  var andSwiper = new Swiper('.offers-slider', {
    speed: 700,
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 1,
    clickable: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true,
      el: '.offers-swiper_pagination'
    }
  })

  var andSwiper = new Swiper('.news-slider', {
    speed: 700,
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 1,
    clickable: true,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.news-button-next',
      prevEl: '.news-button-prev',
    },
    breakpoints: {
      768: {
        speed: 700,
        direction: 'horizontal',
        clickable: false,
        allowSlideNext: false,
        allowSlidePrev: false,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: false,
        loop: false
      }
    }
  })
}
//tabs
if (document.querySelector('.info-header')) {

  let tab = document.getElementsByClassName('info-header-tab');
  tabs = document.querySelectorAll('.info-header-tab');
  tabcontent = document.getElementsByClassName('info-tabcontent');
  info = document.getElementsByClassName('info-header')[0];

  function hideTabContent(a) {
    for (let i = a; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('show');
      tabcontent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabcontent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabcontent[b].classList.remove('hide');
      tabcontent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active')
    }
    target.classList.add('active')

    if (target.classList.contains('info-header-tab')) {

      for (let i = 0; i < tabcontent.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  })
}


if (document.querySelector('.category-menu')) {

  $(document).click(function (event) {
    if (document.body.clientWidth <= 768) {
      if ($(event.target).closest(".sort-menu-wrapp").length)
        return;
      $(".sort-menu-wrapp").slideUp("slow");
      event.stopPropagation();
    }
  });
  $('.sort-menu-title').click(function () {
    if (document.body.clientWidth <= 768) {
      $(this).siblings(".sort-menu-wrapp").slideToggle("slow");
      return false;
    }
  });
}

if (document.querySelector('.questions-wrapp-title')) {
  let categoryTitle = document.querySelectorAll('.questions-wrapp-title'),
    question = document.querySelector('.questions')

  categoryTitle[0].addEventListener('click', () => {
    categoryTitle[0].classList.toggle('arrow-rotate')
  })
  categoryTitle[1].addEventListener('click', () => {
    categoryTitle[1].classList.toggle('arrow-rotate')
  })
  categoryTitle[2].addEventListener('click', () => {
    categoryTitle[2].classList.toggle('arrow-rotate')
  })
  categoryTitle[3].addEventListener('click', () => {
    categoryTitle[3].classList.toggle('arrow-rotate')
  })

  $(document).click(function (event) {
    if ($(event.target).closest(".questions-wrapp-content").length)
      return;
    $(".questions-wrapp-content").slideUp("slow");
    event.stopPropagation();
  });
  $('.questions-wrapp-title').click(function () {
    $(this).siblings(".questions-wrapp-content").slideToggle("slow");
    return false;
  });

}
// menu

$(document).click(function (event) {
  if ($(event.target).closest(".header-menu-wrapp").length)
    return;
  $(".header-menu-wrapp").slideUp("slow");
  event.stopPropagation();
});
$('.header-menu-title').click(function () {
  $(this).siblings(".header-menu-wrapp").slideToggle("slow");
  return false;
});

$(document).click(function (event) {
  if (document.body.clientWidth <= 768) {

    if (event.target.classList.contains("arrow-bottom")){
      document.querySelector('.filter-arrow-bottom').classList.add('filter-arrow-active')
      document.querySelector('.filter-arrow-top').classList.remove('filter-arrow-active')

    }else if(event.target.classList.contains("arrow-top")){
      document.querySelector('.filter-arrow-bottom').classList.remove('filter-arrow-active')
      document.querySelector('.filter-arrow-top').classList.add('filter-arrow-active')
    }

  }
});

$(document).click(function (event) {
  if (document.body.clientWidth <= 768) {
    if ($(event.target).closest(".filter-double-title-content").length)
      return;
    $(".filter-double-title-content").slideUp("slow");
    event.stopPropagation();
  }
});
$('.filter-double-title').click(function () {
  if (document.body.clientWidth <= 768) {
    $(this).siblings(".filter-double-title-content").slideToggle("slow");
    return false;
  }
});

$(document).click(function (event) {
  if (document.body.clientWidth <= 768) {
    if ($(event.target).closest(".filter-catalog-wrapp").length)
      return;
    $(".filter-catalog-wrapp").slideUp("slow");
    event.stopPropagation();
  }
});
$('.filter-catalog-title').click(function () {
  if (document.body.clientWidth <= 768) {
    $(this).siblings(".filter-catalog-wrapp").slideToggle("slow");
    return false;
  }
});

$(document).click(function (event) {
  if (document.body.clientWidth <= 768) {
    if ($(event.target).closest(".filter-double-wrapp-content").length)
      return;
    $(".filter-double-wrapp-content").slideUp("slow");
    event.stopPropagation();
  }
});
$('.filter-double-wrapp-img').click(function () {
  if (document.body.clientWidth <= 768) {
    $(this).siblings(".filter-double-wrapp-content").slideToggle("slow");
    $('.filter-double-wrapp-content').toggleClass('filter-double-wrapp-content_active');
    return false;
  }
});

// search

$('.search-form').click(function () {
  $('.search-wrapp').toggleClass('search-active');
  if($('.search-wrapp').hasClass("search-active-content")){
    $('.search-wrapp').toggleClass('search-active-content');
  }
});

$(document).click(function (event) {
  if($('.search-wrapp').hasClass("search-active-content")){
  }else if($('.search-wrapp').hasClass("search-active") == false){
  $(".search-wrapp-content").slideUp(200);
  event.stopPropagation();
    
  }else{
  if ($(event.target).closest(".search-wrapp-content").length)
    return;
  $(".search-wrapp-content").slideUp("slow");
  event.stopPropagation();
  }

});
$('.search-form').keyup(function () {
  if($('.search-wrapp').hasClass("search-active-content") || $('.search-wrapp').hasClass("search-active") == false ){
  }else{
    $(this).siblings(".search-wrapp-content").slideToggle("slow");
    $('.search-wrapp').toggleClass('search-active-content');
    return false;
  }
});



$('.main-nav-hamburger').click(function () {
  if (document.body.clientWidth <= 768) {
    $('body').addClass('body-active-menu');
    $('.main-nav').addClass('main-nav-active');
  }
});

$('.close-nav').click(function () {
  if (document.body.clientWidth <= 768) {
    $('body').removeClass('body-active-menu');
    $('.main-nav').removeClass('main-nav-active');
  }
});

$('.comments-btn-blue').click(function () {
    $('body').toggleClass('body-active-comments');
});

$('.comments-close').click(function () {
  $('body').toggleClass('body-active-comments');
});



//comments


let check = document.querySelector('.checkbox')

if (document.querySelector('.comments-form-bottom')) {

  check.addEventListener('click', () => {
    if (check.checked == true) {
      document.querySelector('.comments-form-bottom').classList.toggle('form-active')
    } else if (check.checked == false) {
      document.querySelector('.comments-form-bottom').classList.toggle('form-active')
    }
  })
}
// menu


//filter
if (document.querySelector('.cansel-0')) {
  let cancel_0 = document.querySelector('.cansel-0')
  cancel_0.addEventListener('click', () => {
    let inputs = cancel_0.parentElement.nextElementSibling.querySelectorAll('.checkbox')
    // console.log(cancel_0.parentElement.nextElementSibling.querySelectorAll('.checkbox'))
    for (i = 0; i < inputs.length; i++) {
      inputs[i].checked = false
    }
  })
}

if (document.querySelector('.cansel-1')) {
  let filterWrapp = document.querySelector('.filter'),
    cancels = document.querySelectorAll('.filter .checkbox')

  filterWrapp.addEventListener('click', (event) => {

    if (event.target.classList.contains('cansel-1')) {

      cancels[0].checked = false
      cancels[1].checked = false
    } else if (event.target.classList.contains('cansel-2')) {

      cancels[2].checked = false
      cancels[3].checked = false
    }
    else if (event.target.classList.contains('cansel-3')) {

      cancels[4].checked = false
      cancels[5].checked = false
      cancels[6].checked = false
      cancels[7].checked = false
    }
    else if (event.target.classList.contains('cansel-4')) {
      cancels[8].checked = false
      cancels[9].checked = false
      cancels[10].checked = false
      cancels[11].checked = false
    }
    else if (event.target.classList.contains('cansel-5')) {
      cancels[12].checked = false
      cancels[13].checked = false
      cancels[14].checked = false
    }
  })
}

if (document.querySelector('.js-range')) {
  var $navRange = $('.js-range');

  $navRange.each(function () {
    var min = parseInt($(this).data('minValue') || 0),
      max = parseInt($(this).data('maxValue') || 1000),
      currentMin = parseInt($(this).data('currentMinValue') || 0),
      currentMax = parseInt($(this).data('currentMaxValue') || 0),
      $inputMin = $(this).find('.range-widget-min'),
      $inputMax = $(this).find('.range-widget-max'),
      $slider = $(this).find('.range-widget__slider');


    if ($inputMin.length && $inputMax.length && $slider.length) {
      var inputs = [$inputMin[0], $inputMax[0]],
        keypressSlider = $slider[0];

      noUiSlider.create(keypressSlider, {
        start: [currentMin, currentMax],
        connect: true,
        direction: 'ltr',
        range: {
          'min': min,
          'max': max
        }
      });

      keypressSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = parseInt(values[handle]);
      });
    }

  });

}

