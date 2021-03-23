$(function(){
loadRecipies();
});

function  loadRecipies(){
    $.ajax({
        URL:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success: function(response){
            console.log(response);
            var recipes = $("#recipes");
            recipes.empty();


        }
    })
}