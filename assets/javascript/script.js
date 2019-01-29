   // Example queryURL for Giphy API

   function createTopics() {
       var topic = ["riverdale", "archie", "betty", "veronica", "jughead"];
       
    
       
       function myFunction(){


       }
       topic.forEach(element => {
        $b = $('<button>').attr()
       });

   }

   $("#search-button").on("click", function () {
       var apiKey = "&api_key=dc6zaTOxFJmzC";

       var userSearch = $("input").val();
       $("#displayGiphs").empty();

       // userSearch = userSearch.split(" ");
       console.log(userSearch);



       queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + apiKey;

       $.ajax({
           url: queryURL,
           method: "GET"
       }).then(function (response) {

           //  add 25 images based on search
           for (var i = 0; i < 26; i++) {
               var pic = response.data[i].images.fixed_width.url;
               var $i = $("<img>");
               var contentImage = $i.attr("src", pic);
               $("#displayGiphs").append(contentImage);
           }


            // freeze giph
        //    $("#displayGiphs").on("click", function () {
        //        console.log("click");
        //        pic = response.data[0].images.fixed_width_still.url;
        //        console.log(pic);
        //        contentImage = $("<img>").attr("src", pic);
        //        $("#displayGiphs").empty(contentImage);
        //        $("#displayGiphs").append(contentImage);
        //    })


       });



   });



   //    $(".topics").on("click", function () {
   //        $("#displayGiphs").empty();

   //        var apiKey = "&api_key=dc6zaTOxFJmzC";
   //        var userSearch = $(this).attr("data-person");
   //        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + apiKey;

   //        $.ajax({
   //            url: queryURL,
   //            method: "GET"
   //        }).then(function (response) {

   //            //  add 25 images based on search
   //            for (var i = 0; i < 26; i++) {
   //                var pic = response.data[i].images.fixed_width.url;
   //                var contentImage = $("<img>").attr("src", pic);
   //                $("#displayGiphs").append(contentImage);
   //            }



   //        });
   //    });