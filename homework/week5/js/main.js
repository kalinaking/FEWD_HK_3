console.log("123");
$(function()	{
	// User clicks on a button
	$('nav').on('click', 'li', function(e) {
		var $this = $(this);
		// slide down the image thumbnails
		slideThumbs($this);
		// 
	})
})

function slideThumbs (li)	{ //we are telling the function to take what it was feeded ($this) and call it "li"
	//find the right category and slide it down
	var $slider = $('#slide-down') //#slide-down is the ID for the entire div containing all the images that would dropdown
	topic = li.find('span').text().toLowerCase();
	// slide up all the other categories ..they should disappear. if you click twice, it needs to slide up
	if (li.hasClass('active')) 	{
		$slider.slideUp(); // don't we need to unactivate the button?
	} else	{
		$slider.slideDown('fast', function() {
			$('#slide-down > section').hide(); // why #slide-down > section?
			$('section.' + topic).show();
		});
	}
}

function activateBtn (li) {
	// make all the other topics deselected

	// highlight the selected topic tab
}