// document ready
$(function() {
  $header = $('[data-header]');
  $navToggle = $('[data-menu-toggle]');
  $body = $('body');

  var scrollThreshold = 100;
  var lastScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    if(currentScroll !== lastScroll){
      if(currentScroll > scrollThreshold) {
        $header.toggleClass('short', true);
      } else if (currentScroll < scrollThreshold && lastScroll >= scrollThreshold) {
        $header.toggleClass('short', false);
      }
      lastScroll = currentScroll;
    }
  });

  $navToggle.click(function(){
    $body.toggleClass('nh-menu-active');
  })

});
