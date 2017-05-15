// 函数库
// 得到某个类名的集合
function $(select,obj=document){
	if(typeof select=="function"){
		// window.onload=function(){
		// 	select();
		// };
		window.addEventListener("load",select,false);
	}else if(typeof select=='string'){
		// <>
		// 正则
		//   /^</ 开头是小于号   \w+  表示字母数字下划线比1个多   >$ 以>号结束
		// alert(/^<\w+>$/.test(select));
		if(/^<\w+>$/.test(select)){
			// 创建元素
			return document.createElement(select.slice(1,-1));
		}
		return obj.querySelectorAll(select);
	}
}



// 鼠标最后移到谁身上就一直显示谁
// for(let i=0;i<lis.length;i++){
// 	// lis[i].onmouseover=function(){
// 	lis[i].onclick=function(){
// 		for(let j=0;j<div.length;j++){
// 			div[j].style.display="none";
// 		}
// 		div[i].style.display="block";
// 	}
// }
// 鼠标移开就不显示
// for(let i=0;i<lis.length;i++){
// 	// lis[i].onmouseover=function(){
// 	lis[i].onmouseover=function(){
// 		div[i].style.display="block";
// 	}
// 	lis[i].onmouseout=function(){
// 		div[i].style.display="none";
// 	}
// }

/*
鼠标放上去出现选项卡
xuanxiang(btn,con)
btn  选项卡按钮
con  选项卡内容
*/
function xuanxiang(btn,con){
	for(var i=0;i<btn.length;i++){
	// btn[i].onmouseover=function(){
		btn[i].ind=i;
		btn[i].onmouseover=function(){
			// for(let j=0;j<con.length;j++){
			// 	con[j].style.display="none";
			// }
			console.log(this);
			con[this.ind].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[this.ind].style.display="none";
		}
	}

}
// 遮罩
// 给模块加遮罩
function zhezhu(box1,box2){
	for(let i=0;i<box1.length;i++){
		box1[i].onmouseover=function(){
			box2[i].style.opacity=0.5;
		}
		box1[i].onmouseout=function(){
			box2[i].style.opacity=0;
		}
	}
}


// 轮播图
// pic          轮播的图
// bigbannerBox 通屏的大盒子
// smallBox     放轮播图的小盒子
// lis          轮播点
// colorArr     通屏盒子的背景颜色
// activeColor


// 层级是1的 opacity是0  层级是2的opacity的1
function bannerDx(pic,bigbannerBox,smallBox,lis,colorArr,activeColor,lunboColor,tuZ,tuActiveZ,lunbotime,lisColor){
		const banner=$(bigbannerBox)[0];
		const tupian=$(pic);
		const box=$(smallBox)[0];
		const li=$(lis);
		const color=colorArr;


		banner.style.background=color[0];
		li[0].style.background=activeColor;
		// tupian[0].style.zIndex=tuActiveZ;
		tupian[0].style.opacity=1;

		
		// 标记是第几张banner图
		var num=0;

		// 定义多长时间做什么  ---执行move函数
		// 函数做参数只写函数名
		var t=setInterval(move,lunbotime);

		// 在box块上鼠标移入和移出执行什么操作
		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,lunbotime);
		}

		// 鼠标移入轮播点 给轮播点写事件
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					// tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0;
					li[i].style.background=lunboColor;
					// banner.style.opacity=0;
				}
				// tupian[j].style.zIndex=tuActiveZ;
				animate(tupian[j],{opacity:1},500);
				li[j].style.background=activeColor;
				num=j;
				banner.style.background=color[num];
				// animate(banner,{opacity:1},500);
			}
		}
		
		// move函数
		function move(){
			num++;
			if(num>=tupian.length){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				// tupian[i].style.zIndex=tuZ;
				tupian[i].style.opacity=0;
				li[i].style.background=lunboColor;
				// banner.style.opacity=0;
			}
			// tupian[num].style.zIndex=tuActiveZ;
			animate(tupian[num],{opacity:1},500);
			li[num].style.background=activeColor;
			banner.style.background=color[num];
			// animate(banner,{opacity:1},500);
		}
}
//banner左右轮播函数
function bannerlunbo(box,bannerbox,jtl,jtr,lis){
    var box = $(box)[0];
    var banner = $(bannerbox)[0];
    var t = setInterval(move, 2000);
    var prev = $(jtl)[0];
    var next = $(jtr)[0];
    var dian = $(lis);

    var flag = true;
    var num = 1;

    let nowli=dian[0];

    function move() {
        num++;
        if(num==banner.children.length){
            num=1;
        }
        if(num==-1){
            num=7;
        }
        banner.style.transition = "all 1s";
        banner.style.marginLeft = -num * 740 + "px";
        nowli.classList.remove("active");
        if(num==8){
        	dian[0].classList.add("active");
        	nowli=dian[0];
		}else if(num==0) {
            dian[6].classList.add("active");
            nowli=dian[6];
        }else{
            dian[num-1].classList.add("active");
            nowli=dian[num-1];
		}
    }

    banner.addEventListener("transitionend", function () {
        if (num == 8) {
            banner.style.transition = "none";
            banner.style.marginLeft = -740 + "px";
            num = 1;
        }
        if (num == 0) {
            banner.style.transition = "none";
            banner.style.marginLeft = -5180 + "px";
            num = 7;
        }
        flag = true;
    });
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    prev.onclick = function () {
        if (flag) {
            flag = false;
            num -= 2;
            move();
        }
    }
    for(let i=0;i<dian.length;i++){
    	dian[i].onclick=function(){
    		num=i;
    		move();
		}
	}
}



