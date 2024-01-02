
$(document).ready(function () {
    $("#search").on("click", function () {
        $.ajax({
            type: "GET",
            url: "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=" + $("#sear").val(),
        }).done(result => {
        
            $.ajax({
                type: "GET",
                url: "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + result.objectIDs[0],
            }).done(result2 => {
            
                $("#met1").append("<img id='result' src='" + result2.primaryImage + "'></img>");
                $("#met2").append("<p id='tex'>Artist name: " + result2.artistDisplayName + "</p>");
                $("#met2").append("<p id='tex'>Title: " + result2.title + "</p>");
                $("#met2").append("<p id='tex'> -------------------- </p>");

                console.log('result2 :>> ', result2);

            });
        });
    });
});