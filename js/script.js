$("ul.albums").cycle({
  fx: "scrollHorz",
  prev: ".prev-album",
  next: ".next-album",
  timeout: 0
});

$("section.album.title").click(function() {
  $(this).toggleClass("active");
});

$("dl.tracks").accordion({
  //active: false,
  collapsible: true
});

$("menu.share span.label").click(function() {
  $(this).toggleClass("active");
  $(this).next().toggle();
});

$("a.hide.menu").click(function() {
  $("#spindal").hide('slide', { direction: 'left'});
  $("a.show.menu").show('slide', { direction: 'left'});
});

$("a.show.menu").click(function() {
  $("#spindal").show('slide', { direction: 'left'});
  $("a.show.menu").hide('slide', { direction: 'left'});
});
