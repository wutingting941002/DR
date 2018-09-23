//吸顶和侧边导航效果
window.onscroll = function() {
	var h = document.documentElement.scrollTop || document.body.scrollTop;
	var y = 160;
	//吸顶效果
	if(h > y) {
		$id("led").style.position = "fixed";
		$id("led").style.top = 0;
		$id("led").style.display = "block";
	} else {
		$id("led").style.position = "static";
		$id("led").style.display = "none";

	}
	//侧边导航
	if(h > y) {
		$id("side").style.position = "fixed";
		$id("side").style.top = 10;
		$id("side").style.display = "block";
	} else {
		$id("side").style.position = "static";
		$id("side").style.display = "none";

	}
	//点击last返回顶部
	$id("last").onclick = function() {
		document.documentElement.scrollTop = 0;
		$id("side").style.display = "none";
	}
}

//导航部分输入身份证查询时显示隐藏
$id("text").onmouseover = function() {
	$id("span1").style.display = "block";
}
$id("text").onmouseout = function() {
	$id("span1").style.display = "none";
}

//轮播图
var index = 0;
var timer = null;
var ulist = $id("ulist").children;
var olist = $id("olist").children;
timer = setInterval(autoPlay, 2000);

function autoPlay() {
	index++;
	for(var i = 0; i < olist.length; i++) {
		olist[i].className = "";
		startMove(ulist[i], 0, "opacity");
	}
	if(index == olist.length) {
		index = 0;
	}
	olist[index].className = "current";
	startMove(ulist[index], 100, "opacity");
}
for(let i = 0; i < olist.length; i++) {
	olist[i].onmouseover = function() {
		clearInterval(timer);
		index = i - 1;
		autoPlay();
	}
	olist[i].onmouseout = function() {
		timer = setInterval(autoPlay, 2000);
	}
}

//从服务器获取列表数据
window.onload=function(){
	$.ajax({
			type:"get",
			url:"list.json?id="+new Date().getTime(),
			async:true,
			success : function(json){
				for( var love in json ){
					var str="";
					for( var j = 0 ; j < json[love].list.length ; j++ ){
						var pro = json[love].list[j];
							str += `<div>
								        <a href="details.html"><img src="${pro.image}" id="imgs"></a>
								        <p class="p1" id="p1">${pro.price}</p>
								        <p class="p2" id="p2">${pro.content}</p>
								        <button  id="class1" pid="${pro.id}" name="${pro.content}" src="${pro.image}" price="${pro.price}">加入购物车</button><a href="../cabinet/cabinet.html"><i class="i2">立即购买</i></a>
								        <p class="p3">评价:<span>${pro.elvate}</span></p> 
							        </div>`;						
					}
					$(".im_type").html( str );
				}
				
			}
		});
		var arr=[];
		$(".im_type").on("click","button",function(){
			var json={								
				pid:$(this).attr("id"),
				name:$(this).attr("name"),
				image:$(this).attr("image"),
				price:$(this).attr("price"),
				count:1
			}
			var cookieInfo=getCookie("im_type");
			var flag=true;
			if(cookieInfo.length!=0){
				arr=cookieInfo;
				for(var i=0;i<arr.length;i++){
					if(json.id==arr[i].id){
						arr[i].count++;
						flag=false;
						break;
					}
				}
			}
			if(flag){
				arr.push(json);
			}
			setCookie("im_type",JSON.stringify(arr));
			
			if(!confirm("确定-继续购物,取消-去结算")){
				location.href="../car/car.html";
			}
		})
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

function startMove(obj,target,attr,callback){
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
			//进入下一个动作（功能、方法 、函数） 
			//动作是可变的
			//调用下一个动作
			if( callback ){
				callback();
			}
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


function setCookie(key,value,days){
	var now = new Date();
	now.setTime(now.getTime() + days*24*60*60*1000 ) 
	document.cookie=key+"="+value + ";expires="+now;
}
function getCookie(key){
	//如果cookie中有数据  才可以获取数据
	if(document.cookie){		
		var cookieInfo = document.cookie;
		//cookie中可能会包含一些 额外的数据，这些数据特点是由   分号和空格间隔的
		//所以 先将 分号和空格  替换掉   替换成  ;
		var arr = cookieInfo.replace(/;\s/g,';').split(";");	
		for(var i=0;i<arr.length;i++){
			var item = arr[i].split("=");
			if(item[0] == key){
				var brr = item[1];
				return JSON.parse(brr);//如果找到 我们想要的键，将值转成数组返回 
			}
		}
		//如果cookie中 没有我们想获取的键值，直接返回一个空数组
		return [];
	}
	//如果cookie中没有数据，直接返回一个空数组
	return [];
}