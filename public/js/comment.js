
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


    // $("#btn-postCard").click(function(){
    //   $.get("/try", {}, function(res){
    //     alert("gumana bes2");

    //   });
    // });

    $(".likepost").click(function(){
      var postid = $("#likepostid").val();
      var liker = $("#liker").val();


          $.get("/ajaxLike",{postid : postid, liker : liker}, function(result){
            // alert(result.post.nLikes);
            $("#likes").text(result.post.nLikes);

            if (result.status){
              $('#like').css('background-color', '#00AF33');
              $('#active').css('background-color', '#00AF33');

                $.get("/checkDislike", {postid : postid, disliker : liker}, function(result){
                if(result.status){
                   $('#dislike').css('background-color', '#00AF33');
                   $('#active').css('background-color', '#00AF33');
                   $("#dislikes").text(result.post.nDislikes);
                }
                else{
                  $('#dislike').css('background-color', '#FFFFFF');
                  $('#active').css('background-color', '#FFFFFF');
                  $("#dislikes").text(result.post.nDislikes);
                }
              });
            }
            else{
              $('#like').css('background-color', '#FFFFFF');
              $('#active').css('background-color', '#FFFFFF');

              $.get("/checkDislike", {postid : postid, disliker : liker}, function(result){
              if(result.status){
                 $('#dislike').css('background-color', '#00AF33');
                 $('#active').css('background-color', '#00AF33');
                 $("#dislikes").text(result.post.nDislikes);
              }
              else{
                $('#dislike').css('background-color', '#FFFFFF');
                $('#active').css('background-color', '#FFFFFF');
                $("#dislikes").text(result.post.nDislikes);
              }
            });
            }

          });
    });

    $(".dislikepost").click(function(){
      var postid = $("#likepostid").val();
      var disliker = $("#liker").val();

          $.get("/ajaxDislike",{postid : postid, disliker : disliker}, function(result){
            $("#dislikes").text(result.post.nDislikes);

            if (result.status){
               $('#dislike').css('background-color', '#00AF33');
                 $('#active').css('background-color', '#00AF33');

                 $.get("/checkLike", {postid : postid, liker : disliker}, function(result){
              if(result.status){
                 $('#like').css('background-color', '#00AF33');
                 $('#active').css('background-color', '#00AF33');
                 $("#likes").text(result.post.nLikes);
              }
              else{
                $('#like').css('background-color', '#FFFFFF');
                $('#active').css('background-color', '#FFFFFF');
                $("#likes").text(result.post.nLikes);
              }
            });
            }
            else{
              $('#dislike').css('background-color', '#FFFFFF');
                $('#active').css('background-color', '#FFFFFF');

                $.get("/checkLike", {postid : postid, liker : disliker}, function(result){
              if(result.status){
                 $('#like').css('background-color', '#00AF33');
                 $('#active').css('background-color', '#00AF33');
                 $("#likes").text(result.post.nLikes);
              }
              else{
                $('#like').css('background-color', '#FFFFFF');
                $('#active').css('background-color', '#FFFFFF');
                $("#likes").text(result.post.nLikes);
              }
            });
            }

            
          });
    });


    $(".save").click(function(){
      var postid = $("#likepostid").val();
      var disliker = $("#liker").val();



      alert("save");
      $.get("/ajaxSave", {postid : postid, saveto : disliker}, function(result){
        if(result){
          $(".save").css('background-color', '#00AF33');
        }
        else{
          $(".save").css('background-color', '#FFFFFF');
        }
      })

    });


    $(".follow").click(function(){
      var postid = $("#likepostid").val();
      var disliker = $("#liker").val();



      alert("follow");
      $.get("/ajaxFollow", {postid : postid, saveto : disliker}, function(result){
        if(result){
          $(".follow").css('background-color', '#00AF33');
        }
        else{
          $(".follow").css('background-color', '#FFFFFF');
        }
      })

    });


    $(".btn-comment").click(function(){
      var commenter = $("#liker").val();
      var commentto = $("#commentto").val();
      var comment = $("#comment").val();
      var objectid = $("#likepostid").val();

      $.get("/ajaxComment", {
        commenter : commenter,
        commentto : commentto,
        comment : comment,
        objectid : objectid
      }, function(result){
        $("#postedComment").append('<div class="comments"><a href="/Profile/' + result.post.commenter + '">' + result.post.commenter + ' </a><label > commented ' + result.post.commentDate + result.post.commentTime + '</label> <p class="commentText">' + result.post.comment + '</p> <div class="collapse" id="collapseReply"><form id="replyForm"> <div class="card-reply"> <textarea class="pCommentReply" id="userReply" placeholder="Comment here"></textarea></div></form></div></div>');
        $("#comment").val("");
      });
    })

});