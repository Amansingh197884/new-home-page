new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
     0: {
     slidesPerView: 1
    },
    768: {
        slidesPerView: 2
       },
       1024: {
        slidesPerView: 3
       },
    }
  });

  


alert("Welcome to this Webpage")



  