$(document).ready(function () {
//     var title1 = document.querySelector(".nature-title")
// var overlay1 = document.querySelector(".nature-text")
// var title2 = document.querySelector(".play-title")
// var overlay2 = document.querySelector(".play-text")

// var opacity = $(".overlay")[0].style.opacity
// console.log(opacity)

// function appear(){

//             $(".nature-text").attr("style", "opacity: 1")
            
// }

// $(".nature-text").on("click", function() {

//  appear()})

// else {
//     $(".nature-text").attr("style", "opacity: 0")
//     }
// // 

// var title = $(".philcard-title")
// var overlay = $(".overlay")

// function appearNature() {
//     $(".nature-title").on("click", function() {
//     $(".nature-text").attr("style", "opacity: 1")

// disappearNature()
// })
// }
// function disappearNature() {
//     $(".nature-title").on("click", function() {
//     $(".nature-text").attr("style", "opacity: 0")

// appearNature()
// })
// }
// appearNature()

// function appearPlay() {
//     $(".play-title").on("click", function() {
//     $(".play-text").attr("style", "opacity: 1")

// disappearPlay()
// })
// }
// function disappearPlay() {
//     $(".play-title").on("click", function() {
//     $(".play-text").attr("style", "opacity: 0")

// appearPlay()
// })
// }
// appearPlay()


var text = new Swiper('.acc-text', {
    slidesPerView: 'auto',
    // autoHeight: true,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    mousewheel: true,
    // {
    //     forceToAxis: true,
    
    //   },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      slideShadow: true
  })

//   var swiper = new Swiper('.acc-text', {
//     effect: 'coverflow',
//     centeredSlides: true,
//     mousewheel: {
//       forceToAxis: true,
  
//     },
//     keyboard: {
//       enabled: true,
//     },
//     slidesPerView: 'auto',
//     loop: true,
//     coverflowEffect: {
//       rotate: 40,
//       stretch: -140,
//       depth: 500,
//       modifier: 1,
  
//       slideShadows: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//        // Navigation arrows
//        navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       controller: {
//         by: 'slide',
//         // control: text,
//         inverse: false,
//       },
//       // thumbs: {
//       //   swiper: text,
//       //   autoScrollOffset: 1,
//       // }
//       // thumbs: {
//       //   swiper: galleryThumbs,
//       // },
  
//   });
  



})

