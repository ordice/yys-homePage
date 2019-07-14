"use strict";
//导航栏效果，文字颜色渐变
$(".title-summary a").mouseover(function () {
	$(this).animate({
		color: '#000'
	}, 150);
	$(this).addClass("active");
}).mouseout(function () {
	$(this).removeClass("active");
	$(this).animate({
		color: '#FFF'
	}, 150);
});

//导航栏移动出现下面的框
$(".title-summary a:eq(1)").mouseenter(function () {
	$("#banner-top1").show();
}).mouseleave(function () {
	$("#banner-top1").hide();
});
$(".title-summary a:eq(2)").mouseenter(function () {
	$("#banner-top2").show();
}).mouseleave(function () {
	$("#banner-top2").hide();
});
$(".title-summary a:eq(3)").mouseenter(function () {
	$("#banner-top1").show();
}).mouseleave(function () {
	$("#banner-top1").hide();
});
$(".title-summary a:eq(4)").mouseenter(function () {
	$("#banner-top2").show();
}).mouseleave(function () {
	$("#banner-top2").hide();
});
$(".title-summary a:eq(5)").mouseenter(function () {
	$("#banner-top1").show();
}).mouseleave(function () {
	$("#banner-top1").hide();
});
$(".title-summary a:eq(6)").mouseenter(function () {
	$("#banner-top2").show();
}).mouseleave(function () {
	$("#banner-top2").hide();
});
$(".title-summary a:eq(9)").mouseenter(function () {
	$("#banner-top1").show();
}).mouseleave(function () {
	$("#banner-top1").hide();
});
$(".title-summary a:eq(10)").mouseenter(function () {
	$("#banner-top2").show();
}).mouseleave(function () {
	$("#banner-top2").hide();
});

//第一个页面图片循环变换
setInterval(function changeImg() {
	console.log($(".img1").css('opacity'));
	if ($(".img1").css('opacity') === '1') {
		console.log('11111');
		$(".img1").animate({
			opacity: 0
		}, 1000);
		$(".img2").animate({
			opacity: 1
		}, 1000);
	} else if ($(".img2").css('opacity') === '1') {
		$(".img2").animate({
			opacity: 0
		}, 1000);
		$(".img3").animate({
			opacity: 1
		}, 1000);
	} else if ($(".img3").css('opacity') === '1') {
		$(".img3").animate({
			opacity: 0
		}, 1000);
		$(".img1").animate({
			opacity: 1
		}, 1000);
	}
}, 6000);

//news的位置，0123 4条   0的时候隐藏上一条   3的时候隐藏下一条
var newsTar = 0;
$("#pre").hide();
setInterval(function changeNews() {
	console.log("位置：" + newsTar);
	if (newsTar < 2) {
		toRight();
		newsTar++;
		$("#pre").show();
	} else if (newsTar === 2) {
		toRight();
		newsTar++;
		$("#next").hide();
	} else if (newsTar === 3) {
		toFirst();
		newsTar = 0;
		$("#pre").hide();
		$("#next").show();
	}
}, 4000);

//点击上一条
$("#pre").click(function () {
	toLeft();
	newsTar--;
	if (newsTar === 0) {
		$("#pre").hide();
	}
	if (newsTar === 2) {
		$("#next").show();
	}
});
//点击下一条
$("#next").click(function () {
	toRight();
	newsTar++;
	if (0 < newsTar && newsTar < 3) {
		$("#next").show();
		$("#pre").show();
	}
	if (newsTar === 3) {
		$("#pre").hide();
	}
	if (newsTar === 0) {
		$("#next").show();
	}
});
//新闻向右移动
function toRight() {
	$(".news-banner").animate({
		left: '-=1040px'
	}, 1500);
}
//新闻向左移动
function toLeft() {
	$(".news-banner").animate({
		left: '+=1040px'
	}, 1500);
}
//新闻移动到第一条
function toFirst() {
	$(".news-banner").animate({
		left: '+=3120px'
	}, 1500);
}

//游戏攻略tip
$(".one-part").mouseenter(function () {
	$(this).children(".first-tip").animate({
		top: '-=10px'
	}, 500);
	$(this).children(".second-tip").animate({
		top: '-=10px'
	}, 500);
}).mouseleave(function () {
	$(this).children(".first-tip").animate({
		top: '+=10px'
	}, 500);
	$(this).children(".second-tip").animate({
		top: '+=10px'
	}, 500);
});
//游戏攻略块
$(".clr li").mouseover(function () {
	$(this).addClass("active");
}).mouseout(function () {
	$(this).removeClass("active");
});

