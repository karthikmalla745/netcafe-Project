// smooth scrolling

$(function()
{
    $("a.smooth-scroll").click(function(event)
    {
        event.preventDefault();

        var section_id =$(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top -60
        },200,"easeInOutExpo");
    });

});