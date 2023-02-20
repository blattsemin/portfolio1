
// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    rtl: true
  });
});

window.addEventListener('load', function(event){
  AOS.init();
});