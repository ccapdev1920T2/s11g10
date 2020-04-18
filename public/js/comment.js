
$(document).ready(function()
{
    // $('#btn-postCard').on('click', '.btn-func', function()
    // {
    // 	if($(this).attr('data-click-state') == 0)   
    // 	{
	   //      $(this).attr('data-click-state', 1);
	   //      $(this).css('background-color', '#00AF33') ;
    //   	}
    //   	else
    //   	{
    //   		$(this).attr('data-click-state', 0);
    //   		$(this).css('background-color','transparent') ;
    //   	}
    // });

    $('#modalDelete').click(function()
    {
        window.location = "/getDeletePost" ;
    });

    $("#editPost").click(function()
    {
        window.location = "/EditPost" ;
    });

    $("#ppp").click(function(){
      //db.createCollection("Comments");
    });

    // $("#btn-postCard").click(function(){
    //   $.get("/try", {}, function(res){
    //     alert("gumana bes2");

    //   });
    // });

    $('#btn-postCard').on('click', '#like', function(e)
    {
      // alert("gumana");

      // var postid = $("#likepostid").val();
      // var liker = $("#liker").val();

      // alert("gumana1");

      // $(this).get("/like", { liker : liker, postid : postid },function(req,res){
      //   alert("reached response and like is:");  
      // });

      // alert("gumana2");
      

      // $ajax({
      //   url : "/try",
      //   type : "get",
      //   cache : false,
      //   data : {
      //   postid : postid,
      //   liker  : liker
      //   },
      //   success : function(data){
      //     alert(data);
      //   }
      // });

      // alert("gumana3");

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