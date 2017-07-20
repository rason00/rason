$(document).ready(function(){
	// 动态加载class使css3的过度动画显现
	$(".phone").addClass("phone1");
	setTimeout(function () { 
		$(".banner-right").addClass("phone1");
    }, 500);
// 获取json数据
	$.getJSON("https://zhihu-daily.leanapp.cn/api/v1/last-stories", function(data) {
        $(".content-main").html("");//清空内容
        appendDiv(data.STORIES.stories);
        var todayId = data.STORIES.date;
        yAppendDiv(todayId);
        var ddayId = todayId-1;
        yAppendDiv(ddayId);
    });
// 加载前一天的数据
function yAppendDiv(dayId){
	 var tdayId = "https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+dayId;
        $.getJSON(tdayId,function(data){
        	appendDiv(data.STORIES.stories);
        })
};
// 动态加载内容的装载内容的盒子
function appendDiv(j){	
	$.each(j, function(i, item) {
		var imagesUrl = item.images;
	// 转换url
		// 把obj转换成string字符串，方便replace替换
		var str = JSON.stringify(imagesUrl);
		// 转换用images.weserv.nl中间缓存图片
		var newurl = str.replace(/http\w{0,1}:\/\/p/g, "https://images.weserv.nl/?url=p");
		// string转换obj
		var str1 = JSON.parse(newurl)
	// 转换结束
		if($(".content-main").children().length>=30){return};
        	$(".content-main").append(
        	"<div class='main-box fl'><a href='http://daily.zhihu.com/story/"+ item.id +"' class='link'><img src="+str1+" alt='' class='main-img' id='main-img'><span class='main-title'>"+item.title+"</span></a></div>"
				);        	
        });
};
// 控制返回顶部的过度样式和功能
$(".readmore").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });

	// 已窗口滑动了多少来控制返回顶部显示和隐藏 
	$(window).scroll(function(){		
		if($("body").scrollTop()>1000){
			$(".gotop").css("display","block");
		}else{
			$(".gotop").css("display","nore");
		}
	});

})
