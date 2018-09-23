//<link rel="stylesheet" type="text/css" href="../js/scroll.css">


//用户注册部分
var oForm = document.querySelector("form");
oForm.onsubmit=function(){
	if(flagTel&&flagPwd&&flagYz&&flagYz){
		return true;
	}
	location.href="../login/login.html"
}
//注册手机号验证
var flagTel = null;
$id("tel").onblur=function(){
	var reg =/^1[35|38|58|88]\d{9}$/;
	var str = $id("tel").value;
	if(reg.test(str)){
		$id("s1").innerHTML = "OK";
		$id("s1").style.color = "green";
		flagTel=true;
	}else{
		$id("s1").innerHTML = "请输入正确的十一位手机号";
		$id("s1").style.color = "red";
		flagTel=false;
	}
}
//密码验证
var flagPwd =null;
$id("pwd").onblur=function(){
	var reg = /^\w{6,20}$/;
	var str = $id("pwd").value;
	if(str.length<6 || str.length>20 ){
		$id("s2").innerHTML = "请输入长度为6至20位密码";
		$id("s2").style.color = "red";
		flagPwd=false;
	}else{
		$id("s2").innerHTML = "OK";
		$id("s2").style.color = "green";
		flagPwd=true;
	}
}
//短信验证码部分
var flagYz = null;
$id("yz").onblur=function(){
	var reg = /^123456$/;
	var str = $id("yz").value;
	if(reg.test(str)){
		$id("s3").innerHTML = "OK";
		$id("s3").style.color = "green";
		flagYz=true;
	}else{
		$id("s3").innerHTML = "验证码错误";
		$id("s3").style.color = "red";
		flagYz=false;
	}
}
//用户协议
var flagChe=null;
if($id("che").checked){
	flagChe= true;
}else{
	flagChe= false;
}

//cookie存注册手机号和密码
function setCookie( key , value ,day ){
	if( day ){
		var now = new Date();
		now.setDate( now.getDate() + day );
		document.cookie = key +"=" + value + ";expires="+now;
	}else{
		document.cookie = key +"=" + value;
	}
}
var txtName = document.querySelector("#tel");
var txtPwd = document.querySelector("#pwd");
var arr = []; 
$id("btn1").onclick=function(){
	var strName = txtName.value;
	var strPwd = txtPwd.value;
	arr.push({
		"username":strName,
		"userpwd":strPwd
	})
	document.cookie="userlist="+JSON.stringify(arr);
}
setCookie("userlist",JSON.stringify(arr))

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