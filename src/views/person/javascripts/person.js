//导航部分输入身份证查询时显示隐藏
$id("sub").onmouseover=function(){
	$id("span1").style.display="block";
}
$id("sub").onmouseout=function(){
	$id("span1").style.display="none";
}
//侧边导航效果
window.onscroll=function(){
	var h = document.documentElement.scrollTop || document.body.scrollTop;
	var y = 160;
	//侧边导航
	if(h>y){
		$id("side").style.position="fixed";
		$id("side").style.top=10;
		$id("side").style.display="block";
	}else{
		$id("side").style.position="static";
		$id("side").style.display="none";
		
	}
	//点击last返回顶部
	$id("last").onclick=function(){
		document.documentElement.scrollTop=0;
		$id("side").style.display="none";
	}
}
//点击li,显示隐藏
$id("ulist").onclick=function(e){
	var e =e ||event;
	e.stopPropagation();
	var target=e.target||e.srcElement;
	var str=target.parentNode.lastElementChild.style.display;
	if(target.tagName=="A"){
		if(str="none"){
			target.parentNode.lastElementChild.style.display="block";
		}
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