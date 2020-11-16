$(document).ready(function(){	

   $("#myform").submit(function(){


      //Reseting all the Elements
      $("#Book1").html("");
      $("#Book2").html("");
      $("#Book3").html("");
      $("#Book4").html("");

      $("#Author1").html("");
      $("#Author2").html("");
      $("#Author3").html("");
      $("#Author4").html("");

      $("#Bookimg1").html("");
      $("#Bookimg2").html("");
      $("#Bookimg3").html("");
      $("#Bookimg4").html("");






   	  var search = $("#books").val();
   	  if(search == "")
   	  {
   	  	alert("Please enter something in the field");
   	  }
   	  else{		
   	  var url = "";
   	  var img = "";
      var title = "";
      var author = "";

   	  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){

          //for(i=0;i<response.items.length;i++)

          for(i=0;i<4;i++)
          {
           title=$('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');  
           author=$('<h5 class="center-align white-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');

           //img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>'); 	
           //url= response.items[i].volumeInfo.imageLinks.thumbnail;
           //img.attr('src', url);

           link = response.items[i].volumeInfo.infoLink;

           image = response.items[i].volumeInfo.imageLinks.thumbnail

           $('#Bookimg'+(i+1)).attr('src', image);

           $('#Link'+(i+1)).attr('href', link);


           title.appendTo('#Book'+(i+1));
           //console.log('#'+ (i+1));
           author.appendTo('#Author'+(i+1));

            

           //img.appendTo('#result');
          }
   	  });
      }
      return false;
   });

});