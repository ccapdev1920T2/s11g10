$(document).ready(function()
{
	
/**if user is the owner of the post Post.html, otherwise Post2.html*/
   $('.extra').click(function()
   {
   		var user = $("#navNickName").text() ; 
      var opost = $(this).find('a').text();

      
   }) ;

   $('#commentButton').click(function()
   {
   		window.location = "Post2" ; 
   }) ;

/**IF di pa naclick it will turn to color #00AF33, ELSE background-color: none**/

   $('.nfButtons').on('click', '.btn-icon', function()
    {
      if($(this).attr('data-click-state') == 0)   
      {
        $(this).attr('data-click-state', 1);
        $(this).css('background-color', '#00AF33') ;
      }
      else
      {
        $(this).attr('data-click-state', 0);
        $(this).css('background-color','transparent') ;
      }
    });

   $('#sorter').on('click', '.btn-comment', function()
    {
      if($(this).attr('data-click-state') == 0)   
      {
        $(this).attr('data-click-state', 1);
        $(this).css('background-color','#007bff') ;
      }
      else
      {
        $(this).attr('data-click-state', 0);
        $(this).css('background-color','transparent') ;
      }        
    });

   $('input[type="file"]').change(function(e)
    {
      var imageName = e.target.files[0].name ;
      $("#fileName").text(imageName) ;
    }); 


   $('#smallbutton').on('click', '#like', function()
    {
      $(this).get("/ajax", { liker : liker, postid : postid }, function(res){
        alert("reached response and like is:");  
      });

      alert("gumana");

      var postid = $("#likepostid").val();
      var liker = $("#liker").val();



      $(this).get("/ajax", { liker : liker, postid : postid }, function(res){
        alert("reached response and like is:");  
      });

      alert("gumana2");
      

      $(this).ajax({
        url : "/ajax",
        type : "GET",
        data : {
        postid : postid,
        liker  : liker
        },
        success : function(data){
          alert("gumana ang ppangalawang ajax");
        }
      });

      alert("gumana3");

      // $.load("try", {}, function(result){
      //   alert("HAYUP");
      //   console.log("tangina ka");
      // })

      // $.get("/try", function(res){

      //   alert("naglike");
      //   if(res.success == "success"){
      //     alert("ito na");
      //   }
      // });



      // if($(this).attr('data-click-state') == 0)   
      // {
      //     $(this).attr('data-click-state', 1);
      //     $(this).css('background-color', '#00AF33') ;
      //   }
      //   else
      //   {
      //     $(this).attr('data-click-state', 0);
      //     $(this).css('background-color','transparent') ;
      //   }

    });
});