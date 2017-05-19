$(function(){
	const caidan=$(".caidanxuanxiang .subNav");
	const xiala=$(".xiala");
	// const img=$(".banner img");
	// const li=$(".dian li");

	// xuanxiang(caidan,xiala);
	const item=$(".caidanxuanxiang .subNav");
	const ul=$(".xiala");
	for(let i=0;i<ul.length;i++){
		let h=parseInt(attr(ul[i],"height"));
		ul[i].setAttribute("h",h);
		ul[i].style.height=0;
		ul[i].style.opacity=0;
	}
	for(let i=0;i<item.length;i++){
		if(item[i].children[1]){
			hover(item[i],function(){
				item[i].children[1].style.borderColor="#B81C22";
				animate(item[i].children[1],{height:item[i].children[1].getAttribute("h")},200,function(){});
				item[i].children[1].style.opacity=1;
			},function(){
					animate(item[i].children[1],{height:0},500,function(){item[i].children[1].style.borderColor="#fff";});
					item[i].children[1].style.opacity=0;
			})
		}
	}
	bannerDx('.banner a img','.banner a','.dian li','#b81c22','#dddddd',3000,1,2,".jiantou_zuo",".jiantou_you");

	const huoquli=$(".huoquli")[0];
		let obj=scrollobj();
	huoquli.onclick=function(){
		console.log(obj.scrollTop)
		animate(obj,{scrollTop:0},1000);
	}
})
