jQuery(document).ready(function(){

	/* EBL BOOKS SLIDER */
	jQuery('[data-behaviour~=ebl-books-slider]').each( function () {
		var $this = jQuery( this ),
			slide = $this.data('slide'),
			infinity = $this.data('infinite'),
			autoplay = $this.data('auto'),
			arrows_show = $this.data('arrows');
			$this.slick({
				infinite      : infinity,
				slidesToShow  : slide,
				slidesToScroll: 1,
				dots          : false,
				autoplay      : autoplay,
				autoplaySpeed : 5000,
				speed         : 300,
				arrows        : arrows_show,
				nextArrow     : '<button type="button" class="slick-next slick-nav"><i class="fa fa-angle-right"></i></button>',
				prevArrow     : '<button type="button" class="slick-prev slick-nav"><i class="fa fa-angle-left"></i></button>',
				responsive    : [
					{
						breakpoint: 1169,
						settings  : {
							slidesToShow  : 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 960,
						settings  : {
							slidesToShow  : 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings  : {
							slidesToShow  : 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 480,
						settings  : {
							slidesToShow  : 1,
							slidesToScroll: 1
						}
					}
				]
			});	// slick

			$this.addClass( 'loaded' );
	});

});
