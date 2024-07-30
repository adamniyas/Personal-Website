const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
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
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  $("#submit-forms").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzr-ITEwRrvi5X9majKQX3RdHNhtKHJw3pLs8v_eyQJUnaJfFAzpDiroddinPoBQW0mXg/exec",
        data:$("#submit-forms").serialize(),
        method:"post",
        success:function (response){
          alert("Thanks for contacting me! I'll get back to you soon.");
            $("#submit-forms")[0].reset();
        },
        error:function (err){
            alert("Something Error")

        }
    })
})