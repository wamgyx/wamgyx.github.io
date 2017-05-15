$(function(){
	const shub=$(".cecaidan");
	const xianshi=$(".bannerNavLis");
	xuanxiang(shub,xianshi);

	bannerDx(".bannerimg a img",".bannerBox",".bannerimg",".diandian li","rgba(255,255,255,0.4)","rgba(0,0,0,0.4)",1,2,2000,".jiantou_zuo",'.jiantou_you'); 

	const caidan=$(".nav-item");
	const xiala=$(".xiala");
	xuanxiang(caidan,xiala);


	const xmdp=$(".zuoyoul");
	const xmjt=$(".morej .a");

	var kd=parseInt(window.getComputedStyle(xmdp[0],null).width);
	// console.log(xmjth);
	var now=0;
	var next=0;
	var mid=true;
	var flag=true;
	for(let i=0;i<xmdp.length;i++){
		xmdp[i].style.left=kd+"px";
	}
	xmdp[0].style.left=0+"px";
	xmjt[0].style.color="#e0e0e0";
	var t=setInterval(lunbo,4000);
	function lunbo(type='l'){
		next++;
		flag=false;
		for(let i=0;i<xmjt.length;i++){
			xmjt[i].style.color="#b0b0b0";
		}
		if(next==xmdp.length){
			mid=false;
		}
		if((type=='l'||now==0)&&(mid==true)){
			// xmdp[next].style.left=kd+"px";
			animate(xmdp[now],{left:-kd},700,function(){
				if(next==xmdp.length-1){
					xmjt[1].style.color="#e0e0e0"
				}
			});
			animate(xmdp[next],{left:0},700,function(){flag=true;});
		}else if((type=='r'||now<=xmdp.length-1)&&(mid==false)){
			next-=2;
			animate(xmdp[now],{left:kd},700,function(){
				if(next==0){
				xmjt[0].style.color="#e0e0e0"
				}
			});
			animate(xmdp[next],{left:0},700,function(){flag=true;});
		}
		if(next==0){
			mid=true;
		}
		now=next;
	}

	xmjt[0].onclick=function(){
		if(flag==true){
			lunbo('l');
		}
	}
	xmjt[1].onclick=function(){
		if(flag==true){
			lunbo('r');
		}
	}

	// 内容模块轮播
	const neirong3lb=$(".neirong3lb");
	const zyjzdl=$(".zyjzdl");
	const zyjzdr=$(".zyjzdr");
	const neirongd=$(".neirong3-1");
	const dian=$(".xm-pagers-wrapper ul");
	let fFlag=true;
	for(let i=0;i<neirong3lb.length;i++){
		zyjzdl[i].onclick=function(){
			if(fFlag){
				// let dian=$(".dot"+(i+3));
				console.log(dian[i]);
				fFlag=false;
				let marginleft=parseInt(window.getComputedStyle(neirong3lb[i],null).marginLeft);
				if(marginleft!=0){
					animate(neirong3lb[i],{marginLeft:marginleft+296},500,function(){
						fFlag=true;
						dian[i].appendChild(dian[i].firstElementChild);
					});
				}else{
					fFlag=true;
				}
			}
		}
		zyjzdr[i].onclick=function(){
			if(fFlag){
				fFlag=false;
				let marginleft=parseInt(window.getComputedStyle(neirong3lb[i],null).marginLeft);
				let w=parseInt(window.getComputedStyle(neirong3lb[i],null).width);
				if(marginleft!=-(w-296)){
					animate(neirong3lb[i],{marginLeft:marginleft-296},500,function(){
						fFlag=true;
						dian[i].insertBefore(dian[i].lastElementChild,dian[i].firstElementChild);
					});
				}else{
					fFlag=true;
				}
			}
		}

		
	}
	// for(let i=0;i<neirong3lb.length;i++){
	// 	for(let j=0;j<dian[i].children.length;j++){
	// 		// console.log(dian[i].children[j]);
	// 		dian[i].children[j].onclick=function(){
	// 			console.log(-296*(j));
	// 			animate(neirong3lb[i],{marginLeft:-296*(j)},500,function(){
	// 				// if(neirong3lb[i].style.marginLeft=="0"){
	// 				// 	let dot1=$(".dot1")[0];
	// 				// 	console.log(dot1);
	// 				// 	dian[i].insertBefore(dot1.parentNode,firstElementChild);
	// 				// }
	// 			});
				
	// 		}
	// 	}
	// }
	// window.onblur=function(){
	// 	for(let i=0;i<neirong3lb.length;i++){
	// 		animate(neirong3lb[i],{marginLeft:0},500);
	// 	}
	// }
	
});