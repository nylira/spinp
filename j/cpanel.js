/* vertical alignment */
(function ($) {
$.fn.vAlign = function() {
  return this.each(function(i){
  var ah = $(this).height();
  var ph = $(window).height();
  var mh = Math.ceil((ph-ah) / 2);
  $(this).css('top', mh);
  });
};
})(jQuery);

/* show popup function */
(function ($) {
  $.fn.showPop = function() {
  $(this).toggleClass('visible').vAlign();
  };
})(jQuery);
  
$(function() {})

/* draggable header */
$('#cpanel')
  .draggable({
    handle: '#top-bar',
    containment: 'window'
  })
  .vAlign();

/* logout functions */
$('#logout').click(function() {
  $('.popup.logout').showPop();
});
$('.popup.logout a.yes').click(function(){
  $('.popup.logout').showPop();
  $('#cpanel').fadeOut().delay(1000).fadeIn();
});

/* minimize button */
$('a.minimize').click(function() {
  $('#panel-content').slideToggle();
  $(this).toggleClass('minimized');
});

/* bxslider album nav */
$(function(){
  var slider = $('ul.albums').bxSlider({
    controls: false,
    displaySlideQty: 3,
    moveSlideQty: 1
  });
  $('.prev-set').click(function(){
    slider.goToPreviousSlide();
    return false;
  });
  $('.next-set').click(function(){
    slider.goToNextSlide();
    return false;
  });
}); 

/* popups options */
$('a.exit, a.cancel').click(function() {
  $(this).closest('.popup').showPop();
});
$('#albums div.active').dblclick(function() {
  $('.popup.album-settings').showPop();
});
$('li.album span.settings').click(function() {
  $('.popup.album-settings').showPop();
});
$('.popup.album-settings a.delete').click(function() {
  $('.popup.delete-album').showPop();
})
$('td.lyrics a.add').click(function() {
  $('.popup.lyrics').showPop();
});
$('td.status a.delete').click(function() {
  $('.popup.delete-song').showPop();
});

/* custom scrollbar */
$(function() {
  $('#songs').jScrollPane();
});

/* lights! */
$(function() {
  $('.light').click(function(){
    $(this).toggleClass('disabled');
    $(this).parent('li.row').toggleClass('disabled');
  });
  $('.light').hover(function(){
    $(this).parent('li.row').toggleClass('hover');
  });
});

/* custom selectbox */
$("select").selectBox();

$('td.download select').change(function() {
  if($(this).val() === "custom") {
    $('.popup.custom-price').showPop();
  }
});

/* select box watching */
$('td.fullscreen .selector .selector-arrow').click(function(){
  $(this).parent().toggleClass('active');
});
$('.selector-dropdown a.slideshow').click(function(){
  $(this).closest('.selector-dropdown').removeClass('active');
  $('.popup.slideshow').showPop();
  $('.popup.slideshow .content').jScrollPane();
  $('.popup.slideshow ul.images').sortable().disableSelection();
});
$('.selector-dropdown a.video').click(function(){
  $(this).closest('.selector-dropdown').removeClass('active');
  $('.popup.video').showPop();
});
