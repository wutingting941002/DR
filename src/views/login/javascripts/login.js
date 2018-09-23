 //点击看不起，刷新验证码
 $id("btn2").onclick=function(){
	$id("yzm").value = "123456";
}

//登陆验证
var oForm = document.querySelector("form");
oForm.onsubmit=function(){
   if(flagYz){
	   return true;
   }
   return false;
}
//验证码验证
var flagYz = null;
$id("yz").onblur=function(){
	var str=$id("yz").value;
	var strYzm=$id("yzm").value;
	if(str==strYzm){
		$id("s3").innerHTML="OK"
		flagYz=true;
	}else{
		$id("s3").innerHTML="验证码错误"
		flagYz=false;
	}
}
//获取cookie
function getCookie(key){//tel
   var str = document.cookie;
   if( str ){ //如果cookie存在  根据key取对应的值
	   str = str.replace( /\s/g ,"");//去掉cookie中的空格
	   var arr = str.split(";");//将字符串拆成数组
	   for( var i = 0 ; i < arr.length ; i++ ){
		   var item = arr[i].split("=");
		   if( item[0] == key ){
			   return item[1];
		   }
	   }
	   //循环结束后 如果没有找到对应的key   返回""
	   return "";
   }
   //cookie 不存在  返回""
   return "";
}
var str=getCookie("userlist");
console.log(str)
var arr = JSON.parse( str );
//cookieName = item[1];
//cookiePwd = item[1];
for( var i = 0 ; i < arr.length ; i++ ){
   var item = arr[i];
   if( item[0] == "username" ){//取用户名
	   cookieName = item[1];
	   alert(cookieName)
   }
   if( item[0] == "userpwd" ){//取密码
	   cookiePwd = item[1];
   }	
}

var txtName = document.querySelector("#tel");
var txtPwd = document.querySelector("#pwd");
//获取用户输入的用户名和密码
var tname=txtName.value;
var tpwd=txtPwd.value;
$id("btn1").onclick=function(){
   if(cookieName==tname&&cookiePwd==tpwd){
	   location.href = "index.html";
   }else{
	   alert("用户名或者密码错误");
   }
   
}

//底部微信二维码显示隐藏
$id("vx").onmouseover=function(){
   $id("wx").style.display="block";
}
$id("vx").onmouseout=function(){
   $id("wx").style.display="none";
}

//定义一个函数  功能实现通过id查找页面元素  返回值就是一个页面元素
function $id(id){
	return document.getElementById(id);
}	