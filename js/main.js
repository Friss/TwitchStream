var clientId = "a7aag1oiocd1vxl0h9jvd2sahmaq5j0";

$.getJSON( "https://api.twitch.tv/kraken/streams/moonmoon_ow?client_id="+ clientId + "callback=?", function(response) {
  if (response.stream){
    $('.viewers span').text(response.stream.viewers);
    $('.intro iframe').removeClass("hidden");
    $('.intro-text').addClass('hidden');
  }else{
    $('.viewers span').text("0");
  }
});

$.getJSON( "https://api.twitch.tv/kraken/channels/moonmoon_ow/follows?client_id="+ clientId + "callback=?", function(response) {
  $('.followers span').text(response["_total"]);
});
