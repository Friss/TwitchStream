$.getJSON( "https://api.twitch.tv/kraken/streams/twitchusername?callback=?", function(response) {
  if (response.stream){
    $('.viewers span').text(response.stream.viewers);
    $('.followers span').text(response.stream.channel.followers);
    $('.intro iframe').removeClass("hidden");
    $('.intro-text').addClass('hidden');
  }else{
    $('.viewers span').text("0");
    $('.followers span').text("0");
  }
});
