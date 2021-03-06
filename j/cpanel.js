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
  

/* logout functions */
$('#logout').click(function() {
  $('.popup.logout').showPop();
});
$('.popup.logout a.yes').click(function(){
  $('.popup.logout').showPop();
  $('#cpanel').fadeOut().delay(1000).fadeIn();
});

/* minimize button */
$('#cpanel-tabs li.minimize').click(function() {
  $('.panel').slideToggle();
  $(this).toggleClass('minimized');
});

/* bxslider album nav */
$(function(){
  var slider = $('#cpanel ul.albums').bxSlider({
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
$('a.exit, a.cancel, a.ok').click(function() {
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
$('#songs td.status a.delete').click(function() {
  $('.popup.delete-song').showPop();
});
$('a.change.account.info').click(function() {
  $('.popup.account-info').showPop();
});
$('a.change.billing.info').click(function() {
  $('.popup.billing-info').showPop();
});
$('a.security-code').click(function() {
  $('.popup.security-code').showPop();
});
$('a#change-plan').click(function() {
  $('.popup.plan').showPop();
});

/* popups - profile */
$('a.create.band-logo').click(function() {
  $('.popup.band-logo').showPop();
});
$('a.edit.bio').click(function() {
  $('.popup.bio').showPop();
  $('.popup.bio .textarea-scroll').jScrollPane();
});
$('a.edit.live').click(function() {
  $('.popup.live').showPop();
  $('.popup.live #events').jScrollPane();
});
$('#events td.status a.delete').click(function() {
  $('.popup.delete-event').showPop();
});
$('a.edit.news').click(function() {
  $('.popup.news').showPop();
});
$('a.edit.facebook').click(function() {
  $('.popup.facebook').showPop();
});
$('a.edit.twitter').click(function() {
  $('.popup.twitter').showPop();
});
$('a.edit.store').click(function() {
  $('.popup.store').showPop();
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
$("select")
  .selectBox()
  .change(function() {
    if($(this).val() === "custom") {
      $('.popup.custom-price').showPop();
    }
  });

/* select box watching */
$('.selector .selector-arrow').click(function(){
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
$(".popup.textarea textarea")
  .autoResize({
    animateCallback : function() {
      $(this).closest('.textarea-scroll').jScrollPane();
    }
  })
  .focus(function(event) {
    // Erase text from inside textarea
    $(this).text("");
    // Disable text erase
    $(this).unbind(event);
  });

/* select a spindal plan */
$('ul.plans li.plan').click(function() {
  $(this).siblings().removeClass('active');
  $(this).toggleClass('active');
});

/* #cpanel effects */
$('#cpanel')
  .tabs({
    selected: 1,
    fx: {height: 'toggle', opacity:'toggle', duration:'normal'}
  })
  .draggable({
    handle: '#top-bar',
    containment: 'window'
  })
  .vAlign();
