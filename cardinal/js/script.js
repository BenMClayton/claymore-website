/*!
 * 
 * Cardinal HTML5 Template v.1.0.0
 * 
 */


jQuery(function($){
	"use strict";

	if ( $('.image-hover').length ){
		$('.image-hover').photobox('a', { time:0 });
	}

	/*** Home Slider ***/
	if ( $(".home-slider").length ){
		var testimgCaro = $(".home-slider");
	 
		testimgCaro.owlCarousel({
			pagination: false,
			autoPlay: true,
			singleItem: true
		});
	} 

	/*** Blog Carousel ***/
	if ( $(".testim-carousel").length ){
		var testimgCaro = $(".testim-carousel");
	 
		testimgCaro.owlCarousel({
			pagination: true,
			autoPlay: true,
			singleItem: true
		});
	}
	if ( $(".blog-carousel").length ){
		var blogCaro = $(".blog-carousel");
	 
		blogCaro.owlCarousel({
			autoPlay: false,
			pagination: false,
			items : 2,
			itemsDesktop : [1000,2],
			itemsDesktopSmall : [900,2],
			itemsTablet: [600,1]
		});

		$(".caro-next-blog").on('click', this, function(){
			blogCaro.trigger('owl.next');
		});
		$(".caro-prev-blog").on('click', this, function(){
			blogCaro.trigger('owl.prev');
		});
	}


	if ( $(".brand-carousel").length ) {
		/*** Brands Carousel ***/
		var brandCaro = $(".brand-carousel");
		brandCaro.owlCarousel({
			autoPlay: false,
			pagination: false,
			items : 6,
			itemsDesktop : [1000,5],
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,2]
		});

		$(".caro-next-brand").on('click', this, function(){
			brandCaro.trigger('owl.next');
		});
		$(".caro-prev-brand").on('click', this, function(){
			brandCaro.trigger('owl.prev');
		});
	}

	$('[data-toggle="tooltip"]').tooltip();



});



jQuery(document).ready(function($){


	$('#maincontact_form').on('submit', function(){
		document.getElementById('message').innerHTML =
			'<div class="alert alert-info">This portfolio demo does not submit messages. Please use the contact details shown on the page.</div>';
		$('#message').slideDown('slow');
		return false;
	});

	$('#comments_form').on('submit', function(){
		document.getElementById('message1').innerHTML =
			'<div class="alert alert-info">Comments are disabled in this static portfolio demo.</div>';
		$('#message1').slideDown('slow');
		return false;
	});

	$('#fill_form').on('submit', function(e){
		return false;
	})

});

