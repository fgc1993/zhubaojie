$(function(){
       // var a=[1,3,5,7],
       //     b=4;
       //     a.push(b);
       //     console.log(a);


             $.cookie.json=true;
          var _pros=$.cookie("mes")||[];
	$("#btn").click(function(){
          var $usename=$(".usename1 input").val(),
              $password=$(".password input").val(),
              mes={
              	"usename":$usename,
              	"password":$password
              };

          
          var _index=indexOf(mes.usename,_pros);
          // console.log(_index);
          if(_index===-1){
          _pros.push(mes);
          // console.log(_pros);
            alert("注册成功，请登录");
            location="login.html";
          }else{
          	alert("用户已被注册");
          }   
          console.log(_pros);
        $.cookie("mes",_pros,{expires:4,path:"/"});
	});
	function indexOf(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (id === products[i].usename)
						return i;
				}

				return -1;
			}
});