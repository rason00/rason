$(document).ready(function () {
    $(".nav-left>ul").find("li a").eq(0).addClass("on");
    $(".nav-left>ul>li").last().addClass("nobg");
    //控制首页颜色和导航最后一个无背景
    $(".nav-left ul li").hover(function(){
        $(this).find(".s-nav").stop( true,true).fadeIn(300);
    },function(){
        $(this).find(".s-nav").stop(true,true).fadeOut(100);
    });
    //控制导航栏二级菜单显示隐藏。
    $(".con-con").eq(0).removeClass("box-off");
    $(".con-con").eq(0).find(".t-eh").addClass("eh-on");
    $(".con-con").eq(0).find(".cbottom-left ul li").animate({width:'410px'});
    $(".con-con").eq(0).find(".cbottom-right").fadeIn(300);
    $(".con-con").mouseenter(function(){
        //更改选中菜单图标
        $(this).find(".t-eh").addClass("eh-on");
        $(this).siblings().find(".t-eh").removeClass("eh-on");
        //更改显示长度，用省略号显示
        $(this).find(".cbottom-left ul li").stop(false,false).animate({width:'410px'});
        $(this).find(".cbottom-right").stop(true,true).fadeIn(300);
        $(this).siblings().find(".cbottom-left ul li").stop(false,false).animate({width:'188px'});
        $(this).siblings().find(".cbottom-right").stop(true,true).fadeOut(100);
        //更改选中框长度
        $(this).removeClass("box-off").stop(false,false).animate({width:'546px'}).siblings().addClass("box-off").stop(false,false).animate({width:'218px'}).find("img").stop(true,true).fadeOut(100);
        $(this).find("img").stop(true,true).fadeIn(300);
    });
    //控制三栏的切换效果。
});

