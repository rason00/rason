$(document).ready(function(){
// 获取缓存中的id内容
	var key = localStorage.getItem("newId");
// 获取缓存中的高度
	var hKey = localStorage.getItem("wHeight");
// 把高度赋值给另一个缓存里的key
	localStorage.setItem("height",hKey);
// 以id获取相关详情内容
	moreContent(key);
})
