let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
    
}
var swiper = new Swiper(".home-slider", {
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  var swiper = new Swiper(".home-slider",{
    spaceBetween: 20,
    centeredSlider: true,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0:{
            sliderPerview:1,
        },
        640:{
            sliderPerview:2
        },
       768:{
         sliderPerview:3
       },
       1024:{
        sliderPerview:4
       },
    },
      });




  var swiper = new Swiper(".review-slider",{
spaceBetween: 20,
centeredSlider: true,
autoplay: {
    delay:7500,
    disableOnInteraction: false,
},
loop:true,
breakpoints:{
    0:{
        sliderPerview:1,
    },
    640:{
        sliderPerview:2
    },
   768:{
     sliderPerview:3
   },
   1024:{
    sliderPerview:4
   },
},
  });