$(document).ready(function(){
	// 改变banner高度
 	$(".banner").height($(window).height()/3);
 	// 获取数据
	$.getJSON("https://zhihu-daily.leanapp.cn/api/v1/last-stories", function(data) {
        // 获取banner图片
        addBanner(data.STORIES.top_stories);
        // banner图片滑动效果插件
	 	var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay : 5000,
            speed:200,
            autoplayDisableOnInteraction : false,

            // 如果需要分页器
            pagination: '.swiper-pagination',
        })
	 	// 新闻列表获取数据
	 	addNews(data.STORIES.stories);
	 	// 初始化date的时间，用于处理到达底部多少次而加载多少天前的内容
  		times = 0
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
})
// 关闭或刷新窗口时，把高度缓存该为0，让下次进入是从最上面开始浏览
	window.onbeforeunload = function(event) { 
		localStorage.setItem("height",0);
	} 
