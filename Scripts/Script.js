// Task 1: When the page loads, display a popup alert to welcome the user to the amusement park website
alert("Welcome to the amusement park website");

//Task 2: When the user clicks on any ride card, display the background colour of that specific card in an alert. 
$(".ride-card").click(function(){
    let color = $(this).css("background-color");
    alert("Background color: " + color);
});

// Task 3: Show/Hide the Rides section when the 'Toggle Rides' button is clicked
$("#toggleRides").click(function(){
    $("#rides").toggle("slow");
});

//Task 4: When the user double clicks on any game in the list, add another game to the list, with the same formatting. 
$(".game").dblclick(function () {
    let newGame = $("<li class='game'>Swing</li>");

    newGame.css({
        "list-style": "none",
        "padding": "10px",
        "background": "#caffbf",
        "margin": "5px",
        "display": "inline-block",
        "border-radius": "5px"});

    $(this).after(newGame);
});

// Task 5: When the 'Highlight Attractions' button is clicked, apply or remove the following formatting to all the ride cards
// formatting: 3px solid #ff6f61 border all around. 
//Each click should toggle the formatting on and off 
$("#highlight").click(function(){
    $(".ride-card").each(function(){
        if($(this).css("border-style") === "solid"){
            $(this).css({"border": "none"});
        }
        else{
            $(this).css({"border": "3px solid #ff6f61"});
        }
    })
});

//Task 6: The 'Fade Out Page' button should make the entire page fade out and then fade back in automatically
$("#fadeOut").click(function(){
    $("body").fadeOut(2000).fadeIn(2000);
});


//Task 7: When a user clicks on any ride card, apply a short animation effect to that specific card. 
$(".ride-card").click(function(){
    $(this)
        .animate({ marginTop: "-10px" }, 150)
        .animate({ marginTop: "0px" }, 150);
});


//Task 8: When the user hovers over a ride card, temporarily change its background colour. When the mouse leaves, return it to the original colour
$(".ride-card").hover(
    function(){
        $(this).css({"background-color": "#ff9f1c"});
    },

    function(){
        $(this).css({"background-color": ""});
    }
);

//Task 9: Clicking the 'BUY Tickets' heading, should replace the heading text with a new message e.g. "Tickets sold out!"
$("#tickets h2").click(function(){
    $(this).text("Tickets sold out!");
});

//Task 10: When the page loads, change the font type and size of all paragraph elements using jQuery. Do not use an ID or class to select the elements.
$("p").css({"font-family": "Arial, Helvetica, sans-serif", "font-size": "15px"});

//Task 11: Create your own new function + add a description of what the function does here
$(".ride-card").click(function(){
    $(this).find("h3").text(function(index, currentText){
        return currentText + " (favorite!)";
    });
}); //This function allows the user to mark a ride as a favorite by clicking on a ride card

//Task 12: Create your own new function + add a description of what the function does here
$("#ticketType, #quantity").change(function(){
    $("#total").text("");
}); //This function clears the total price whenever the user changes ticket type or quantity, ensuring the total updates only after recalculation.

//Challenge 1: Write a function that adds logical and appropriate functionality to the 'Shuffle Games' button
$("#shuffleGames").click(function(){
    let games = $(".game").toArray();

    for (let i = games.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [games[i], games[j]] = [games[j], games[i]];
    }

    $(".game").remove();
    $("#games ul").append(games);
});

//Challenge 2: Write a function that adds logical and appropriate functionality to the 'Calculate Total' button
$("#calculate").click(function(){
    let ticketType = parseInt(document.getElementById("ticketType").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    let total = ticketType * quantity;
    
    $("#total").text("Total: R" + total);
});