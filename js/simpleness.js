$(function(){

  // For Demo purposes only (show hover effect on mobile devices)
  [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
    el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
  } );
  //  scroll animated with wow.js
  //  settings div wow
  wow = new WOW(
    {
      animateClass: 'animated fadeInUp',
      offset:       50,
      mobile:       true,  // false
      callback: function(box){ }
    }
  );
  //  Go! div wow
  wow.init();

});
