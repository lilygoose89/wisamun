$(document).ready(function() {

	// $('.popup-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 		titleSrc: function(item) {
	// 			return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
	// 		}
	// 	}
	// });

  //click anywhere on the modal div (which includes the overlay) to exit the modal
  $(".modal").click(function(){
    $(".modal").removeClass("show");
  });
  //click on .button-service and call the modal that matches the id
  $(".click-full-screen").click(function(){
    var id = $(this).attr("id");

    $(".modal#"+id+"Modal").addClass("show");

  });

});
