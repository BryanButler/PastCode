$(document).ready(function() {
	//var section
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');
	var $firstPara = $('p').eq(1);
	//end var section

	//additional CSS alteration
	$('p').eq(2)
	.css('border','1px solid #333')
	.click(function()
	{
		var $clickedItem = $(this);
		$clickedItem.next().slideDown('slow', function()
			{
				$clickedItem.slideUp('slow');
			});
	});



	$('p').eq(3).css('backgroundColor','#ccc').hide();

	//end additional CSS alteration


	//div label function
	$('div.label').click(function() {
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$switcher
		 .css({position: 'relative'})
		 .fadeTo('fast', .5)
		 .animate({left: paraWidth - switcherWidth},{duration: 'slow',queue:false})
		 .fadeTo('slow', 1.0)
		.slideUp('slow',function(){
			$switcher.css({backgroundColor: '#f00'});
		})
		.slideDown('slow');
	});

	//the hide and show in the first paragraph
	$firstPara.hide();
	$('a.more').click(function()
	{
		$firstPara.animate({opacity: 'toggle',height: 'toggle'},'slow');
		var $link = $(this);
		if ($link.text() == 'read more')
		{
			$link.text('read less');
		}
		else
		{
			$link.text('read more');
		}
		return false;
	});
	//the end of the hide and show in the first paragraph

	//switcher button start
	$('#switcher button').click(function() {
		var num = parseFloat($speech.css('fontSize'));
		switch (this.id){
		case 'switcher-large':
		if (num <20){
		num *= 1.4;}
		break;
		case 'switcher-small':
		if (num>20){
		num /= 1.4;}
		break;
		default:
		num = parseFloat(defaultSize);
	}
		$speech.animate({fontSize: num + 'px'}, 'slow');
	});
	//switcher button end
});//this is the end of the entire document . ready function