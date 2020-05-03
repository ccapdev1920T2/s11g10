
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








   $('.smallbutton').on('click', '.like', function()
    {

      var postid = $(this).val();
      var liker = $("#user").val();


          $.get("/ajaxLike",{postid : postid, liker : liker}, function(result){
            alert("Liked");
          });



    });


      $('.smallbutton').on('click', '.dislike', function()
    {

      var postid = $(this).val();
      var disliker = $("#user").val();
      var count = postid + "dislike";


          $.get("/ajaxDislike",{postid : postid, disliker : disliker}, function(result){
            // alert(result.toString());
            // $("count").val() = result.toString();
          });



    });

  // $("#newPostButton").click(function(){
  //   var postTitle = $("#newPostTitle").val();
  //   var content = $("#newPostContent").val();

  //    try{
  //           var formData = new FormData();
  //           var totalFiles = document.getElementById('file-upload').files.length;
  //           for (var i = 0; i < totalFiles; i++) {
  //               var file = document.getElementById('file-upload').files[i];
  //               formData.append("filetoupload", file);
  //           }

  //           $.get("/ajaxCreatePost", formData, function(result){
  //             alert("file uploaded");
  //           });

  //    } catch (e){
  //       alert("File Upload Error" + e.message);
  //    }
  // });


});