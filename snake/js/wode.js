$(function(){
	const sence=$(".sence")[0];
	let snak1=new tcs(sence);
})


class tcs{
	constructor(sence){
		this.sence=sence;
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.play();
	}
	play(){
		// 创建场景
		this.createSence();
		// 创建蛇
		this.createShe();
		// 蛇动起来
		this.shemove();
	}
	createSence(){
		for(let i=0;i<20;i++){
			for(let j=0;j<20;j++){
				let gezi=$("<div>");
				gezi.id=`${i}-${j}`;
				gezi.classList.add("gezi");
				this.sence.appendChild(gezi);
			}
		}
		// console.log()
	}
	// 创建蛇
	createShe(){
		for(let i=0;i<this.she.length;i++){
			this.getElement(this.she[i].x+"-"+this.she[i].y).classList.add("she");
		}
	}
	// 蛇移动
	shemove(){
		let that=this;
		
		this.t=setInterval(function(){

			let oldwei=that.she[0];
			console.log(oldwei)
			// 去掉蛇尾
			that.removewei(oldwei);
			for(let i=0;i<that.she.length;i++){
				that.she[i].y++;
			}
			that.createShe();

		},1000);
	}
	// 得到蛇的某一节身子
	getElement(id){
		return document.getElementById(id);
	}
	// 移出蛇尾
	removewei(oldwei){
		this.getElement(oldwei.x+"-"+oldwei.y).classList.remove("she");
	}
}