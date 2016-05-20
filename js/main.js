$(document).ready(function(){
	$( ".down_arrow_pic" ).click(function() {
  		$('.accordion').show();
  		$('.down_arrow_pic').hide();
  		$('.up_arrow_pic').show();


	});

	$( ".up_arrow_pic" ).click(function() {
  		$('.accordion').hide();
  		$('.up_arrow_pic').hide();
  		$('.down_arrow_pic').show();

	});

	$(".video_section").click(function() {
		$('div.video-js').show();
		$('.overlay').show();
	
	});
	$('.overlay').click(function(){ 
		$('.vjs-tech').remove();
		$('.vjs_video_3').remove();
		
		$('.overlay').remove(); 
		$('.video-js').remove(); 
		
	});

})
