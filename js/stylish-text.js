/*	jQuery Stylish Text plugin

	Victor Smirnov © 2013
*/

(function($) {
	var defaults = {};

	var options;

	$.fn.stylishText = function(params) {
		var options = $.extend({}, defaults, params);

		function init(stylishText) {
			$(stylishText).each(function () {
				var self = $(this);
				var child_p = self.children('p');
				if (child_p.length > 0) {
					self = child_p;   
				}
				self.addClass('stylish-text').wrapInner(
					'<span class="stylish-level-1"><span class="stylish-level-2"><span class="stylish-level-3">' +
					'</span></span></span>'
				);
			});
		}

		this.each(function() {
			init(this);
		});

		return this;
	};
})(jQuery);
