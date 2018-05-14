$(document).ready(function() {

  //click anywhere on the modal div (which includes the overlay) to exit the modal
  $(".modal").click(function(){

    $(".modal").removeClass("show");
  });

  //click on .button-service and call the modal that matches the id
  $(".click-full-screen").click(function(){

    var id = $(this).attr("id");

    $(".modal#"+id+"Modal").addClass("show");
  });

  //click hamburger icon
  $('.toggle-mobile-menu').click(function(){

      //show mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible')
  });

});
