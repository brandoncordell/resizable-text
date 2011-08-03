/**
* jQuery Resizable-text Plugin
* Version: 1.0.0
* URL: http://projects.brandoncordell.com/resizable-text
* Description: Adds a text resizer to the specified element for better usability
* Requires: 
* Author: Brandon Cordell (http://brandoncordell.com)
* Copyright: Copyright 2011 Brandon Cordell
* License: Dual licensed under the MIT and GPL licenses:
* 	http://www.opensource.org/licenses/mit-license.php
* 	http://www.gnu.org/licenses/gpl.html
*/

(function($) {
	$.fn.resizableText = function(options) {
		var opts = $.extend({}, $.fn.resizableText.defaults, options),
		deadLink = '<a href="">A</a>',
		unorderedList = $('<ul>').addClass('resizer'),
		smallListItem = $('<li>').addClass('small').html(deadLink),
		mediumListItem = $('<li>').addClass('medium').html(deadLink),
		largeListItem = $('<li>').addClass('large').html(deadLink),
		base = $(this);
		
		unorderedList.append(smallListItem)
						 .append(mediumListItem)
						 .append(largeListItem)
						 .prependTo(base);
						 
		$('li.small a').bind('click', function(e) {
			e.preventDefault();
			base.removeClass('medium').removeClass('large');
		});
		
		$('li.medium a').bind('click', function(e) {
			e.preventDefault();
			base.removeClass('small').addClass('medium').removeClass('large');
		});
		
		$('li.large a').bind('click', function(e) {
			e.preventDefault();
			base.removeClass('small').removeClass('medium').addClass('large');
		});
		
		return this.each(function() {
			var base = $(this);
		});
	};

	$.fn.resizableText.defaults = {
		followScroll: false
	};
})(jQuery); // end closure wrapper