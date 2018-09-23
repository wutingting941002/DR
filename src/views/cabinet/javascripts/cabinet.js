//吸顶和侧边导航效果
window.onscroll=function(){
	var h = document.documentElement.scrollTop || document.body.scrollTop;
	var y = 160;
	//吸顶效果
	if(h>y){
		$id("led").style.position="fixed";
		$id("led").style.top=0;
		$id("led").style.display="block";
	}else{
		$id("led").style.position="static";
		$id("led").style.display="none";
		
	}
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

//导航部分输入身份证查询时显示隐藏
$id("text").onmouseover=function(){
	$id("span1").style.display="block";
}
$id("text").onmouseout=function(){
	$id("span1").style.display="none";
}

//商品头部鼠标滑过变色
$id("p").onmouseover=function(e){
	var e=e||event;
	var target=e.target||e.srcElement;
	if(target.tagName=="A"){
		target.style.color="#9b745c";
	}
	target.onmouseout=function(){
		target.style.color="#333";
	}
}
//放大镜部分
var box=$id("box");
var middle=$id("middle");
var big=$id("big");
var mask=$id("mask");
var bigImg=$id("bigImg");
middle.onmouseover=function(){
	mask.style.display="block";
	big.style.display="block";
}
middle.onmouseout=function(){
	mask.style.display="none";
	big.style.display="none";
}
var smallImg=$id("small").children;
for(var i=0;i<smallImg.length;i++){
	smallImg[i].index=i;
	smallImg[i].onclick=function(){
		$id("m").src="../images/"+"bg"+(this.index+1)+".jpg"
		$id("bigImg").src="../images/"+"bg"+(this.index+1)+".jpg"
	}
}
middle.onmousemove=function(e){
	var e=e||event;
	var x=e.pageX-middle.offsetLeft-mask.offsetWidth/2;
	var y=e.pageY-middle.offsetTop-mask.offsetHeight/2;
	var maxL=middle.offsetWidth-mask.offsetWidth;
	var maxT=middle.offsetHeight-mask.offsetHeight;
	x=x<0?0:(x>maxL?maxL:x);
	y=y<0?0:(y>maxT?maxT:y);
	mask.style.left=x+"px";
	mask.style.top=y+"px";
//	分析大图向上或向左移动的距离
//	比例关系 ： 大图的left/mask的left = (大图宽度-大图显示区宽度)/(small的宽度-mask的宽度) 
//	大图的left/mask的left = 大图宽度/小图宽度  = 大图显示区宽度/mask宽度
	var bigImgLeft=x*(bigImg.offsetWidth)/(middle.offsetWidth);
	var bigImgTop=y*(bigImg.offsetHeight)/(middle.offsetHeight);
	bigImg.style.left=-bigImgLeft+"px";
	bigImg.style.top=-bigImgTop+"px";
}
//点击加入购物车或者立即购买,弹出对话框
$id("btn1").onclick=function(){
	$id("none").style.display="block";
	$id("close").onclick=function(){
		$id("none").style.display="none";
	}
	$id("button").onclick=function(){
		location.href="shoppingcar.html";
	}
}
$id("btn2").onclick=function(){
	$id("none").style.display="block";
	$id("close").onclick=function(){
		$id("none").style.display="none";
	}
	$id("button").onclick=function(){
		location.href="shoppingcar.html";
	}
}
//热门搭配部分的轮播图
var target=0;
$id("ad").onmouseover=function(){
	$id("arr").style.display="block";
}
$id("ad").onmouseout=function(){
	$id("arr").style.display="none";
}
$id("left").onclick=function(){
	if(target==-1*300){
		target=-1*3000;
	}else{
		target-=300;
		startMove($id("imgs"),target,"left");
	}
}
$id("right").onclick=function(){
	if(target==0){
		target=0;
	}else{
		target+=300;
		startMove($id("imgs"),target,"right");
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