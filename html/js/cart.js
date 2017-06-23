$(function(){
	$.cookie.json=true;
	var _products=$.cookie("products")||[];
	 // if(_products.length===0){
	 // 	location="list.html";
	 // 	return;
	 // }
	 
	 var data={
	 	products:_products
	 };	

  var html=template("moban", data);
	 $(html).insertBefore("tfoot").filter("tbody").each(function(index,element){
	 $(element).data("product",_products[index]);

     var a=$(this).data("product").price,
         b=$(this).data("product").amount;

    $(this).find(".danjia").text((a*b).toFixed(2)); 
	$(this).find(".xiaoji").children().text((a*b).toFixed(2)); });
	  /***********************************************/	
	  //删除
      $("#list").on("click", ".del", function(){
				// e.preventDefault();
				
				// 删除超级链接所在行
				var $row = $(this).parents("tbody");
				// 删除的商品对象
				var _product = $row.data("product");
				// 找出在数组中的下标
				var index = $.inArray(_product, _products);
				// 从数组中删除 index 处元素
				_products.splice(index, 1);
				// 从dom结构中删除行
				$row.remove();
				calcTotal();
				// 从 cookie 中删除当前行的数据
				$.cookie("products", _products, {expires:7});
				 
			});    
        /*全选*/
        $(".ck_all").click(function(){
				// 获取当前全选框选中状态
				var status = $(this).prop("checked");
				// 设置所有商品复选框状态与全选一致
				$(".ck_product").prop("checked", status);
				// 计算合计
				calcTotal();
			});
            //单选
            $(".body :checkbox").click(function(){
				// 计算合计
				calcTotal();
				// 当所有商品行前的复选框选中时，将全选设置为选中状态，否则取消全选选中
				if ($(".body :checkbox:checked").length === _products.length) {
					$(".ck_all").prop("checked", true);
				} else{
					$(".ck_all").prop("checked", false);
				}
			});
         
       /* 修改商品数量：加、减 */
			$("#list").delegate("#add,#minus", "click", function(){
				// 获取点击符号所在行
				
				var $row = $(this).parents("tbody");
				// 获取行上缓存的商品对象
				
				var _product = $row.data("product");
				// console.log(_product);
				// 修改界面显示数量
				if ($(this).is("#add")){ // 当前点击的是 + 
					++_product.amount;
             
				} else{ // 点击的是 -
					if (_product.amount <= 1)
						return;
					--_product.amount;
				}
				$row.find(".amount").val(_product.amount);
				// 修改显示小计
				$row.find(".danjia").text((_product.price * _product.amount).toFixed(2)); 
				$row.find(".xiaoji").children().text((_product.price * _product.amount).toFixed(2));
				// 显示合计
				calcTotal();
				// 修改cookie
				$.cookie("products", _products, {expires:7});
			});

        /* 输入实现修改 */
			$("#list").on("blur", ".amount", function(){
				var _product = $(this).parents("tbody").data("product");
				var reg = /^[1-9]\d*$/;
				if (!reg.test($(this).val())) {
					$(this).val(_product.amount);
					return;
				}
				// 输入数量正确
				_product.amount = $(this).val();
				// 修改小计显示
				$(this).parents("tbody").find(".danjia").text((_product.price * _product.amount).toFixed(2));
				$(this).parents("tbody").find(".xiaoji").children().text((_product.price * _product.amount).toFixed(2));
				// 合计
				calcTotal();
				// 修改 cookie
				$.cookie("products", _products, {expires:7});
			});












           
	  			/* 合计 */
			function calcTotal() {
				var _total = 0;
				$(".body input:checked").each(function(index, element){
					_total += Number($(element).parents(".body").next().find(".xiaoji").children().text());
				});
				$("#total").text(_total.toFixed(2));
				// _total.toFixed(2)
			}
});

$(function(){
  $.cookie.json=true;
  var usename=$.cookie("use");
  if(usename){
    $(".d").hide();
   $(".dl").show().find("span").text(usename);

  }else{
  	alert("请登录之后查看购物车");
  	location="login.html";
  }

  $("#tc").click(function(e){
    e.preventDefault();
     $(".d").show();
   $(".dl").hide();
   console.log("in");
   $.cookie("use",usename,{expires:-1,path:'/'});
  });

});