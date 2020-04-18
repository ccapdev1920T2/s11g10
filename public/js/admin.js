$(document).ready(function()
{
    $('#divAnn').on('click', '#dismissReport', function()
    {
        $(this).closest('li').remove();
    });

    $('#divAnn').on('click', '#delbutton', function()
    {
        $(this).closest('li').remove();
    });

    $('#divAnn').on('click', '#viewReported', function()
    {
        window.location = "Post3" ;
    });

    $('#postAnnounce').click(function()
    {
        alert("Announcement posted") ;
    });

    $('#divAnn').on('click', '#banUser', function()
    {
        $(this).css('background-color', '#00AF33') ;
    });

    $("#home").click(function(){
        window.location = "/Newsfeed" ;
    })

    $('.report').on('click', '#banUser', function()
    {
        $(this).css('background-color', '#00AF33') ;
    });
});