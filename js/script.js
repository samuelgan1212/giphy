// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    $('.gallery').empty();
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
    url:url,
        method: "GET",
        success: function(response) {
            $(".gallery").append(
                "<a href =" + response.data[ Math.floor(Math.random() * response.data.length)].images.fixed_width.url+"><img src='" + response.data[Math.floor(Math.random() * response.data.length)].images.fixed_width.url + "'></a>"
                );
            }
    
    });
  
});
$("#search-button1").click(function(){
    $('.gallery').empty();
    var url = "https://api.giphy.com/v1/gifs/search?q=random&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
    url:url,
        method: "GET",
        success: function(response) {
            $(".gallery").append(
                "<a href =" + response.data[ Math.floor(Math.random() * response.data.length)].images.fixed_width.url+"><img src='" + response.data[Math.floor(Math.random() * response.data.length)].images.fixed_width.url + "'></a>"
                );
            }
    
    });
  
});


$("#Search-buttonallimage").click(function(){
    $('.gallery').empty();
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
    url:url,
        method: "GET",
        success: function(response) {
            var array=response["data"];
            var newHTML=[];
            for (var i = 0; i < array.length; i++) {
    newHTML.push("<a href =" +response.data[ Math.floor(Math.random() * response.data.length)].images.fixed_width.url+"><img src='" + response.data[ Math.floor(Math.random() * response.data.length)].images.fixed_width.url + "'></a>");
}
            $(".gallery").html(
                newHTML.join("")
                );
            }
    
    });
  
});



  $('#emailLink').on('click', function (event) {
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
    url:url,
        method: "GET",
        success: function(response) {
     event.preventDefault();
    alert("Warning!!! Switch TO Gmail!!!!");
    var email = 'TARGET@theearth.com';
    var subject = 'GIF THAT YOU WILL LIKE!!!!';
    var emailBody =  response.data[Math.floor(Math.random() * response.data.length)].images.fixed_width.url;
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        }
    
    }); 
  });

