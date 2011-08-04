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

$("a.spindal").click(function() {
  $("#spindal").toggleClass("active");
  $("a.spindal.show").toggleClass("active");
});

$("ul.albums").cycle({
  fx: "scrollHorz",
  prev: ".prev-album",
  next: ".next-album",
  timeout: 0,
});

setTimeout(function(){
  $("#spindal").toggleClass("active");
  $("a.spindal.show").toggleClass("active");
}, 1000);
