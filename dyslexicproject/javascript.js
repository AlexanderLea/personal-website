$(function()
{
	//get and save default stylesheet
	var defaultStyle = $("link").attr("href");

	//dyslexia friendly: black and white + 'snow' background
	$("#dyslexia").click(function(e) {
		if (document.getElementById("dyslexia").checked == true)
		{
            $("head").append("<link rel='stylesheet' href='dyslexia.css' type='text/css'/>");
		}
        else
        {
            $("[href*='dyslexia.css']").remove();
        }
	});

    //increase font size
    $("#increaseSize").click(function(e) {
        e.preventDefault();
        var originalFontSize = $("html").css("font-size");
        var originalFontSizeNum = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontSizeNum*1.2;
        $("html").css("font-size", newFontSize);
        $("button").css("font-size", newFontSize);
        $("select").css("font-size", newFontSize);
    });

    //decrease font size
    $("#decreaseSize").click(function(e) {
        e.preventDefault();
        var originalFontSize = $("html").css("font-size");
        var originalFontSizeNum = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontSizeNum*.8;
        $("html").css("font-size", newFontSize);
        $("button").css("font-size", newFontSize);
        $("select").css("font-size", newFontSize);
    });

    $("#default").click(function(e) {

        //remove dyslexia external styles
        $("[href*='dyslexia.css']").remove();

        //uncheck the dyslexia radio button
        $("#dyslexia").attr("checked", false);

        //make select boxes = top value
        $('#pickFontColour').val('Font Colour');
        $('#pickBGColour').val('Background Colour');

        //remove added inline styles
        $('*').removeAttr('style');
    });
});

function changeFontColour() {
		var colour = $("#pickFontColour").val();
		$("*").css("color", colour);
}	

function changeBGColour() {
	var colour = $("#pickBGColour").val();
	$("*").css("background-color", colour);
}