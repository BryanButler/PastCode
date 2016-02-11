$(document).ready(function() {

//Increase/Decrease font size for entire document

var $bodytext = $('div.Container');
var defaultsize = $bodytext.css('fontSize');

$('#switcher button').click(function() {
	var size = parseFloat($bodytext.css('fontSize'));
	switch (this.id) {
		case 'switcher-big':
		size *= 1.5;
		break;
		case 'switcher-small':
		size /= 1.5;
		break;
		case 'switcher-default':
		size = parseFloat(defaultsize);
		break;
	}
	$bodytext.css('fontSize', size + 'px');

});//End of Increase/Decrease font size for entire document

//The beginning of the Buttons for each font bold and color change
$('#FirstSubSect button').click(function(){

	switch (this.id) {
		case 'Bold':
		$('#FirstSubSect').toggleClass('bold');
		break;
	}
		
	});
$('#SecondSubSect button').click(function(){

	switch (this.id) {
		case 'Bold':
		$('#SecondSubSect').toggleClass('bold');
		break;
	}
		
	});
$('#ThirdSubSect button').click(function(){

	switch (this.id) {
		case 'Bold':
		$('#ThirdSubSect').toggleClass('bold');
		break;
		}
	});
$('#FourthSubSect button').click(function(){

	switch (this.id) {
		case 'Bold':
		$('#FourthSubSect').toggleClass('bold');
		break;
		}
	});


//The end of the buttons for each font bold and color change


//The start of the Wiki links
var $notes = $('<ol id="notes"><ol>').insertBefore('#footer');
	$('a.footnote').each(function(index)
	{
		var $CCloneCopy = $(this).clone();
		$CCloneCopy.removeClass();
		var $link = $(this).attr('href');
		$(this).after([
			'<a href="#footnote-',
			index +1,
			'" id="context-',
			index + 1,
			'" class="context">',
			'<sup>',
			index + 1,
			'</sup></a>'
			].join(''));

		$CCloneCopy.appendTo($notes)
		.wrap('<li id="footnote-' + (index + 1) + '"></li>');
	});


//The end of the wiki links


//The start of back to top
$('<a href ="#top">back to top</a>').insertAfter('div.FirstSectionSubs');
$('<a id="top"></a>');
//The end of the back to top


//The start of the drop text and side pannels
$('span.pull-quote').each(function(){
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position','relative');

		var $clonedCopy = $(this).clone();
		$clonedCopy.addClass('pulled')
		.find('span.drop')
		.html('&hellip;')
		.end()
		.text($clonedCopy.text())
		.prependTo($parentParagraph)
		.addClass('rounded-top')
		.wrapInner('<div class="rounded-bottom"></div>');
	});
//The end of the droptext and side pannels


//The start of More Less section
var $FirstHide = $('div.ChangeHidden');
$FirstHide.hide();
$('a.ChangeManagementmore').click(function()
{
	$FirstHide.animate({opacity: 'toggle' ,height: 'toggle'},'slow');
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

var $SecondHide = $('div.EventHidden');
$SecondHide.hide();
$('a.Eventmore').click(function()
{
	$SecondHide.animate({opacity: 'toggle' ,height: 'toggle'},'slow');
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
//The end of the more/less section

//the start of the biliography

//the end of the bibliography


});//end of the document.ready function