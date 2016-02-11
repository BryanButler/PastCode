$(document).ready(function(){

	//beginning of the hrefs for highlighed text in paragraphs
	$('div.chapter a[href*="wikipedia"]').attr({
	rel: 'external',
	title: function(){
		return 'Learn more about ' + $(this).text()
		 + ' at Wikipedia.';
	},
	id: function(index, oldValue) {
		return 'wikilink-' + index;
	}

});
	//end of the hrefs for highlighted text in paragaphs
	//addition of the back to top functions for the entire page.
	$('<a href ="#top">back to top</a>').insertAfter('div.chapter p');
	$('<a id="top"></a>');
	//the end of the back to top functions


	//the beginning of the wrapping fotnote section
	var $notes = $('<ol id="notes"><ol>').insertBefore('#footer');
	$('a.footnote').each(function(index)
	{
		$(this).before([
			'<a href="#footnote-',
			index +1,
			'" id="context-',
			index + 1,
			'" class="context">',
			'<sup>',
			index + 1,
			'</sup></a>'
			].join(''))
		.appendTo($notes)
		.append([
			'&nbsp;(<a href="#context-',
			index +1,
			'">context</a>)'
		].join(''))
		.wrap('<li id="footnote-' + (index + 1) + '"></li>');
	});
	//the end of the wrapping footnote section
	//the beginning of the quoting section
	$('span.pull-quote').each(function(index){
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
	//the end of the quoting section


}); //end of the document.ready function