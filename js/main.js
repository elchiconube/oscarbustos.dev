$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  })

  var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {      
      $('.navigation').toggleClass('fixed')
    }
  })

  // iPhone X Animation

  var topElements = new TimelineMax({
    delay: .3,
    yoyo: true,
    repeat: -1
  });
  
  topElements.staggerFrom('.phFrame', .5, {
      opacity: 0,
      y: -33
    }, .24)
    .staggerFrom('.phScreen', .5, {
      opacity: 0
    }, .1)
    .staggerFrom('.top__elements', .5, {
      opacity: 0,
      x: 20,
      y: 13
    }, .1)
    .to({}, 2, {});
  
  var counter = 1;
  
  function looper() {
    if (counter == 2) {
      counter = -1;
    }
    counter += 1;
  }
  
  TweenMax.from('.h-3', 2, {
    y: 20,
    opacity: 0,
    ease: Power4.easeOut
  }, .2);
  
  var aCounter = 1;
  
  var displayAnim = new TimelineMax({
    delay: .1,
    repeat: -1
  });
  
  displayAnim.eventCallback("onRepeat", looper, ["aCounter"]);
  
  displayAnim.staggerFromTo('.h-3', 1, {
      y: 200,
      ease: Power4.easeOut
    }, {
      y: 0
    }, .2)
  
    .to({}, 2, {})
    .staggerTo('.h-3', 1.2, {
      y: -60,
      opacity: 0,
      ease: Power4.easeIn
    }, .2, "-=1.2");
});