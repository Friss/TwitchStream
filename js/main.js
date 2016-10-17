// Change this to be your own clientId from https://www.twitch.tv/kraken/oauth2/clients/new
var clientId = "a7aag1oiocd1vxl0h9jvd2sahmaq5j0";

$.getJSON( "https://api.twitch.tv/kraken/streams/twitchusername?client_id="+ clientId + "callback=?", function(response) {
  if (response.stream){
    $('.viewers span').text(response.stream.viewers);
    $('.intro iframe').removeClass("hidden");
    $('.intro-text').addClass('hidden');
  }else{
    $('.viewers span').text("0");
  }
});

$.getJSON( "https://api.twitch.tv/kraken/channels/twitchusername/follows?client_id="+ clientId + "callback=?", function(response) {
  $('.followers span').text(response["_total"]);
});
