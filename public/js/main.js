$(document).ready(function()
{
  
        function checkField(field, val) {
            var valid = val;

            if(field.val() == '') {
                valid = false;
                field.css('background-color', 'red');
                field.css('border-radius', '10px') ;               
            } else {
                field.css('background-color', 'white');
            }

            return valid;
        }

        function checkEqual(field1, field2, val) {
            var valid = val;

            if(field1.val() != field2.val() || field1.val() == '') {
                valid = false;
                field1.css('background-color', 'red');
                field1.css('border-radius', '10px') ; 
                field2.css('background-color', 'red');
                field2.css('border-radius', '10px') ; 
            } else {
                field1.css('background-color', 'white');
                field2.css('background-color', 'white');
            }

            return valid;
        }

        function checkEmail(field, val) {
            var valid = val;
            var atIndex = field.val().indexOf('@');
            var dotIndex = field.val().lastIndexOf('.');

            if(atIndex == -1 || dotIndex == -1 || atIndex > dotIndex) {
                valid = false;
                field.css('background-color', 'red');
            } else {
                field.css('background-color', 'white');
            }

            return valid;
        }

        $("#registerBtn").click(function(e){
            var valid = true;
            valid = checkField($("#username"), valid);
            valid = checkField($("#id"), valid);
            valid = checkField($("#pass"), valid);
            valid = checkField($("#pass1"), valid);
            valid = checkField($("#email"), valid);

            if(valid == false)
            {
            	alert("Fill missing information") ;
            }

            valid = checkEmail($("#email"), valid);

            if(valid == false)
            {
            	alert("invalid email format") ;
            }

            valid = checkEqual($("#pass"), $("#pass1"), valid);
            if(valid == false)
            {
            	alert("Pasword does not match") ;
            }

            if(valid == false)
            {
            	e.preventDefault();
            }

            if(valid == true) 
            {
               $('#registerForm').attr('action', 'Verify')    ;
            }

        });


        $("#signInBtn").click(function(e){
            var valid = true;
            valid = checkField($("#username"), valid);
            valid = checkField($("#pass"), valid);

            if(valid == false)
            {
                alert("Do not leave blank") ;
                e.preventDefault();
            }
            else
            {
              var username = $("#username").val() ; 

              if( username == 'admin')   
              {
                $('#signInForm').attr('action', 'AdminPage') ;
              }
              else
              {
                $('#signInForm').attr('action', 'NewsFeed') ;
              }
                
            }
            

        });



});