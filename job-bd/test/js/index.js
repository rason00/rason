//share份额[数字没有默认],
//speed速度[单位s,最小0.1s],
//velocityCurve速度曲线[linear匀速，ease慢快慢，ease-in慢慢开始，ease-out慢慢结束，ease-in-out慢快慢等，用的是css3的速度曲线],可以不写，ease默认值；
//callback回调函数
//weeks几周[默认2周，可以不写]
//几份和回调函数这两个参数是必填
function callbackA(ind) {
  return ind;
};

var newdraw = new turntableDraw('.pointer', {
  share: 8,
  speed: "3s",
  velocityCurve: "ease",
  weeks: 6,
  callback: function (num) {
    localStorage.number=callbackA(num);
    self.location='fill.html'; 
  },
});

$(".click").click(function (event) {
  //ajax
  // console.log("aa");
  newdraw.goto(parseInt(Math.random() * 8) + 1);
});

