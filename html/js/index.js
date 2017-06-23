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


// $.getJSON("http://route.showapi.com/26-4?showapi_appid=38771&&showapi_sign=29907f4c9b284d2fab3dce39f217e1bf",function(data){
//   console.log(data);
// });