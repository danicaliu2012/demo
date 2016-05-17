$(function() {
     
   var movieword="";
   $("#draggable").draggable(
   	{
    	start:function(e){
            result.drag = e.target.id.split("draggable");
        }
    });
   $("#draggable1").draggable(
   	{
    	start:function(e){
            result.drag = e.target.id.split("draggable")[1];
        }
    });
   $("#draggable2").draggable(
   	{
    	start:function(e){
            result.drag = e.target.id.split("draggable")[2];
        }
    });
   $("#draggable3").draggable(
   	{
    	start:function(e){
            result.drag = e.target.id.split("draggable")[3];
        }
    });
   $("#draggable4").draggable(
   	{
    	start:function(e){
            result.drag = e.target.id.split("draggable")[4];
        }
    });
   
   $("#droppable").droppable({
	    accept: "#draggable",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   		var $this = $(this);
            result.drop = event.target.id.split("droppable");


	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
		  movieword += $("#draggable").text().replace(/ /g,'');
	   	  
	   }
	  });
	$("#droppable1").droppable({
	    accept: "#draggable1",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {

	   		var $this = $(this);
            result.drop = event.target.id.split("droppable")[1];



	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
		  movieword += $("#draggable1").text().replace(/ /g,'');
	   	  
	   }
	  });

	$("#droppable2").droppable({
	    accept: "#draggable2",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   		var $this = $(this);
            result.drop = event.target.id.split("droppable")[2];



	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
		  movieword += $("#draggable2").text().replace(/ /g,'');
	   	  
	   }
	  });

	$("#droppable3").droppable({
	    accept: "#draggable3",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   		var $this = $(this);
            result.drop = event.target.id.split("droppable")[3];


	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
	   	  movieword += $("#draggable3").text().replace(/ /g,'');
	   }
	  });
	   
	$("#droppable4").droppable({
		var $this = $(this);
            result.drop = event.target.id.split("droppable")[4];


	    accept: "#draggable4",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
	   	  movieword += $("#draggable4").text().replace(/ /g,'');
	   }
	  });
	   
	 
	   
	 

	 $('#submitButton').click(function(){

	 	if(result.drag == result.drop)
                alert("true");
             else
                alert("false");
            $this.append(ui.draggable);
       
       
		 
		 //Check if the correct movie was dragged and dropped
		        
        //Check if the movie word is tenet. If yes is it a palindrome 
	 });
	  
             
          
      
   
});