$(function(){
	const xialamenu=$(".dropdown-menu");
	let menu=[];
	for(let i=0;i<xialamenu.length;i++){
		menu[i]=xialamenu[i].parentNode;
	}
	// console.log(menu)
	xuanxiang(menu,xialamenu);
	bannerDx(".wu1 a",".banner-image",".banner-image","","","","","",2000);

	const xiaopinbtn=$(".caidan")[0];
	let flag=true;
	xiaopinbtn.onclick=function(){
		const daohang=$(".collapse")[0];
		if(flag){
			flag=false;
			daohang.style.display="block";
			// const daohangH=daohang.offsetHeight;
			daohang.style.height=0;
			animate(daohang,{height:360},100);
		}else{
			animate(daohang,{height:0},100,function(){
				daohang.style.display="none";
			});
			
			flag=true;
		}
		
	}
})