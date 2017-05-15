$(function(){
	const sence=$(".sence")[0];
	const body=$("body")[0];
	const start=$(".kaishibtn")[0];
	const kaishi=$(".kaishi")[0];
	const pause=$(".jifen .kaishibtn")[0];

	let fenshu=$(".jifen h5 i")[0];
	let maxfenshu=$(".jifen h4 i")[0];
	let jieshu=$(".over")[0];
	kaishi.style.display="block";
	body.onkeydown=start.onclick=function(e){
		if(kaishi.style.display=="block"){
			if(e.type=="click"||e.keyCode==70){
				let snak1=new tcs(sence,pause,fenshu,maxfenshu);
				kaishi.style.display="none";
				snak1.shemove();
				snak1.control();
				snak1.createfood();
			}
		}
	}
	const zailai=$(".over-btn")[0];
	
	zailai.onclick=function(){
		qingchu();
		let snak2=new tcs(sence,pause,fenshu,maxfenshu);
		snak2.shemove();
		snak2.control();
		snak2.createfood();
	}

	const tuichu=$(".over-btn")[1];
	tuichu.onclick=function(){
		qingchu();
		jieshu.style.display="none";
		kaishi.style.display="block";
	}

	function qingchu(){
		const sheshen=$(".she");
		const foods=$(".food")[0];
		const gezi=$(".sence .gezi");
		let fenshu=$(".jifen h5 i")[0];
		fenshu.innerHTML=0;
		for(let i=0;i<gezi.length;i++){
			sence.removeChild(gezi[i]);
		}
		foods.classList.remove("food");
		jieshu.style.display="none";
		for(let i=0;i<sheshen.length;i++){
			sheshen[i].classList.remove("she");
		}
	}
})