// 适配的获取 scrollTop
// 获取HTML还是body
function scrollobj(){
	let body=document.body;
	let html=document.documentElement;
	let obj;
	body.scrollTop=100;
	html.scrollTop=100;
	if(body.scrollTop==0){
		obj=html;
	}else{
		obj=body;
	}
	body.scrollTop=0;
	html.scrollTop=0;
	return obj;
}

// 给某个块加一次点击事件

// 点击之后执行一次
// yuan类名选择器选到的那个变量
// shijian 要添加的时间
// 
function one(yuan,shijian,hanshu){
	yuan.addEventListener(shijian,hanshu,false);
	yuan.addEventListener(shijian,clear,false);
	function clear(){
		yuan.removeEventListener(shijian,hanshu,false);
		yuan.removeEventListener(shijian,clear,false);
	}
}

// 拖拽某个元素随便移动 该元素要绝对定位
function tuozhuai(box){
	let mousex;
	let mousey;
	let boxx;
	let boxy;
	box.addEventListener("mousedown",dong,false);
	function dong(e){
		console.log("点了")
		mousex=e.clientX;
		mousey=e.clientY;
		boxx=box.offsetLeft;
		boxy=box.offsetTop;
		window.addEventListener("mousemove",move,false);
		window.addEventListener("mouseup",up,false);
	}
	function move(e){
		e.preventDefault();
		let nowx=e.clientX;
		let nowy=e.clientY;
		let chax=nowx-mousex;
		let chay=nowy-mousey;
		console.log(document.documentElement.clientWidth)
		if(boxx+chax<0){
			box.style.left=0+"px";
		}else if(boxy+chay<0){
			box.style.top=0+"px";
		}else if(boxx+chax>document.documentElement.clientWidth-box.offsetWidth){
			box.style.left=document.documentElement.clientWidth-box.offsetWidth+"px";
		}else{
			box.style.left=boxx+chax+"px";
			box.style.top=boxy+chay+"px";
		}
	}
	function up(){
		window.removeEventListener("mousemove",move,false);
		window.removeEventListener("mouseup",up,false);
	}
}

// 鼠标滚轮事件
// mouseWheel(obj,shang,xia)
// obj鼠标事件的对象
// shang往上滚动的事件
// xia往下滚动的事件
function mouseWheel(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
		e.preventDefault();
		if(e.wheelDelta){
			// 谷歌
			if(e.wheelDelta>0){
				// 往上滚动
				shang();
			}else{
				// 往下滚动
				xia();
			}
		}else{
			// 火狐
			if(e.detail>0){
				// 往下滚动
				xia();
			}else{
				// 往上滚动
				shang();
			}
		}
	}
}

// 楼层跳转 点左侧固定的元素跳转到相应楼层
function loucengtiaozhuan(btnBoxD,btnBoxlou,floor,topnav,color,activecolor){
	const btnBox=$(btnBoxD)[0];
	const lis=$(btnBoxlou);
	const floors=$(floor);
	const nav=$(topnav)[0];
	let winH=document.documentElement.clientHeight;
	let moveH=winH/2-parseInt(window.getComputedStyle(floors[0],null).height)/2;
	let scrObj=scrollobj();
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			animate(scrObj,{scrollTop:floors[i].offsetTop-moveH},500,function(){});
		}
		// lis[i].onmouseover=function(){
		// 	lis[i].style.background=window.getComputedStyle(floors[i],null).background;
		// 	lis[i].style.color="#fff";
		// }
		// lis[i].onmouseout=function(){
		// 	lis[i].style.color="#000";
		// 	lis[i].style.background="grey";
		// }
	}
	window.onresize=function(){
		winH=document.documentElement.clientHeight;
		moveH=winH/2-floors[0].offsetHeight/2;
	}
	
	let flagx=true;
	let flags=false;
	window.onscroll=function(){
		for(let i=0;i<floors.length;i++){
			if((scrObj.scrollTop+0.5*winH)>=floors[i].offsetTop){
				for(let j=0;j<lis.length;j++){
					lis[j].style.background=color;
				}
				lis[i].style.background=activecolor;
			}
		}
		if(scrObj.scrollTop>=500){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},500,function(){
					flagx=true;
				});
			}
		}else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},500,function(){
					flags=true;
				});
			}
		}
	}
	setTimeout(function(){
		animate(nav,{top:-50},500,function(){
			flags=true;
		});
	},1000);
}


// addCookie(key,val,[time])
// 添加一个cookie
function addCookie(key,val,time){
	val=escape(val);
	if(time){
		let date=new Date();
		time*=1000;
		date.setTime(date.getTime()+time);
		date=date.toGMTString();
		document.cookie=`${key}=${val};expires=${date}`;
	}else{
		document.cookie=`${key}=${val}`;
	}
}

// 查看1
function getCookie(key){
	let val;
	let cookies=document.cookie;
	let cookiearr=cookies.split("; ");
	console.log(cookiearr)
	for(let i=0;i<cookiearr.length;i++){
		if(key==cookiearr[i].split("=")[0]){
			val=cookiearr[i].split("=")[1];
		}
	}
	return unescape(val);
}
// 删除
function delCookie(key){
	let date=new Date();
	date.setTime(date.getTime()-10000);			
	date=date.toGMTString();
	console.log(date)
	document.cookie=`${key}=aa;expires=${date}`;
}


// 去空格
	// type: before after side all
	// before:去掉最前面的空格
	// after:去掉最后面的空格
	// side:去掉两侧的空格
	// all:去掉所有的空格
	function delspace(str,type="side"){
		let reg;
		if(type=="before"){
			reg=/^\s+/;
		}
		if(type=="after"){
			reg=/\s+$/;
		}
		if(type=="all"){
			reg=/\s/g;
		}
		if(type=="side"){
			reg=/(^\s+)|(\s+$)/g;
		}
		return str.replace(reg,"");
	}