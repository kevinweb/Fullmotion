(function($) {
	$window.on('load', function() {
		var $thumbs = $('.thumbnails');
		if ($thumbs.length > 0)
			$thumbs.poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				overlayColor: '#222226',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});
	});
})(jQuery);