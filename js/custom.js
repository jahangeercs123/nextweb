


$(document).ready(function () {

  var cursorinner = document.querySelector('.cursor');
  var a = document.querySelectorAll('a');
  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });
  $('nav ul li').on("mouseover", function () {
    $('.cursor').css({ 'transform': 'scale(1.8)' });
  });

  $('nav ul li').on("mouseleave", function () {
    $('.cursor').css({ 'transform': 'scale(1)' });
  });
  $('.global-icon').on("mouseover", function () {
    $('.cursor').css({ 'transform': 'scale(1.8)' });
  });
  $('nav ul li').on("mouseleave", function () {
    $('.cursor').css({ 'transform': 'scale(1)' });
  });
  $('.global-icon a').on("mouseover", function () {
    $('.cursor').css({ 'transform': 'scale(2)' });
  });
  $('.global-icon a').on("mouseleave", function () {
    $('.cursor').css({ 'transform': 'scale(1)' });
  });
  document.addEventListener('mouseleave', function (e) {
    console.log(e)
    $('.cursor').css('opacity', '0')
  })
  document.addEventListener('mouseenter', function (e) {
    $('.cursor').css('opacity', '1')

  }) 
  $(".draggable").draggable();
  for (var i = 0; i < 10; i++) {
    var div = '#draggable' + [i]

    $(div).each(function (i, el) {

      var tLeft = Math.floor(Math.random() * 1000),
        tTop = Math.floor(Math.random() * 800);

      $(el).css({ position: 'absolute', left: tLeft, top: tTop });

    });
    
  }
  $(function () {
    $("#draggable1").draggable();
    $("#draggable2").draggable();
    $("#draggable3").draggable();
    $("#draggable4").draggable();
    $("#draggable5").draggable();
    $("#draggable6").draggable();
    $("#draggable7").draggable();
    $("#draggable8").draggable();
    $("#draggable9").draggable();
    $("#draggable10").draggable();
  });
})
 

// $(document).ready(function () {

//   gsap.registerPlugin(ScrollTrigger);
//   gsap.from("#card1", {
//     marginTop: "0px",
//     scrollTrigger: {
//       trigger: "#card1",
//       start: "top bottom",
//       end: "top center",
//       scrub: true,  
//     }
//   });  
//   gsap.from("#card3", {
//     marginTop: "0px",
//     scrollTrigger: {
//       trigger: "#card3",
//       start: "top bottom",
//       end: "top center",
//       scrub: true, 
//     }
//   });

  
// });
// const parallax = document.getElementById("card-row");
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
// });
// export const parallax = document.getElementsByClassName("parallax");
// window.addEventListener("scroll", function(){
//   let offset = window.pageYOffset;
//   console.log("offset", offset)
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
// })
// if ($('.card-row').length) {
//   var scrollTrigger = 100, // px
//     backToTop = function() {
//       var scrollTop = $(window).scrollTop();
//       if (scrollTop > scrollTrigger) {
//         $('.card-row').addClass('show');
//       } else {
//         $('.card-row').removeClass('show');
//       }
//     };
//   backToTop();
//   $(window).on('scroll', function() {
//     backToTop();
//   });
//   $('.card-row').on('click', function(e) {
//     e.preventDefault();
//     $('html,body').animate({
//       scrollTop: 0
//     }, 700);
//   });
// }
// gsap.to("#cardu", {
//   scrollTrigger: {
//     scrub: true
//   }, 
//   y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
//   ease: "none"
// });
gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".what-we-do"); 

  // Give the backgrounds some random images
  // section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
  
  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true // to make it responsive
    }
  });

});





