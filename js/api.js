var apiKey = require('./../.env').apiKey;

exports.getUserName = function() {
  var userName = $("#inputUserName").val();
  $.get("https://api.github.com/users/" + userName + "?access_token=" + apiKey).then(function(response) {
    console.log(response);
    $("#showUserName").text(response.login);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
