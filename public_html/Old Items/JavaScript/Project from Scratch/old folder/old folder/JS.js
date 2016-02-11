$(document).ready(function(){

	$('<a href ="#top">back to top</a>').insertAfter('div.List p');
	$('<a id="top"></a>');
	


	var $notes = $('<ol id="notes"><ol>').insertAfter('#container');
	$('span.footnote').each(function(index)
	{
		$(this).before([
			'<a href="#footnote-',
			index + 1,
			'" id="context-',
			index + 1,
			'" class="context">',
			'<sup>',
			index + 1,
			'</sup></a>'
			].join(''))
		.appendTo($notes)
		.append([
			'&nbsp; (<a href="#context-',
			index +1,
			'">context</a>)'
			].join(''))
			.wrap('<li id="footnote-' + (index + 1) + '"></li>');
	});




});