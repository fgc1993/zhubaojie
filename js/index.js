$(function(){
      $(".right li").hover(function(){
      	$(this).addClass("hover");
      	
      	$(this).siblings().removeClass("hover");
      	$(".hover .ul1").show();
      },function(){
        $(this).removeClass("hover");  
          	$(".ul1").hide();   
      });   

      $(".right .ul1").hover(function(){
      	$(this).css({"display":"block"});
      },function(){
      	$(this).css({"display":"none"});
      });  	
});