$(function(){
	// 给右侧固定写高度
	let chuangH=document.documentElement.clientHeight;
	
	const youguding=$(".youce")[0];
	youguding.style.height=chuangH+"px";
	window.onresize=function(){
		chuangH=document.documentElement.clientHeight;
		youguding.style.height=chuangH+"px";
	}



	const xiala=$(".xiala");
	const xlmk=$(".menu");
	
	xuanxiang(xiala,xlmk);

	bannerDx(".banner-tu img",".banner-tu",".banner-tu",".dianwei li",["rgb(232,232,232)","rgb(232,232,232)","rgb(255,255,255)","rgb(7,101,163)","rgb(232,232,232)","rgb(137,27,209)"],"url(img/11.png)","url(img/10.png)",1,2,3000);

	const cecaidan=$(".cecaidan ul li");
	const tanchu=$(".prexx");;
	xuanxiang(cecaidan,tanchu);

	const mao=$(".pic");
	const li=$(".banner-goods ul li a");
	
	for(let i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			mao[i].style.display="block";
			animate(mao[i],{top:-11},180);
		}
		li[i].onmouseout=function(){
			mao[i].style.display="none";
			animate(mao[i],{top:0},180);
		}
	}


	let scrObj=scrollobj();
	
	let winH=document.documentElement.clientHeight;

	const nav=$(".topnav")[0];
	const guding=$(".guding")[0];
	const youtop=$(".youce-3-8")[0];
	const floor=$(".meilirens");
	const lis=$(".guding-3 .guding-2");
	let flagx=true;
	let flags=true;
	window.onscroll=function(){
		if(scrObj.scrollTop==0){
			let youding=$(".youce-3-8")[0];
			console.log(youding)
			youding.style.display="none";
		}else{
			let youding=$(".youce-3-8")[0];
			youding.style.display="block";
		}
		for(let i=0;i<floor.length;i++){
			if(scrObj.scrollTop+winH>=floor[i].offsetTop+100){
				for(let j=0;j<6;j++){
					lis[j].style.backgroundColor="rgba(0,0,0,.6)";
				}
				lis[i].style.backgroundColor=$(".mokuai2 .shu",floor[i])[0].style.backgroundColor;
			}else{
				lis[i].style.backgroundColor="rgba(0,0,0,.6)";
			}
			if(scrObj.scrollTop+winH>=floor[i].offsetTop){
				let img=$(".mokuai2 img",floor[i]);
				for(let j=0;j<img.length;j++){
					img[j].src=img[j].getAttribute("imgUrl");
				}
			}
		}
		if(scrObj.scrollTop>=698){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},500,function(){
					flagx=true;
				});
			}
			animate(guding,{opacity:1},500);
		}else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},500,function(){
					flags=true;
				});
			}
			animate(guding,{opacity:0},500);
		}
	}

	for(let i=0;i<lis.length;i++){
		if(i==lis.length-1){
			youtop.onclick=lis[i].onclick=function(){
				animate(scrObj,{scrollTop:0},500);
			}
		}else if(i==lis.length-2){
			lis[i].onclick=function(){
				animate(scrObj,{scrollTop:0},500);
			}
		}else{
			lis[i].onclick=function(){
				animate(scrObj,{scrollTop:floor[i].offsetTop-100},500);
			}
		}
	}

	const youce=$(".youce-11");
	const youcehua=$(".mui-mbar-tab-tip");
	console.log(youce);
	let q;
	for(let i=0;i<youce.length;i++){
		youce[i].onmouseover=function(){
			q=setTimeout(function(){
				youcehua[i].style.display="block";
				animate(youcehua[i],{right:35,opacity:1},300);
			},100);
		}
		youce[i].onmouseout=function(){
			if(q){
				clearTimeout(q);
			}
			animate(youcehua[i],{right:70,opacity:0},300,function(){youcehua[i].style.display="none";});
		}
	}

	let erweima=$(".youce-3-9")[0];
	let erweima1=$(".youerweima")[0];
	erweima.onmouseover=function(){
		erweima1.style.display="block";
		erweima.onmouseout=function(){
			erweima1.style.display="none";
		}
	}
	// 小上下轮播
	const danning=$(".danning");
	for(let i=0;i<danning.length;i++){
		shangxia(danning[i],30);
	}

	const danning1=$(".fc-item-list")[0];
	shangxia(danning1,40);
	function shangxia(obj,top){
		var t=setInterval(function(){
			let first=obj.firstElementChild;
			animate(obj,{marginTop:-top},500,function(){
				obj.style.marginTop=0;
				obj.appendChild(first);
			});
		},2500);
	}

	// 直播轮播
	const zhibobox=$(".lunbotu")[0];
	const zhiboll=$(".slide-page-prev")[0];
	const zhibolr=$(".slide-page-next")[0];
	zhiboll.onclick=function(){
		animate(zhibobox,{marginLeft:-488},500);
		zhiboll.style.display="none";
		zhibolr.style.display="block";
	}
	zhibolr.onclick=function(){
		animate(zhibobox,{marginLeft:0},500);
		zhiboll.style.display="block";
		zhibolr.style.display="none";
	}
	// 直播视频
	const zhibozhezhao=$(".zhibozhezhao");
	const zhibozhezhao1=$(".zhibozhezhao1");
	const tu3=$(".tu3");
	const mokuai1=$(".mokuai1-2zuo")[0];
	for(let i=0;i<zhibozhezhao.length;i++){
		tu3[i].onmouseover=function(){
			let pic=zhibozhezhao[i].previousElementSibling.src;
			mokuai1.style.backgroundImage=`url(${pic})`;
			zhibozhezhao[i].style.display="block";
		}
		tu3[i].onmouseout=function(){
			zhibozhezhao[i].style.display="none";
		}
	}
	

	// const lastlast=$(".lastlast")[0];
	// const bianhuade=$(".bianhuade")[0];
	// lastlast.onclick=function(){
	// 	bianhuade.style.width=0;
	// 	bianhuade.style.overflow="hidden";
	// 	animate(bianhuade,{width:122},300);
	// }
})