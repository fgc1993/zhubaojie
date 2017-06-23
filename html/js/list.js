$(function(){
  	$.ajax({
  		url:"data/new_file.json",
  		type:"get",
  		dataType:"json",
  		success:function(responseData){
  			// console.log(responseData);
            var data={
            	products:responseData
            };
            var html=template("prod_template",data);
            $("#container .container_con").append(html);
  		}
  	});
});

                      /*添加商品到购物车*/
$(function(){
	$("#container").on("click",".con .link_right",function(){
		var $row=$(this).parents(".con"),
		    // a=parseFloat( $row.children().eq(2).text().replace(/[^0-9]/ig,"")) ,
		    
		    product={
		    	id:$row.children().eq(0).text(),
		    	url:$row.children().eq(1).find(".img-t").children().attr("src"),
		    	price: $row.children().eq(1).find(".price").text().slice(1),//截取数字
		    	sm:$row.children().eq(1).find(".sm").text(),
		    	amount:1
		    };
		 // var a= $row.children().eq(1).find(".img-t").children().attr("src") ;
		 // console.log(a);
		$.cookie.json=true;
		var _products=$.cookie("products")||[];
	    var _index = indexOf(product.id, _products);
//      var _index=$.inArray(product,_products);
		
		if (_index === -1) { // 以前未选购
					_products.push(product);
				 } 
				 else { // 以前有选购当前的商品
					_products[_index].amount=1;
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
});
$(function(){
  $.cookie.json=true;
  var usename=$.cookie("use");
  console.log(usename);
  if(usename){
    $(".d").hide();
   $(".dl").show().find("span").text(usename);

  }
  $(".cart").click(function(){
  	 if(!usename){
  	 	alert("请登录");
  	 	location="login.html";
  	 }
  });

  $("#tc").click(function(e){
    e.preventDefault();
     $(".d").show();
   $(".dl").hide();
   console.log("in");
   $.cookie("use",usename,{expires:-1,path:'/'});
  });
});
//获取当前商品编号
$(function(){
   $("#container").on("click",".con .dianji",function(){
   	var $id=$(this).prev().text();
   	$.cookie("number",$id,{expires:4,path:"/"});
   	console.log($id);
   });
});