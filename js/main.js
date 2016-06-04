$.getJSON( "https://api.twitch.tv/kraken/streams/twitchusername?callback=?", function(response) {
  if (response.stream){
    $('.viewers span').text(response.stream.viewers);
    $('.intro iframe').removeClass("hidden");
    $('.intro-text').addClass('hidden');
  }else{
    $('.viewers span').text("0");
  }
});

$.getJSON( "https://api.twitch.tv/kraken/channels/twitchusername/follows?callback=?", function(response) {
  $('.followers span').text(response["_total"]);
});
