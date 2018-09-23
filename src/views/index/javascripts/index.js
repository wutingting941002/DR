//定义一个函数  功能实现通过id查找页面元素  返回值就是一个页面元素
function $id(id){
	return document.getElementById(id);
}
//页面一加载,跳出弹框
window.onload=function(){
	var timer2="";
	$id("load").style.display="block";
//	点击关闭按钮,关闭弹框
	timer=setTimeout(function(){	
		$id("img").onclick=function(){
			$id("load").style.display="none";
		}
	})
//或3秒钟后自动关闭弹框
	timer2=setTimeout(function(){
		$id("load").style.display="none";
	},3000)
}

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

//鼠标滑过ul li时,显示隐藏div


//轮播图
var index=0;
var timer=null;
var ulist=$id("ulist").children;
var olist=$id("olist").children;
timer = setInterval(autoPlay,3000);
function autoPlay(){
	index++;
	for(var i=0;i<olist.length;i++){
		olist[i].className="";
		startMove(ulist[i],0,"opacity");
	}
	if(index==olist.length){
		index=0;
	}
	olist[index].className="current";
	startMove(ulist[index],100,"opacity");
}
for(let i=0;i<olist.length;i++){
	olist[i].onmouseover=function(){
		clearInterval(timer);
		index=i-1;
		autoPlay();
	}
	olist[i].onmouseout=function(){
		timer=setInterval(autoPlay ,3000);
	}
}

//鼠标滑过背景色字体颜色变色
$id("tex").onmouseover=function(){
	$id("tex").style.backgroundColor="#9b745c";
	$id("tex").style.color="#fff";
}
$id("tex").onmouseout=function(){
	$id("tex").style.backgroundColor="#eee8e2";
	$id("tex").style.color="#8b776c";
}

//底部微信二维码显示隐藏
$id("vx").onmouseover=function(){
	$id("wx").style.display="block";
}
$id("vx").onmouseout=function(){
	$id("wx").style.display="none";
}


function startMove(obj,target,attr){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var current = 0;
		//获取元素的实际宽度
		if( attr == "opacity" ){
			current = getStyle( obj, attr )*100;
		}else{
			current = parseInt( getStyle(obj,attr) ) ;
		}
		
		var speed = (target-current)/10;
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		if( current == target ){
			clearInterval( obj.timer );
		}else{
			if( attr == "opacity" ){
				obj.style["opacity"] = (current+speed)/100;
			}else{
				obj.style[attr] = current+speed + "px";
			}
		}
	},30 )
}

function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle( obj )[attr];
	}else{
		return obj.currentStyle[attr];
	}
}