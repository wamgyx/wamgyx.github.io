$(function(){
	const lunboimgbox=$(".lunboimgbox")[0];
	const imgs=$(".lunboimgbox li");
	const dian=$(".lunbodian");
	const jiantoul=$(".jiantoul")[0];
	const jiantour=$(".jiantour")[0];
	console.log(lunboimgbox);
	lunbotu(lunboimgbox,imgs,dian,jiantoul,jiantour);

	const xiaolunbobox=$(".budongle")[0];
	const xiaolunbo=$(".xiaolunbobox .xiaolunbo");
	const xlbdian=$(".xlbdian");
	const xlbjtl=$(".xlbjtl")[0];
	const xlbjtr=$(".xlbjtr")[0];
	lunbotu(xiaolunbobox,xiaolunbo,xlbdian,xlbjtl,xlbjtr);

	function lunbotu(lunboimgbox,imgs,dian,jiantoul,jiantour){
		let t=setInterval(move,2000);
		let now=0;
		let next=0;
		let flag=true;
		function move(type="l"){
			if(flag){
				flag=false;
				if(type=="l"){
					next++;
					if(next>=imgs.length){
						next=0;
					}
				}else if(type=="r"){
					next--;
					if(next<0){
						next=imgs.length-1;
					}
				}
				dian[now].classList.remove("lunbodianactive");
					dian[next].classList.add("lunbodianactive");
				animate(imgs[now],{opacity:0},500,function(){
					imgs[now].style.zIndex=0;
				})
				animate(imgs[next],{opacity:1},500,function(){
					imgs[next].style.zIndex=1;
					now=next;
					flag=true;
				});
			}
		}
		lunboimgbox.onmouseover=function(){
			clearInterval(t);
		}
		lunboimgbox.onmouseout=function(){
			t=setInterval(move,2000);
		}
		jiantoul.onclick=function(){
			if(flag){
				move("r");
			}
		}
		jiantour.onclick=function(){
			if(flag){
				move("l");
			}
		}
		for(let i=0;i<dian.length;i++){
			dian[i].onmouseover=function(){
				if(flag){
					next=i-1;
					move();
				}
			}
		}
	}
	

	let scroobj=scrollobj();
	const topsearch=$(".search")[0];
	const fanhuitop2=$(".youbottom .prekuai")[0];
	const floor=$(".mokuai5");
	loucengtiaozhuan(".gudingbox ul",".ketiaozhuan",".mokuai5",".search","#b1aaaa","#d70b1c");
	const fanhuitop=$(".gudingbox ul li:last-child")[0];
	fanhuitop2.onclick=function(){
		scroobj.scrollTop=0;
	}
	fanhuitop.onclick=function(){
		animate(scroobj,{scrollTop:0},1000);
	}
	const caidantan=$(".mokuai1-1 ul li");
	const huitan=$(".huitan");
	for(let i=0;i<caidantan.length;i++){
		// caidantan[i].onmouseover=function(){
		// 	huitan[i].style.display="block";
		// }
		// caidantan[i].onmouseout=function(){
		// 	// huitan[i].style.display="none";
		// 	console.log(caidantan[i].parentNode.parentNode)
		// 	caidantan[i].parentNode.parentNode.onmouseout=function(){
		// 	huitan[i].style.display="none";
		// }
		// }
		hover(caidantan[i],function(){
			huitan[i].style.display="block";
		},function(){
			huitan[i].style.display="none";
		});
		hover(huitan[i],function(){
			huitan[i].style.display="block";
		},function(){
			huitan[i].style.display="none";
		});
		// hover(caidantan[i].parentNode.parentNode,function(){},function(){
		// 	huitan[i].style.display="none";
		// });
	}
	const jdms=$(".mokuai2-2-1 ul")[0];
	const jdmsli=$(".mokuai2-2-1 ul li")[0];
	const jdmsjdl=$(".miaoshajtl")[0];
	const jdmsjdr=$(".miaoshajtr")[0];
	zuoyouzou(jdmsjdr,jdmsjdl,jdms,5,1000);

	const xiaojtl=$(".xiaojtl");
	const xiaojtr=$(".xiaojtr");
	const xiaojtbox=$(".mokuai5-1-4 ul");
	// console.log(xiaojtbox);
	for(let i=0;i<xiaojtbox.length;i++){
		zuoyouzou(xiaojtr[i],xiaojtl[i],xiaojtbox[i],6,570);
	}
	

	function zuoyouzou(jdmsjdr,jdmsjdl,bigbox,n,juli){
		jdmsjdr.onclick=function(){
			animate(bigbox,{marginLeft:-juli},800,function(){
				for(let i=0;i<n;i++){
					let first=bigbox.firstElementChild;
					bigbox.appendChild(first);
				}
				bigbox.style.marginLeft=0;
			});
		}
		jdmsjdl.onclick=function(){
			for(let i=0;i<n;i++){
				let first=bigbox.firstElementChild;
				bigbox.insertBefore(bigbox.lastElementChild,first);
			}
			bigbox.style.marginLeft=-juli+"px";
			animate(bigbox,{marginLeft:0},800);
		}
	}
	

	// 时间
	const timebox=$(".timekk");
	time();
	let h=setInterval(time,1000);
	function time(){
		let date=new Date();
		timebox[0].innerHTML=date.getHours();
		timebox[1].innerHTML=date.getMinutes();
		timebox[2].innerHTML=date.getSeconds();
	}

	// 右侧固定定位高度
	const boxh=$(".height")[0];
	let wh=document.documentElement.clientHeight;
	boxh.style.height=wh+"px";
	window.onresize=function(){
		wh=document.documentElement.clientHeight;
		boxh.style.height=wh+"px";
	}
	// console.log(boxh.offsetHeight);

	const cuxiao=$(".cuxiao1 a");
	const cuxiao2=$(".cuxiao2")[0];
	const hongxian=$(".hongxian")[0];
	for(let i=0;i<2;i++){
		cuxiao[i].onmouseover=function(){
			console.log(cuxiao2.children[0])
			cuxiao2.children[0].style.display="none";
			cuxiao2.children[1].style.display="none";
			cuxiao2.children[i].style.display="block";
			if(i==0){
				hongxian.style.transform="translateX(0px)";
			}else{
				hongxian.style.transform="translateX(52px)";
			}
		}
	}

	const img=$("img");
	console.log(img);
})

