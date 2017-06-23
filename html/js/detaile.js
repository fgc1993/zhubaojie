//实现商品的加减

 $(function(){
 	//加载模板
   $.cookie.json=true;
   var id=$.cookie("number");
   console.log(id);
   var prod=[],url="";//ajax同步加载
   $.ajax({
  		url:"data/new_file.json",
  		type:"get",
  		dataType:"json",
  		async: false,
  		success:function(data){
  			for(var i=0,len=data.length;i<len;i++){
   		if(id==data[i].id){
   			 prod.push(data[i]); 
   			 url=data[i].url;
   		}
   	}
   	var data={
   		products:prod
   	}
   	 var html=template("moban",data);
   	  $("#shop").append(html);
  		}
  		});
  			var a=$(".mon").val();
//			console.log(a);
  	$("#shop").on("click",".ad,.buy1",function(){
  
  		var $row=$(this).parents(".shop"),    
		    product={
		    	id:id,
		    	url:url,
		    	price: $row.find(".p2").children().text().slice(1),//截取数字
		    	sm:$row.find(".sm").text(),
		    	amount:a
		    };
		    console.log(product);
		    $.cookie.json=true;
		var _products=$.cookie("products")||[];
	    var _index = indexOf(product.id, _products);
		if (_index === -1) { // 以前未选购
					_products.push(product);
				 } 
				 else { // 以前有选购当前的商品
					_products[_index].amount=a;
					console.log("in");
				}
			
			$.cookie("products",_products,{expires:4});	
			console.log("成功",$.cookie("products"));
  	});
  		function indexOf(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (id === products[i].id)
						return i;
				}

				return -1;
			}
  		
  		
  		
	$(".shop").on("click","#add,.minus",function(){
		if($(this).is("#add")){
			a++;
			$(".mon").val(a);
		}
		if($(this).is(".minus")){
			if(a<=1)
				return;
			a--;
			$(".mon").val(a);
		}
	});
   });


$(function(){
	$(".list").on("click","li",function(){
		$(this).css({"background":"red"}).siblings().css({"background":"white"}).end();
		// console.log($(this).next());
// $(this).parents(".deta").find(".xq").hide();
		if($(this).is(".ee")){
			$(".xq").hide();
			$(".pinjia").show();
		}
		if($(this).is(".dd")){
			$(".pinjia").hide();
			$(".xq").show();
		}
	});
});

$(function(){
  $.cookie.json=true;
  var usename=$.cookie("use");
  if(usename){
    $(".d").hide();
   $(".dl").show().find("span").text(usename);
  }

  $("#tc").click(function(e){
    e.preventDefault();
     $(".d").show();
   $(".dl").hide();
   console.log("in");
   $.cookie("use",usename,{expires:-1,path:'/'});
  });

});