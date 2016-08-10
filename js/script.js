$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var birthdayInput = $("input#birthday").val();
    var locationInput = $("input#location").val();
    var foodInput = $("input#food").val();
    var musicInput = $("#music").val();
    var colorInput= $("#color").val();

    $(".responses").append("<div class=row>");
    $(".responses").append("<div class=\"col-md-2 offset-2\">" + nameInput + "</div>");
    $(".responses").append("<div class=\"col-md-2\">" + birthdayInput + "</div>");
    $(".responses").append("<div class=\"col-md-2\">" + locationInput + "</div>");
    $(".responses").append("<div class=\"col-md-2\">" + foodInput + "</div>");
    $(".responses").append("<div class=\"col-md-2\">" + musicInput + "</div>");
    $(".responses").append("<div class=\"col-md-2\">" + colorInput + "</div>");
    $(".responses").append("</div>");
    $(".responses").show();
  });
});
