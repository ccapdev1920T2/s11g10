$(document).ready(function()
{
    $('#editContainer').on('click', '.btn-edit', function()
    {
        $('#editUpdate').text("Changes saved.");
    });

   /* $('.edit-Box').on('click', '#file-upload', function()
    { */
    $('input[type="file"]').change(function(e)
    {
    	var imageName = e.target.files[0].name ;
    	$("#fileName").text(imageName) ;
    });      

        
    /*});*/
    
});
