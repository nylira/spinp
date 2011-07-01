$(".prev-album, .next-album").click(function() {
  $(".album.title h2").removeClass("active").next().hide('slideUp');
  $(".accordion").accordion("activate", -1);
});

$(".album.title h2, .menu.share span.label").click(function() {
  $(this).toggleClass("active").next().slideToggle();
});

$(".accordion").accordion({
  active: false,
  collapsible: true
});


$(".volume.toggle").click(function() {
  $(this).toggleClass("active");
});

$("a.hide.menu").click(function() {
  $("#spindal").hide('slide', { direction: 'left'});
  $("a.show.menu").show('slide', { direction: 'left'});
});

$("a.show.menu").click(function() {
  $("#spindal").show('slide', { direction: 'left'});
  $("a.show.menu").hide('slide', { direction: 'left'});
});

$("ul.albums").cycle({
  fx: "scrollHorz",
  prev: ".prev-album",
  next: ".next-album",
  timeout: 0,
});

