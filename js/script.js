$("dl.tracks").accordion({
  //active: false,
  collapsible: true
});

$("li.share a").click(function() {
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
