$(document).ready(function () {
	// 动态加载class使css3的过度动画显现
	$(".phone1").addClass("phone2");
	setTimeout(function () {
		$(".banner-right").addClass("banner-right2");
	}, 500);
	// 获取json数据
	$.getJSON("https://zhihu-daily.leanapp.cn/api/v1/last-stories", function (data) {
		appendDiv(data.STORIES.stories);
		var todayId = data.STORIES.date;
		yAppendDiv(todayId);
		var ddayId = todayId - 1;
		yAppendDiv(ddayId);
	});
	// 加载前一天的数据
	function yAppendDiv(dayId) {
		var tdayId = "https://zhihu-daily.leanapp.cn/api/v1/before-stories/" + dayId;
		$.getJSON(tdayId, function (data) {
			appendDiv(data.STORIES.stories);
		})
	};
	// 动态加载内容的装载内容的盒子
	function appendDiv(j) {
		if ($(".content-news a").length == 0) { var z = 0; };

		$.each(j, function (i, item) {
			if ($(".content-news a").length >= 30) { return };
			if ($(".content-news a").length >= 10) { z = 1; };
			if ($(".content-news a").length >= 20) { z = 2; };
			$("." + z).append(
				"<a href='http://daily.zhihu.com/story/"+ item.id +"'>" +
				"<div class='card card-box'>" +
				"<img class='card-img-top' src=" + item.images + ">" +
				"<div class='card-block'>" +
				"<p class='card-text'>" + item.title + "</p>" +
				"</div>" +
				"</div>" +
				"</a>"
			);
			changeSrc();
		});
	};
	function changeSrc() {
		// 获取有多少张图片
		var imgs = document.getElementsByTagName("img");
		// 循环每一张图片
		for (i = 0; i < imgs.length; i++) {
			// 改变图片的src地址，加上前缀
			var newSrc = imgs[i].src.replace(/http\w{0,1}:\/\/p/g, "https://images.weserv.nl/?url=p");
			// 更改图片src
			imgs[i].src = newSrc;
		}
	}
	// 控制返回顶部的过度样式和功能
	$(".read-more").click(function () {
		var speed = 200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	});
	//点击浏览内容按钮跳转
	$(".btn1").click(function () {
		var speed = 200;//滑动的速度
		$('body,html').animate({ scrollTop: 500 }, speed);
		return false;
	});
	// 已窗口滑动了多少来控制返回顶部显示和隐藏 
	$(window).scroll(function(){

		if($("body").scrollTop()>1000){
			$(".gotop").css("display","block");
		}
		if($("body").scrollTop()<1000){
			//console.log($("body").scrollTop());
			$(".gotop").css("display","none");
		};
	// 用滑动距离监控，切换头部两个按钮的样式
		if($("body").scrollTop()>=500){
			$(".btn1").addClass("nav-active")
			$(".btn2").removeClass("nav-active");
		}else{
			$(".btn1").removeClass("nav-active");
			$(".btn2").addClass("nav-active")
		};
	});
})
