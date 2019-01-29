var apiKey = "&api_key=dc6zaTOxFJmzC";


function createTopics() {
    var topic = ["riverdale", "archie", "betty", "veronica", "jughead"];
    for (var i = 0; i < topic.length; i++) {
        var topicButton = $("<button>");
        topicButton.addClass("topic-button");
        topicButton.attr("data-topic", topic[i]);
        topicButton.text(topic[i]);
        $('#button-space').append(topicButton);
    }
}
createTopics();
$(".topic-button").on("click", function () {
    var userSearch = $("input").val();
    $("#displayGiphs").empty();
    var buttonText = $(this).text();
    console.log(buttonText);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonText + '?Riverdale' + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 26; i++) {
            var pic = response.data[i].images.fixed_width.url;
            var $i = $("<img>");
            var contentImage = $i.attr("src", pic);
            $("#displayGiphs").append(contentImage);
        }
    });
});


$("#search-button").on("click", function () {
    var userSearch = $("input").val();
    $("#displayGiphs").empty();
    console.log(userSearch);
    queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 26; i++) {
            var pic = response.data[i].images.fixed_width.url;
            var $i = $("<img>");
            var contentImage = $i.attr("src", pic);
            $("#displayGiphs").append(contentImage);
        }
    });
});