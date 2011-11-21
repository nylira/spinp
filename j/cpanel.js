var songs = [
  { index: "1", title: "Boomboxes and Dictionaries" },
  { index: "2", title: "I Coulda Been a Contender" },
  { index: "3", title: "Wooderson" },
  { index: "4", title: "We Came to Dance" },
  { index: "5", title: "1930" },
  { index: "6", title: "The Navesink Banks" },
  { index: "7", title: "Red in the Morning" },
  { index: "8", title: "I'da Called You Woody, Joe" },
  { index: "9", title: "Angry Johnny and the Radio" },
  { index: "10", title: "Drive" },
  { index: "11", title: "We're Getting a Divorce, You Keep the Diner" },
  { index: "12", title: "Red at Night" }
];
$("#songTemplate").tmpl(songs).appendTo("#songs table");

/* vertical alignment */
(function ($) {
$.fn.vAlign = function() {
  return this.each(function(i){
  var box = $(this).height();
  var viewport = $(window).height();
  var offset = Math.ceil((viewport - box) / 2);
  $(this).css('top', offset);
  });
};
})(jQuery);

/* show popup function */
(function ($) {
  $.fn.showPop = function() {
    $(this).toggleClass('visible');
    if ($(this).hasClass("visible")) {
      $(this).vAlign();
      $('body').append('<div class="lightbox-screen" />');
    } else {
      $('.lightbox-screen').remove();
    };
  };
})(jQuery);
  
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
  $('.popup.lyrics .textarea-scroll').jScrollPane();
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

$('select').change(function() {
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
  $('.popup.video .textarea-scroll').jScrollPane();
});

/* textarea blur */
$("textarea").focus(function(event) {
  // Erase text from inside textarea
  $(this).text("");
  // Disable text erase
  $(this).unbind(event);
});

$('.popup.textarea textarea').autoResize({
  animateCallback : function() {
    $(this).closest('.textarea-scroll').jScrollPane();
  }
});

