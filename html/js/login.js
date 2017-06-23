$(function(){
    
     // $(".rem").click(function(){
     //    if($(".rem").is(":checked")){
     //         console.log(1);
     //        }          
     // });  
      
       $.cookie.json=true; 
       var _pros=$.cookie("mes")||[];
     //    if(_pros.length===0){
     //    alert("请注册");
     //    return;
     // }
	$("#btn").click(function(){   
	var usename1=$(".usename1 input").val(),
	    password1=$(".password input").val();
	    var name=usename1;
     
    for(var i=0,len=_pros.length;i<len;i++){
    	if(usename1==_pros[i].usename&&password1==_pros[i].password){
    		alert("登陆成功");
    		location="../index.html";
//         location="list.html";
//         console.log(_pros[i].usename);
    		$.cookie("use",name,{expires:4,path:'/'});
           
    	}
       else{
            console.log("IN");
            alert("账号密码错误");
        }   
    }

	});
	
});