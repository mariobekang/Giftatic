
 $("#add-animal").on("click", function(event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        animal.push(animal);
        renderButtons();
});


$("button").on("click", function() {
      
    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=rcF6WYFDYuwaGX9psgBs9vMgj6bAq7y8&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
     
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
      
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var animalDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var animalImage = $("<img>");

          animalImage.attr("src", results[i].images.fixed_height.url);

         
          animalDiv.append(p);
          animalDiv.append(animalImage);

         
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  });
              
              
              