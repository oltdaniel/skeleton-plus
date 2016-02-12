/*
* Skeleton Plus V1.0.0
* Created 2016, Daniel Oltmanns
* www.skeletonplus.github.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 02/12/2016
*/
$(document).ready(function () {
  if($(window).width() <= 550) {
    $('.navbar').hide();
  } else {
    $('.navbar').show();
  }
  $(window).resize(function () {
    if($(window).width() <= 550) {
      $('.navbar').hide();
    } else {
      $('.navbar').show();
    }
  });
  $('.drop-content').hide();
  $('.mobile-nav-button').click(function () {
    $('.navbar').toggle();
  });
  $('nav li:has(ul)').click(
    function () {
      if(!$('ul', this).is(':visible')) {
        $('ul', this).stop().slideDown(100);
      } else {
        $('ul', this).stop().slideUp(100);
      }
    }
  );
  $('body .row').click(function () {
    $('nav li:has(ul) ul').stop().slideUp(100);
  });
});