// 蛇类
class tcs{
	// 构造函数
	constructor(sence,pause,fenshu,maxfenshu,defen){
		this.sence=sence;
		this.pauseobj=pause;
		this.fenshu=fenshu;
		this.maxfen=0;
		// 这是一个行内元素
		this.maxdefen=maxfenshu;
		// this.defen=defen;
		// 这是一个数
		this.计分=0;
		// 定义初始蛇
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		// 蛇的初始方向
		this.shefx="right";
		this.neirong="";
		// 键盘开关
		this.flag=true;

		// 游戏状态
		this.statu=true;
		this.startTime;
		this.dtime;
		// 开始游戏
		this.play();
	}
	play(){

		if(Number(sessionStorage.zuigaofen)){
			this.maxdefen.innerHTML=sessionStorage.zuigaofen;
			this.maxfen=sessionStorage.zuigaofen;
		}else{
			this.maxdefen.innerHTML=this.maxfen;
		}

		let time=new Date();
		this.startTime=time.getTime();
		this.dtime=this.startTime;
		
		// 创建场景
		this.createSence();
		// 创建蛇
		this.createShe();
		// 蛇动起来
		// this.shemove();
		// 控制蛇
		// this.control();
		// 创建食物
		// this.createfood();
		this.pause();
	}
	changefenshu(){
		if(Number(this.maxdefen.innerHTML)<Number(this.fenshu.innerHTML)){
			this.maxdefen.innerHTML=Number(this.fenshu.innerHTML);
			sessionStorage.zuigaofen=Number(this.fenshu.innerHTML);
		}
		
		// console.log()
		
	}
	pause(){
		let that =this;
		this.pauseobj.onclick=function(){
			if(that.statu){
				that.statu=false;
				clearInterval(that.t);
				that.pauseobj.innerHTML="继续游戏";
			}else{
				that.statu=true;
				that.pauseobj.innerHTML="暂停游戏";
				that.shemove();
			}
		}
	}
	// 创建场景
	createSence(){
		// 循环给父元素加子元素
		for(let i=0;i<20;i++){
			for(let j=0;j<20;j++){
				// 创建div元素
				let gezi=$("<div>");
				// 给元素加id
				gezi.id=`${i}-${j}`;
				// 给元素加类名
				gezi.classList.add("gezi");
				// 给父元素加子元素
				this.sence.appendChild(gezi);
			}
		}
	}
	// 创建蛇  就是让蛇的位置的div有背景颜色 加she类名就有了背景颜色
	createShe(){
		for(let i=0;i<this.she.length;i++){
			this.getElement(this.she[i]).classList.add("she");
		}
	}
	// 蛇移动  新给一个蛇的头  删除蛇尾  让原来蛇尾位置的元素删除背景色  删除she类名
	shemove(){
		let that=this;
		this.t=setInterval(function(){
			that.dtime+=300;
			if((that.dtime-that.startTime)>3000){
				if(that.superfoodw){
					that.getElement(that.superfoodw).classList.remove("superfood");
				}
				let time = new Date();
				that.startTime=time.getTime();
				that.dtime=that.startTime;
				that.createsuperfood();
			}
			let newtou;
			if(that.shefx=="right"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
			if(that.shefx=="left"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=="top"){
				newtou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=="bottom"){
				newtou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}
			if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
				// alert("游戏结束");
				that.gameover();
				return;
			}
			for(let i=0;i<that.she.length;i++){
				if(newtou.x==that.she[i].x&&newtou.y==that.she[i].y){
					// alert("游戏结束");
					that.gameover();
					return;
				}
			}
			that.she.push(newtou);
			if(newtou.x==that.foodw.x&&newtou.y==that.foodw.y){
				that.getElement(that.foodw).classList.remove("food");
				that.createfood();				
				that.fenshu.innerHTML=Number(that.fenshu.innerHTML)+1;
				that.changefenshu();

			}else{
				// 去掉蛇尾
				let oldwei=that.she.shift(that.she);
				that.removewei(oldwei);
			}
			if(that.superfoodw){
				if(newtou.x==that.superfoodw.x&&newtou.y==that.superfoodw.y){
					that.getElement(that.superfoodw).classList.remove("superfood");
					that.fenshu.innerHTML=Number(that.fenshu.innerHTML)+5;
					that.changefenshu();
					// console.log(fenshu.innerHTML)
				}
			}
			
			that.createShe();
			that.flag=true;
		},500);
	}
	// 得到蛇的某一节身子,某一各元素
	getElement(weizhi){
		let id=weizhi.x+"-"+weizhi.y;
		return document.getElementById(id);
	}
	// 移出蛇尾
	removewei(oldwei){
		this.getElement(oldwei).classList.remove("she");
	}
	// 
	gameover(){
		let jieshu=$(".over")[0];
		jieshu.style.display="block";
		this.changefenshu();
		clearInterval(this.t);
	}
	control(){
		this.neirong;
		let that=this;
		let anniu=$(".anniuj");
		// 用界面按钮控制
		for(let i=0;i<anniu.length;i++){
			anniu[i].onmousedown=function(){
				that.neirong=anniu[i].innerHTML;
				anniu[i].style.boxShadow=anniu[i].style.boxShadow+", rgb(0, 0, 0) 5px 5px 15px 0px inset";
				panduan(that.neirong);
			}
			anniu[i].onmouseup=function(){
				for(let j=0;j<anniu.length;j++){
					anniu[j].style.boxShadow="4px 4px 7px #666";
				}
			}
		}
		// 用键盘按钮控制
		window.onkeydown=function(e){
			if(that.flag){
				that.flag=false;
				panduan(e.keyCode);
			}
		}
		function panduan(type){
			if(type=="←"||type==37){
				if(that.shefx!="right"){
					that.shefx="left";
				}
			}else if(type=="↑"||type==38){
				if(that.shefx!="bottom"){
					that.shefx="top";
				}
			}else if(type=="→"||type==39){
				if(that.shefx!="left"){
					that.shefx="right";
				}
			}else if(type=="↓"||type==40){
				if(that.shefx!="top"){
					that.shefx="bottom";
				}		
			}else{
				return;
			}
		}
	}
	// 创建食物
	createfood(){
		// 定义两个随机数
		this.foodw={};
		this.foodw.x=Math.floor(Math.random()*20);
		this.foodw.y=Math.floor(Math.random()*20);
		// 让随机位置显示食物颜色  加类名
		this.getElement(this.foodw).classList.add("food");
	}
	createsuperfood(){
		// 定义两个随机数
		this.superfoodw={};
		this.superfoodw.x=Math.floor(Math.random()*20);
		this.superfoodw.y=Math.floor(Math.random()*20);
		// 让随机位置显示食物颜色  加类名
		this.getElement(this.superfoodw).classList.add("superfood");
	}
}