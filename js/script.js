$(".prev-album").click(function() {
  $("section.album.title h2").removeClass("active").next().hide();
  $(".ui-accordion-header").removeClass("ui-state-active").addClass("ui-state-default");
  $(".ui-accordion-content").removeClass("ui-accordion-content-active").hide();
});
$(".next-album").click(function() {
  $("section.album.title h2").removeClass("active").next().hide();
  $(".ui-accordion-header").removeClass("ui-state-active");
  $(".ui-accordion-content").removeClass("ui-accordion-content-active").hide();
});

$("section.album.title h2").click(function() {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
});

$("dl.tracks").accordion({
  active: false,
  collapsible: true
});

$(".volume.toggle").click(function() {
  $(this).toggleClass("active");
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

$("ul.albums").cycle({
  fx: "scrollHorz",
  prev: ".prev-album",
  next: ".next-album",
  timeout: 0,
});

