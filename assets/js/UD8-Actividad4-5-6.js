$(document).ready(function(){
  let opciones = $('[id*="aside"]');
  opciones.each(function () {
    $(this).click(function(){
      let x = $(this.dataset.id).offset();
      let header = $("#header");
      //alert("Top: " + x.top + " Left: " + x.left);
      console.log("Top: " + x.top + " Left: " + x.left);
      $('html, body').animate({scrollTop:x.top-header.height()-20}, 'slow');
    });
  })


  $("#toTop").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
  });

  $("#toTop").css("display", "none");

	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$("#toTop").fadeIn("slow");
		}
		else {
			$("#toTop").fadeOut("slow");
		}
	});
});