//泛娱乐点击左右移动
var funBt = 0;
$(".fun-part-right-bt").click(function () {
	funBt++;
	if (funBt === 0) {
		$(".fun-part-left-bt").hide();
	}
	if (funBt > 0) {
		$(".fun-part-left-bt").show();
	}
	if (funBt === 2) {
		$(".fun-part-right-bt").hide();
	}
	if (funBt < 2) {
		$(".fun-part-right-bt").show();
	}
	funToRight();
});
$(".fun-part-left-bt").click(function () {
	funBt--;
	if (funBt === 0) {
		$(".fun-part-left-bt").hide();
	}
	if (funBt > 0) {
		$(".fun-part-left-bt").show();
	}
	if (funBt === 2) {
		$(".fun-part-right-bt").hide();
	}
	if (funBt < 2) {
		$(".fun-part-right-bt").show();
	}
	funToLeft();
});

function funToLeft() {
	$(".fun-box ul").animate({
		left: '+=260px'
	}, 1000);
}

function funToRight() {
	$(".fun-box ul").animate({
		left: '-=260px'
	}, 1000);
}

//泛娱乐、京都商业街图片上移
$(".animate-top").mouseenter(function () {
	$(this).animate({
		top: '-=20px'
	}, 500);
}).mouseleave(function () {
	$(this).animate({
		top: '+=20px'
	}, 500);
});

//移动进文字显示小程序二维码
var smallApp = $("#small-app");
var whenMouseEnterTongrenFriend = $(".when-mouse-enter-tongren-friend");
smallApp.mouseenter(function () {
	whenMouseEnterTongrenFriend.animate({
		opacity: '1'
	}, 500);
}).mouseout(function () {
	whenMouseEnterTongrenFriend.animate({
		opacity: '0'
	}, 500);
});

//鼠标进二维码部分后的X坐标；
var mX = 0;
var role = $(".show-role");
$(".qr-code-part").mousemove(function (e) {
	mX = e.pageX;
	//看左边
	if (mX < 800) {
		console.log("最左");
		role.css("background-position", "0px 0px");
	} else if (800 < mX && mX < 930) {
		//偏左
		console.log("偏左");
		role.css("background-position", "-203px 0px");
	} else if (930 <= mX && mX < 1025) {
		//正中间
		console.log("正中间");
		role.css("background-position", "-406px 0px");
	} else if (1025 <= mX && mX < 1111) {
		//偏右
		console.log("偏右");
		role.css("background-position", "-609px 0px");
	} else if (1111 <= mX) {
		//最右
		console.log("最右");
		role.css("background-position", "-812px 0px");
	}
});

//点击人儿出现对话
//随机数，不同数显示不同的框
var random = 0;
var mRole = $(".show-role");
mRole.click(function () {
	random = parseInt(Math.random() * 6 + 1);
	console.log(random);
	if (random === 1) {
		$(".item1").animate({
			opacity: '1'
		}, 500);
		setTimeout(function () {
			$(".item1").animate({
				opacity: '0'
			}, 500);
		}, 1500);
	} else if (random === 2) {
		$(".item2").animate({
			opacity: '1'
		}, 500);
		setTimeout(function () {
			$(".item2").animate({
				opacity: '0'
			}, 500);
		}, 1500);
	} else if (random === 3) {
		$(".item3").animate({
			opacity: '1'
		}, 500);
		setTimeout(function () {
			$(".item3").animate({
				opacity: '0'
			}, 500);
		}, 1500);
	} else if (random === 4) {
		$(".item4").animate({
			opacity: '1'
		}, 500);
		setTimeout(function () {
			$(".item4").animate({
				opacity: '0'
			}, 500);
		}, 1500);
	} else if (random === 5) {
		$(".item5").animate({
			opacity: '1'
		}, 500);
		setTimeout(function () {
			$(".item5").animate({
				opacity: '0'
			}, 500);
		}, 1500);
	} else if (random === 6) {
		$(".item6").animate({
			opacity: '1'
		}, 500);
		setTimeout(function () {
			$(".item6").animate({
				opacity: '0'
			}, 500);
		}, 1500);
	}
});
//移动到圈圈显示二维码
$(".circle-box").mouseenter(function () {
	console.log("进到cirle了");
	$(".circle-qr-code").animate({
		opacity: '1'
	}, 1500);
	$(".black-circle").animate({
		left: '210px',
		top: '-150px'
	}, 1000);
	$(".shine").animate({
		opacity: '1'
	}, 1000);
}).mouseleave(function () {
	$(".circle-qr-code").stop().animate({
		opacity: '0'
	}, 1500);
	$(".black-circle").stop().animate({
		left: '10px',
		top: '-50px'
	}, 1200);
	$(".shine").stop().animate({
		opacity: '0'
	}, 1000);
});
//shine动画
setInterval(function shineAnimate() {
	$(".shine img").animate({
		left: '-30px',
		top: '-30px',
		width: '406px',
		height: '404px'
	}, 1500);
	$(".shine img").animate({
		left: '0px',
		top: '0px',
		width: '356px',
		height: '354px'
	}, 1500);
	$(".shine img").css({
		"left": "0px",
		"top": "0px",
		"width": "356px",
		"height": "354px"
	});
}, 3000);