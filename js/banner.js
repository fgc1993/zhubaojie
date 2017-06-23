$(function(){
         $.cookie.json=true;
  var usenam=$.cookie("use");
  if(usenam){
    $("#header .befor").hide();
   $("#header .after").show().find("span").text(usenam);
     console.log(1);
  }

  $("#tc").click(function(e){
//  e.preventDefault();
     $("#header .befor").show();
     $("#header .after").hide();
   console.log("in");
   $.cookie("use",usenam,{expires:-1,path:"/"});
  });
  
  //轮播效果
  var $imgs=$("#banner li"),
      len=$imgs.length,
      currentIndex=0,
      nextIndex=1,
      html="";
      timer=null;
      timer=setInterval(move,5000);
      for(var i=0;i<len;i++){
      	html+="<div></div>"
      }
      $(html).appendTo("#banner .pages").eq(0).addClass("current");
      $(".pages").on("mouseover","div",function(){
             if($(this).index()==currentIndex)
             	return;
             nextIndex=$(this).index();
             move();
      });
      function move(){
      	$imgs.eq(currentIndex).fadeOut().end()
      	     .eq(nextIndex).fadeIn();
      	 $(".pages div").eq(currentIndex).removeClass("current").end()
      	                .eq(nextIndex).addClass("current");
      	     currentIndex=nextIndex;
      	     nextIndex++;
      	     if(nextIndex>=len)
      	     	nextIndex=0;
      }
      //楼层导航效果
      //获取每个楼层拒顶部的高低
      var floorTop=$(".floor_lc:eq(0)").offset().top,
           winHeight=$(window).height(),
           isMoving=false,
           current=0;
           
      $(window).on("scroll",function(){
        console.log(floorTop,winHeight);
        if (!isMoving) {
          var _scrollTop = $(window).scrollTop(); // 获取页面滚动高度
          // 判断滚动距离
          if (_scrollTop >= floorTop - winHeight / 2) {
            $("#floor .celan").stop().fadeIn();
          } else {
            $("#floor .celan").stop().fadeOut();
          }
             $(".floor_lc").each(function(index, element){
            // 求当前遍历到楼层在文档中距离文档顶部的绝对定位
            var _top = $(element).offset().top;
            // 与滚动距离判断
            if (_scrollTop >= _top - winHeight / 2) {  
            $(".celan li").eq(index).css({"background":"pink"})
                          .siblings().css({"background":"white"});       
              currentFloorIndex = index; // 标记当前正显示楼层的索引
            }
          });
         }
      });
      $(".celan li").click(function(){
        var floorIndex = $(this).index(),
          _top = $(".floor_lc").eq(floorIndex).offset().top; // 计算应该页面滚动的高度
        isMoving = true;

        $(this).css({"background":"pink"}).siblings().css({
          "background":"white"});
       
             
        // 实现页面滚动效果
        $("html,body").stop().animate({scrollTop: _top}, 500, function(){
          isMoving = false;
        });
      }).hover(function(){
        $(this).css({"background":"pink"});
      }, function(){
        if ($(this).index() !== currentFloorIndex)
          $(this).css({"background":"white"});
      });
var a=$("#nav");
console.log(a);
    });