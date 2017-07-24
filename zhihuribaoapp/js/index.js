$(document).ready(function(){
	// 改变banner高度
 	$(".banner").height($(window).height()/3);

 	// 获取数据
	$.getJSON("https://zhihu-daily.leanapp.cn/api/v1/last-stories", function(data) {
        // 获取banner图片
        addBanner(data.STORIES.top_stories);
        // banner图片滑动效果插件
	 	$('.banner-box ul').cycle({
            fx : 'fade',
            speed : 600,
            pager : '.banner-box .banner-btn'
        });
	 	// 新闻列表获取数据
	 	addNews(data.STORIES.stories);
	 	// 初始化date的时间，用于处理到达底部多少次而加载多少天前的内容
  		var times = 0
  		// 监控滚动条实现到达底部自动加载内容
	  	$(window).scroll(function() {
		    //$(document).scrollTop() 获取垂直滚动的距离
		    //$(document).scrollLeft() 这是获取水平滚动条的距离
		    // 达到顶部，可用于下拉刷新处理
		    if ($(document).scrollTop() <= 0) {
		        // alert("滚动条已经到达顶部为0");
		    }
		    // 达到底部，自动加载前一天内容
		    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
		    	var date = data.STORIES.date-times;
		    	var dayId = "https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+date;
		    	$.getJSON(dayId,function(data){
		    		addDate(times);
        			addNews(data.STORIES.stories);
        		})
		    	times++;
		    }
		});

    });
// 增加banner图片
function addBanner(s){
	$.each(s, function(i, item) {
        	$(".banner-img").append(
        		"<li onclick='moreContent("+item.id+")'>"+
        			"<a href='javascript:;'' title=''>"+
        				"<img src="+item.image+" />"+
        				"<span>"+item.title+"</span>"+
        			"</a>"+
        		"</li>"	
        	);
        	changeSrc();
        });
};
// 增加新闻内容
function addNews(s,t){
	$.each(s, function(i, item) {
        	$(".con-list ul").append(
        		"<li class='con-list-box' onclick='moreContent("+item.id+")'>"+
					// "<a href=''>"+
						"<span class='fl'>"+item.title+"</span>"+
						"<img class='fr' src="+item.images+">"+
					// "</a>"+
				"</li>"	
        	);
        	changeSrc();
        });
};
// 增加日期
function addDate(d){
	var dd = new Date(); 
		dd.setDate(dd.getDate()-d);//获取d天后的日期
		var m = dd.getMonth()+1;//获取当前月份的日期 
		var d = dd.getDate();
		$(".con-list ul").append(
			"<p class='con-title'>"+m+"月"+d+"日"+"</p>"
		); 
};



})

function moreContent(id){
	$("html,body").animate({scrollTop:0}, 0);
	var moreId = "https://zhihu-daily.leanapp.cn/api/v1/contents/"+id;
	$.getJSON(moreId,function(data){
		// alert(data.CONTENTS.body);
		// alert(moreId);
		$("body").html("");
		// alert(data.CONTENTS.image);
		$("body").append(
			"<div class='top-nav'>"+
				"<a href='index.html'>"+
					"<img src='images/back.png' class='fl'>"+
				"</a>"+
			"</div>"+
			"<div class='more-banner'>"+
		        "<img src="+data.CONTENTS.image+" />"+
		        "<span class='span-1'>"+data.CONTENTS.title+"</span>"+
		        "<span class='span-2'>"+data.CONTENTS.image_source+"</span>"+
    		"</div>"+
			data.CONTENTS.body
		);
	$(".more-banner").height($(window).height()/3);
	$(".answer .content img").width($(window).width()-40);
	changeSrc();
	});
}
// 转换图片的src，用于图片防盗链
function changeSrc() {
	// 获取有多少张图片
	var imgs = document.getElementsByTagName("img");
	// 循环每一张图片
	for(i=0;i<imgs.length;i++){
		// 改变图片的src地址，加上前缀
		var newSrc = imgs[i].src.replace(/http\w{0,1}:\/\/p/g, "https://images.weserv.nl/?url=p");
		// 更改图片src
		imgs[i].src = newSrc;		
	}
  }