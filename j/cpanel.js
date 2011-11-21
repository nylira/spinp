/* draggable header */
$('#cpanel').draggable({
  handle: '#top-bar',
  containment: 'window'
});

/* logout functions */
$('#logout').click(function() {
  $('.popup.logout').toggleClass('visible');
});
$('.popup.logout a.yes').click(function(){
  $('.popup.logout').toggleClass('visible');
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
  $(this).closest('.popup').toggleClass('visible');
});
$('#albums div.active').dblclick(function() {
  $('.popup.album-settings').toggleClass('visible');
});
$('li.album span.settings').click(function() {
  $('.popup.album-settings').toggleClass('visible');
});
$('.popup.album-settings a.delete').click(function() {
  $('.popup.delete-album').toggleClass('visible');
})
$('td.lyrics a.add').click(function() {
  $('.popup.lyrics').toggleClass('visible');
});
$('td.status a.delete').click(function() {
  $('.popup.delete-song').toggleClass('visible');
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
    $('.popup.custom-price').toggleClass('visible');
  }
});

/* select box watching */
$('td.fullscreen .selector .selector-arrow').click(function(){
  $(this).parent().toggleClass('active');
});
$('.selector-dropdown a.slideshow').click(function(){
  $(this).closest('.selector-dropdown').removeClass('active');
  $('.popup.slideshow').toggleClass('visible').children('.content').jScrollPane();
  $('ul.images').sortable().disableSelection();
});
$('.selector-dropdown a.video').click(function(){
  $(this).closest('.selector-dropdown').removeClass('active');
  $('.popup.video').toggleClass('visible');
});


