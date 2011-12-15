var albums = [
  { Title: "Sink or Swim",
    AlbumCover: "i/albums/album-01-q90.jpg",
    ReleaseYear: "2007",
    Track: [
      "Boomboxes and Dictionaries",
      "I Coulda Been a Contender",
      "Wooderson",
      "We Came to Dance",
      "1930",
      "The Navesink Banks",
      "Red in the Morning",
      "I'da Called You Woody, Joe",
      "Angry Johnny and the Radio",
      "Drive",
      "We're Getting a Divorce, You Keep the Diner",
      "Red at Night"
    ]
  },
  { Title: "The '59 Sound",
    AlbumCover: "i/albums/album-02-q90.jpg",
    ReleaseYear: "2008",
    Track: [
      "Great Expectations",
      "The '59 Sound",
      "Old White Lincoln",
      "High Lonesome",
      "Film Noir",
      "Miles Davis & The Cool",
      "The Patient Ferris Wheel",
      "Casanova, Baby!",
      "Even Cowgirls Get the Blues",
      "Meet Me by the River's Edge",
      "Here's Looking at You, Kid",
      "The Backseat"
    ]
  },
  { Title: "American Slang",
    AlbumCover: "i/albums/album-03-q90.jpg",
    ReleaseYear: "2010",
    Track: [
      "American Slang",
      "Stay Lucky",
      "Bring It On",
      "The Diamond Church Street Choir",
      "The Queen of Lower Chelsea",
      "Orphans",
      "Boxer",
      "Old Haunts",
      "The Spirit of Jazz",
      "We Did It When We Were Young"
    ]
  },
];

$("#albumTemplate").tmpl(albums).appendTo("#spindal ul.albums");

// album navigation 
$("#spindal .prev-album, #spindal .next-album").click(function() {
  $("#spindal .album.title h2").removeClass("active").next().hide('slideUp');
  $("#spindal .accordion").accordion("activate", -1);
  $('#spindal nav.artist').removeClass('pushed-title pushed');
});

// show and hide album details
$("#spindal .album.title h2, #spindal .menu.share span.label").click(function() {
  $(this).toggleClass("active").next().slideToggle();
  $('#spindal nav.artist').toggleClass("pushed-title");
});

// expand and collapse tracks
$("#spindal .accordion").accordion({
  active: false,
  collapsible: true
});

$('#spindal .accordion').bind('accordionchangestart', function(event, ui) {
  if ($(this).children('div.title').hasClass('ui-state-active')) {
    $('#spindal nav.artist').removeClass("pushed");
  }
  else {
    $('#spindal nav.artist').addClass("pushed");
  };
});

// show and hide volume control
$("#spindal .volume.toggle").click(function() {
  $(this).toggleClass("active");
});

// hide and show the left-hand menu
$("a.spindal").click(function() {
  $("#spindal").toggleClass("active");
  $("a.spindal.show").toggleClass("active");
});

$("#spindal ul.albums").cycle({
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

// hide and show the panes
$("div.pane a.pane").click(function() {
  $(this).closest("div.pane").toggleClass("active");
});
$("#spindal a.show.lyrics").click(function() {
  $("div.spindal.pane.lyrics").toggleClass("active");
})
$("#spindal a.show.bio").click(function() {
  $("div.spindal.pane.bio").toggleClass("active");
})
$("#spindal a.show.live").click(function() {
  $("div.spindal.pane.live").toggleClass("active");
})

// page on-load animation
setTimeout(function(){
  $("#spindal").toggleClass("active");
  $("a.spindal.show").toggleClass("active");
}, 1000);
