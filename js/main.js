 $(document).ready(function() {
     $(".menu-icon").on("click", function() {
         $("nav ul").toggleClass("showing");
     });
 });


 // Scrolling Effect
 $(window).on("scroll", function() {
     if ($(window).scrollTop()) {
         $('nav').addClass('black');
     } else {
         $('nav').removeClass('black');
     }
 });

 // nav bar boostrap index.html
 let topHeight = $('.top-content').height();
 $(window).on("scroll", () => {
     if ($(window).scrollTop() > topHeight) {
         $('.navbar').addClass('fixed-top');
     } else {
         $('.navbar').removeClass('fixed-top');
     }
 });

 // Zone d'activité Toggle bloc 
 $(document).ready(function() {
     $("#zone-activity-title").on("click", function() {
         $("#zone-activity-title-hiden").slideToggle();
     });
 });