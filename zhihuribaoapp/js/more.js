$(document).ready(function(){
	var key = localStorage.getItem("newId");
	var hKey = localStorage.getItem("wHeight");
	localStorage.setItem("height",hKey);
	moreContent(key);
})
