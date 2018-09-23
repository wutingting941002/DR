//导航部分输入身份证查询时显示隐藏
$id("sub").onmouseover=function(){
	$id("span1").style.display="block";
}
$id("sub").onmouseout=function(){
	$id("span1").style.display="none";
}

//购物车显示准备结算的商品信息
window.onload=function(){  
    var arr = getCookie("im_type");
	var pro="";
    var str="";	
	for(var i=0;i<arr.length;i++){
        var shopinfo=arr[i];
		var qian=arr[i]["price"].split("￥")[1];
		str+=`<table>
				<tr>
					<td class="td_first" width=70 ><input type="checkbox" checked="checked" id="ck" class="ck"></td>
					<td width=128 ><img src="${shopinfo.image}" id="imgs"/></td>
					<td class="td_two" width=330 id="td_3"><a href="details.html" id="pname">${shopinfo.content}</a><i>求婚钻戒</i></td>
					<td class="f1" width=400>
						<span class="updateCount" id="add" width=30 height=30 border=1 >+</span>
						<span class="shop-count" id="number">${shopinfo.count}</span>
						<span class="updateCount" id="prep">-</span>
					</td>
					<td class="td_two_pirce" width=155 id="proce">${shopinfo.price}</td>
					<td class="td_two" width=175><button id="del" class="del">删除</button></td>
				</tr>
			</table>`;	
		pro+=`<p>已选 <i id="count">${shopinfo.count}</i>件商品 &nbsp;&nbsp;总价：<i id="money">${parseInt(shopinfo.count)*parseInt(qian)}</i> &nbsp;&nbsp;免运费</p>
			  <input type="button" name="" id="_count" value="立即结算" />`
	}
	
	$id("shop_content_3").innerHTML= str ;
	$id("shop_content_4").innerHTML= pro ;
    //点击删除按钮
	$(".del").click(function(){
        var pid=$(this).parent().find(".count").data("id");
        for(var i=0;i<arr.length;i++){
            if(pid==arr[i].id){
                arr.splice(i,1);
                setCookie("im_type",JSON.stringify(arr));
                $(this).parent().remove();
                break;
            }
        }
     });
    //加减操作
    $(".updateCount").click(function(){
        var pid=$(this).parent().data("id");
        var sign=parseInt($(this).data("number"));
        var count=$(this).parent().find(".shop-count").html();
        if(sign==-1&&count==1){
            return;
        }
        for(var i=0;i<arr.length;i++){
            if(pid==arr[i].id){
                arr[i].count+=sign;
                setCookie("im_type",JSON.stringify(arr));
                $(this).parent().find(".shop-count").html(arr[i].count);
                $(this).parent().next().html(arr[i].count*price+"元");
                break;
            }
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
			item = arr[i].split("=");
			if(item[0] == key){
				brr = item[1];
				return JSON.parse(brr);//如果找到 我们想要的键，将值转成数组返回 
			}
		}
		//如果cookie中 没有我们想获取的键值，直接返回一个空数组
		return [];
	}
	//如果cookie中没有数据，直接返回一个空数组
	return [];
}
function removeCookie(key){
	setCookie(key,"",-1);
}