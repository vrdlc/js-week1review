var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#gitHubUserName").click(function() {
    var userName = $("#inputUserName").val();
    $.get(apiKey + "users/" + userName).then(function(response) {
      console.log(response);
      $('#showUserName').text(response.login);


    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  });


  $("#gitHubUserName").click(function() {
    var userName = $("#inputUserName").val();
    $.get(apiKey + "users/" + userName + "/repos").then(function(response) {
      console.log(response);
       for(var i = 0; i < response.length; i++)
       $("#showRepos").append("<li>" + response[i].full_name + "</li>");


    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  });



// $("#gitHubUserName").click(function() { //CAN'T MAKE EMOJIS WORK
//   var userName = $("#inputUserName").val();
//   $.get(apiKey + "emojis").then(function(response) {
//     console.log(response);
//      $("#showEmojis").append(response.100);
//
//
//   }).fail(function(error) {
//     console.log(error.responseJSON.message);
//   });
// });

}); //DOCUMENT READY
