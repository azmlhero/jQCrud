$(function(){
loadRecipies();
$("#recipes").on("click",".btn-danger",handleDelete);
});


function handleDelete(){
    var btn= $(this);
    var parentDiv =btn.closest(".recipe");
    let id =parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes/"+id,
         method:"DELETE",
        error: function(response){
            var recipes = $("#recipes");
            recipes.append("Error has occured");
        },
        success: function(){
            loadRecipies(); 

        }
    })
    console.log("handle DELETE");
}

function  loadRecipies(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success: function(response){
            console.log(response);
            var recipes = $("#recipes");
            recipes.empty();
            for(var i=0; i< response.length ;i++)
            {

                var rec = response[i]; 

                $("#recipes").append(`
                
                <div class ="recipe" data-id="${rec._id}"> <h3>${rec.title}</h3> <p><button class="btn btn-danger btn-sm float-right">DELETE</button><button class="btn btn-warning btn-sm float-right">Edit</button>${rec.body}</p></div>
                `);

                // $("#recipes").append("<div><h3>"+rec.title+"</h3></div>");


            }
            

        }
    })
}