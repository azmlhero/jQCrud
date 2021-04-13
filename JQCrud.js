$(function(){
loadProducts();
$("#products").on("click",".btn-danger",handleDelete);
$("#btn").click(addProduct);
$("#products").on("click",".btn-warning",handleUpdate);

$("#save").click(function(){
   var name = $("#Name").val();
   var price = $("#Price").val();
   var color = $("#Color").val();
   var department = $("#Department").val();
   var description =$("#Description").val();


    $.ajax({
    
        url:"https://usman-recipes.herokuapp.com/api/products/" +id,
        
        // data:{title,body},
        // method:"PUT",
        //  12;38 13/4 ko change kia glti method yad nahi raha change karna 
        method:"POST",
        data:{name,price,color,department,description},
        
        success:function(response){
            console.log(response);
            loadProducts(); 



            
        
            $("#addModal").modal("hide");

        }
    })
})

$("#updateSave").click(function(){
    var id =$("#updateId").val();
    var name = $("#updateName").val();
    var price = $("#updatePrice").val();
    var color= $("#updateColor").val();
    var department = $("#updateDepartment").val();
    var description = $("#updateDepartment").val();
    
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/products/" +id,
         
        data:{ name, price,color,department, description} ,
        method:"PUT",
        success: function(){
            loadProducts();
            $("#updateModal").modal("hide");
        }
    });
});


});










function handleUpdate(){
    var btn= $(this);
    var parent = btn.closest(".product");
    let id = parent.attr("data-id");
    $.get("https://usman-recipes.herokuapp.com/api/products/"+id,
    function(response){
        $("#updateId").val(response._id);
        
        $("#updateName").val(response.name);

        $("#updatePrice").val(response.price);
 
        
        $("#updateColor").val(response.color);
        $("#updateDepartment").val(response.department);
        
        $("#updateDescription").val(response.description);
        $("#updateModal").modal("show");


        

    } );
    
}
function addProduct(){
      var name = $("#Name").val();
   var price = $("#Price").val();
   var color = $("#Color").val();
   var department = $("#Department").val();
   var description =$("#Description").val();

    
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/products/",
        method:"POST",
        data:{name,price,color,department,description},
        success: function(response){
            console.log(response);
            // icko jb say set kia add nai ho raha bs console ya network pay hota hay list may nai ho raha hay update ka b masla hay
            
             $("#Name").val("");
            $("#Price").val("");
             $("#Color").val("");
             $("#Department").val("");
            $("#Description").val("");
         
            // $("#title").val("");
            // $("#body").val("");
        
            loadProducts();
            $("#addModal").modal("hide");
        }
  
function handleDelete(){
    var btn= $(this);
    var parent =btn.closest(".product");
    let id =parent.attr("data-id");
    console.log(id);
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/products/"+id,
         method:"DELETE",
        //  12;38 13/4 ko change kia error: function(response){
        //     var products = $("#products");
        //     products.append("Error has occured");
        // },
        success: function(){
            loadProducts(); 

        }
    })
    console.log("handle DELETE");
}

// function  loadProducts(){
//     $.ajax({
//         url:"https://usman-recipes.herokuapp.com/api/products/",
//         method:"GET",
//         success: function(response){
//             console.log(response);
//             var products = $("#products");
//             products.empty();
//             for(var i=0; i< response.length ;i++)
//             {

//                 var rec = response[i]; 

//                 $("#products").append(`
                
//                 <div class ="recipe" data-id="${rec._id}"> <h3>${rec.name}</h3> <p><button class="btn btn-danger btn-sm float-right">DELETE</button><button type="button" class="btn btn-warning btn-sm float-right"  data-toggle="modal" data-target="#updateModal">Edit</button>${rec.}</p></div>
//                 `);
                 

//                 // $("#products").append("<div><h3>"+rec.title+"</h3></div>");


//             }
            

//         }
//     })
// }




function  loadProducts(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/products/",
        method:"GET",
        success: function(response){
            console.log(response);
            var prod = $("#products");
            prod.empty();
            for(var i=0; i< response.length ;i++)
            {

                var rec = response[i]; 

                $("#products").append(`
                
                <div class ="product" data-id="${rec._id}"> 
                <u><h3>Name: </h3></u> <p>${rec.name}</p>
                <u><h3>Price: </h3></u> <p>${rec.price}</p>
                <u><h3>Color: </h3></u> <p>${rec.color}</p>
                <u><h3>Department: </h3></u> <p>${rec.department}</p>
                <u><h3>Description: </h3></u> <p>${rec.description}</p>
                 <p><button class="btn btn-danger btn-sm float-right">DELETE</button>
                 <button type="button" class="btn btn-warning btn-sm float-right"  data-toggle="modal" data-target="#updateModal">Edit</button></p>
                 </div>`);
                 

                // $("#products").append("<div><h3>"+rec.title+"</h3></div>");


            }
            

        },
    })
}