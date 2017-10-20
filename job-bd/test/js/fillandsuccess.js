var number = localStorage.number;
// console.log(number);
var contentName = '';
if (number == 1) {
  contentName = '20元国内机票现金劵';
};
if (number == 2) {
  contentName = '定制扇子';
};
if (number == 3) {
  contentName = '定制书签';
};
if (number == 4) {
  contentName = '100元国际机票现金劵';
};
if (number == 5) {
  contentName = '30元国内机票现金劵';
};
if (number == 6) {
  contentName = 'A380机模';
};
if (number == 7) {
  contentName = '定制U型枕';
};
if (number == 8) {
  contentName = '免费机票';
};
$(".content").append('获得' + contentName);

function changerRouter() {
  var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
  var str = $(".fillin").val();
  console.log(str);
  if (!username.test(str)||str.length<3) {
    alert("对不起，您输入的名字格式不正确!");
    return false;
  }
  else {
    self.location='success.html'; 
  }
}
