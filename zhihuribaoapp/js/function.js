
	// 增加banner图片
	function addBanner(s){
		$.each(s, function(i, item) {
	        $(".banner-img").append(
	        	"<li onclick='saveId("+item.id+")'>"+
	        		"<a href='more.html'' title=''>"+
	        			"<img src="+item.image+" />"+
	        			"<span>"+item.title+"</span>"+
	        		"</a>"+
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

// 文章详情页
function moreContent(id){
	// $("html,body").animate({scrollTop:0}, 0);
	var moreId = "https://zhihu-daily.leanapp.cn/api/v1/contents/"+id;
	$.getJSON(moreId,function(data){
		// alert(data.CONTENTS.body);
		// alert(moreId);
		$("body").html("");
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
// 添加id缓存到本地缓存区，用于新页面调用
function saveId(id){
	localStorage.setItem("newId",id);
	localStorage.setItem("wHeight",$(document).scrollTop());

}

// 增加新闻内容
	function addNews(s,t){
		$.each(s, function(i, item) {
		changeSrc();
	        $(".con-list ul").append(
	        	"<li class='con-list-box' onclick='saveId("+item.id+")'>"+
					"<a href='more.html'>"+
						"<span class='fl'>"+item.title+"</span>"+
						"<img class='fr' src="+item.images+">"+
					"</a>"+
				"</li>"	
	        );
	        changeSrc();
	    });
		//重缓存里拿到高度，判断高度加载内容，然后把高度跳到之前位置。
		var wHeight = localStorage.getItem("height");
		   	if($(document).height() - $(window).height()<=wHeight){
		       	$.getJSON("https://zhihu-daily.leanapp.cn/api/v1/last-stories", function(data) {
		        	var date = data.STORIES.date-times;
				    var dayId = "https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+date;
				    $.getJSON(dayId,function(data){
				    	addDate(times);
		        		addNews(data.STORIES.stories);
		        	})
		    		times++;
		        })
		    }else{
		        $('body,html').animate({ scrollTop: wHeight }, 0);
		        	$(window).scroll(function() {
		        		localStorage.setItem("height",$(document).scrollTop());
		        	})
		    }
	};
