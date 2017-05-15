// 函数库
// 得到某个类名的集合
function $(select,obj=document){
	if(typeof select=="function"){
		window.onload=function(){
			select();
		};
	}else if(typeof select=='string'){
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
			// console.log(this);
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
function bannerDx(pic,bigbannerBox,smallBox,lis,activeColor,lunboColor,tuZ,tuActiveZ,lunbotime,zuo,you){
		const banner=$(bigbannerBox)[0];
		const tupian=$(pic);
		const box=$(smallBox)[0];
		const li=$(lis);
		const jianzuo=$(zuo)[0];
		const jianyuo=$(you)[0];
		// console.log(jianzuo);

		// console.log(tupian);
		// console.log(lunbotime);
		// console.log(tuActiveZ);


		// banner.style.background=color[0];
		li[0].style.background=activeColor;
		// li[0].style.border-color="rgba(0,0,0,0.4)";
		tupian[0].style.zIndex=tuActiveZ;
		// tupian[0].style.opacity=1;

		
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


		// for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		li[j].style.background=activeColor;
		// 	}
		// 	li[j].onmouseout=function(){
		// 		li[j].style.background=lunboColor;
		// 	}
		// }


		for(let j=0;j<li.length;j++){
			li[j].onclick=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					// tupian[i].style.opacity=0;
					li[i].style.background=lunboColor;
					// banner.style.opacity=0;
				}
				tupian[j].style.zIndex=tuActiveZ;
				// animate(tupian[j],{opacity:1},500);
				li[j].style.background=activeColor;
				num=j;
				// banner.style.background=color[num];
				// animate(banner,{opacity:1},500);
				li[j].style.background=activeColor;
			}
		}
		
		// move函数
		function move(type='l'){
			if(type=='l'){
				num++;
			if(num>=tupian.length){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				// tupian[i].style.opacity=0;
				li[i].style.background=lunboColor;
				// banner.style.opacity=0;
			}
			tupian[num].style.zIndex=tuActiveZ;
			// animate(tupian[num],{opacity:1},500);
			li[num].style.background=activeColor;
			// banner.style.background=color[num];
			// animate(banner,{opacity:1},500);
		}else if(type=='r')
			num--;
			if(num<0){
				num=tupian.length-1;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				// tupian[i].style.opacity=0;
				li[i].style.background=lunboColor;
				// banner.style.opacity=0;
			}
			tupian[num].style.zIndex=tuActiveZ;
			// animate(tupian[num],{opacity:1},500);
			li[num].style.background=activeColor;
			// banner.style.background=color[num];
			// animate(banner,{opacity:1},500);
		}

		jianzuo.onclick=function(){
			move('r');
		}
		jianyuo.onclick=function(){
			move('l');
		}
}


// 左右轮播到最后一张倒着播放