$(document).ready(function(){
	$(".phone").addClass("phone1");
	setTimeout(function () { 
		$(".banner-right").addClass("phone1");
    }, 500);

	$.getJSON("https://zhihu-daily.leanapp.cn/api/v1/last-stories", function(data) {
        $(".content-main").html("");//清空内容
        appendDiv(data.STORIES.stories);
        var todayId = data.STORIES.date;
        yAppendDiv(todayId);
        var ddayId = todayId-1;
        yAppendDiv(ddayId);
    });

function yAppendDiv(dayId){
	 var tdayId = "https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+dayId;
        $.getJSON(tdayId,function(data){
        	appendDiv(data.STORIES.stories);
        })
}

function appendDiv(j){	
	$.each(j, function(i, item) {
		if($(".content-main").children().length>=30){return};
        	$(".content-main").append(
        	"<div class='main-box fl'><a href='http://daily.zhihu.com/story/"+ item.id +"' class='link'><img src="+item.images+" alt='' class='main-img'><span class='main-title'>"+item.title+"</span></a></div>"
				);        	
        });
}

$(".readmore").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });

		
		$(window).scroll(function(){
			
			if($("body").scrollTop()>1000){
				$(".gotop").css("display","block");
			}else{
				$(".gotop").css("display","nore");
			}
			})



	if ($("body").scrollTop()>600) {
		$(".gotop").css("display","block");
	}else{
		$(".gotop").css("display","nore");
	}



})