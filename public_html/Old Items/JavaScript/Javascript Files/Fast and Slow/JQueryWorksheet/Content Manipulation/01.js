$(document).ready(function(){




var $firstbox = $('#fred');
var $secondbox = $('#wilma');
var $thirdbox = $('#FastPar');
var $fourthbox = $('#SlowPar');

$('a[href$=".pdf"]').addClass('pdflink');

$('#wb').mouseenter(function(){
	$('#wb').addClass('hover');

});
$('#wb').mouseleave(function(){
	$('#wb').removeClass('hover');

});

$('div.poem-stanza').addClass('highlight');
$('#helviticaButton').click(function(){
$('body').removeClass().addClass('afterClick');
});

$('#db').click(function(){
	$('body').removeClass().addClass('body').addClass('highlight');
	$('body').removeClass().addClass('body');
	$('#fred').removeClass('ding').removeClass('mermaid').addClass('highlight');
	$('#wilma').removeClass('mermaid').addClass('highlight');

});

$('#wb').click(function(){
	$('body').removeClass().addClass('ding');

});

$('#ar').click(function(){
	$('div.poem-stanza').removeClass('highlight').addClass('mermaid');

});
$firstbox.hide();
$secondbox.hide();
$thirdbox.hide();
$fourthbox.hide();
$('a.more').click(function()
{
	$firstbox.animate({opacity: 'toggle',height: 'toggle'},'slow');
	
	if ($(this).text() == 'read more')
	{
		
		$(this).text('read less');
	}
	else
	{
		$(this).text('read more');
	}
	return false;
});
$('a.moree').click(function()
{
	
	$secondbox.animate({opacity: 'toggle', height: 'toggle'},'slow');
	if ($(this).text() == 'read more')
	{
		
		$(this).text('read less');
	}
	else
	{
		$(this).text('read more');
	}
	return false;
});

$('a.morefast').click(function()
{
	
	$thirdbox.animate({opacity: 'toggle', height: 'toggle'},100);
	if ($(this).text() == 'read more')
	{
		
		$(this).text('read less');
	}
	else
	{
		$(this).text('read more');
	}
	return false;
});

$('a.moreslow').click(function()
{
	
	$fourthbox.animate({opacity: 'toggle', height: 'toggle'},10000);
	if ($(this).text() == 'read more')
	{
		
		$(this).text('read less');
	}
	else
	{
		$(this).text('read more');
	}
	return false;
});

var $FirstPar = $('div.FirstPar');
var $SecondPar = $('div.SecondPar');



$('#switcher button').click(function() {	

	var numone = parseFloat($FirstPar.css('fontSize'));
	var numtwo = parseFloat($SecondPar.css('fontSize'));
	switch (this.id)
	{
		case 'fi':
		if (numone < 20)
		{
			numone *= 2;
		}
		break;

		case 'fd':
		if (numone > 12)
		{
			numone /=2;
		}
		break;

		case 'si':
		if (numtwo < 20)
		{
			numtwo *= 2;
		}
		break;

		case 'sd':
		if (numtwo > 12)
		{
			numtwo /=2;
		}
		break;


	}
	$FirstPar.css('fontSize', numone + 'px');
	$SecondPar.css('fontSize', numtwo + 'px');

	

});

});