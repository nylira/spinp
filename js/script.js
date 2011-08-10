// album navigation 
$(".prev-album, .next-album").click(function() {
  $(".album.title h2").removeClass("active").next().hide('slideUp');
  $(".accordion").accordion("activate", -1);
  $('nav.artist').removeClass('pushed-title pushed');
});

// show and hide album details
$(".album.title h2, .menu.share span.label").click(function() {
  $(this).toggleClass("active").next().slideToggle();
  $('nav.artist').toggleClass("pushed-title");
});

// expand and collapse tracks
$(".accordion").accordion({
  active: false,
  collapsible: true
});

$('.accordion').bind('accordionchangestart', function(event, ui) {
  if ($(this).children('div.title').hasClass('ui-state-active')) {
    $('nav.artist').removeClass("pushed");
  }
  else {
    $('nav.artist').addClass("pushed");
  };
});


// show and hide volume control
$(".volume.toggle").click(function() {
  $(this).toggleClass("active");
});

// hide and show the left-hand menu
$("a.spindal").click(function() {
  $("#spindal").toggleClass("active");
  $("a.spindal.show").toggleClass("active");
});

$("ul.albums").cycle({
  fx: "scrollHorz",
  prev: ".prev-album",
  next: ".next-album",
  timeout: 0,
  after: onAfter
});

// variate album height based on number of songs
function onAfter(curr, next, opts, fwd) {
 var $ht = $(this).height();
 $(this).parent().animate({height: $ht});
}

// page on-load animation
setTimeout(function(){
  $("#spindal").toggleClass("active");
  $("a.spindal.show").toggleClass("active");
}, 1000);
