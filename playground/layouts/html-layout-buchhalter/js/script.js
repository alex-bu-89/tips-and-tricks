$(function() {
	$('#slides').slidesjs({
		width: 617,
		height: 324
	});
});	
$(document).ready(function(){
  $('#bxslider1').bxSlider(
  {
	maxSlides:3,
	slideWidth: 200,
	controls:true,
	moveSlides:1,
	pager:false
  }
  );
});
$(document).ready(function(){
  $('#bxslider2').bxSlider(
  {
	maxSlides:3,
	slideWidth: 200,
	controls:true,
	moveSlides:1,
	pager:false
  }
  );
});
$(document).ready(function(){
  $('#bxslider3').bxSlider(
  {
	maxSlides:3,
	slideWidth: 200,
	controls:true,
	moveSlides:1,
	pager:false
  }
  );
});
$(function() {
	$('.pmInput').each(function() {
		
		var asd = $(this);
		
		asd.find('span.minus').click(function() {
			var data = asd.find('input').val();
			if(data > 0) {
				asd.find('input').val(parseInt(data) - 1);
			}
			return false
		});
		
		asd.find('span.plus').click(function() {
			var data = asd.find('input').val();
			asd.find('input').val(parseInt(data) + 1);
			return false
		});
		
	});
});
/* 
 $(document).ready(function () {
     $(".catalog").outerHeight($("#content").outerHeight(true));
});
*/
$(document).ready(function(){ 
 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
 
 });
 
if($("#sideLeft").length == false) {
  $("#content").addClass("noSidebar");
}

