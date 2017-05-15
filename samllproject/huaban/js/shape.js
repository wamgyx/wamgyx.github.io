/**
 * Created by lenovo on 2017/4/13.
 */
$(function(){
    let canvas=$("canvas")[0];
    let zhezhao=$(".zhezhao")[0];
    let shixian=$(".shixian")[0];
    let xuxian=$(".xuxian")[0];
    let xuanxiang=$(".xuanxiang")[0];
    let huaban=new shape(canvas,zhezhao);
    let xian=$(".xian")[0];
    let xing=$(".xing")[0];
    let yuan=$(".yuan")[0];
    let juxing=$(".juxing")[0];
    let shapeobj=$(".shape")[0];
    let path=$(".path")[0];
    let fillcolor=$(".fillcolor")[0];
    let duobian=$(".duobian")[0];
    let duojiao=$(".duojiao")[0];
    let save=$(".save")[0];

    console.log(zhezhao);
    shixian.onclick=function(){
        // xuanxiang.style.display="none";
        huaban.type="shixian";
        huaban.draw();
        xian.innerHTML="实线";
    }
    xuxian.onclick=function(){
        huaban.type="xuxian";
        huaban.draw();
        xian.innerHTML="虚线";
    }
    yuan.onclick=function(){
        huaban.type="yuan";
        // huaban.draw();
        xing.innerHTML="圆形";
    }
    juxing.onclick=function(){
        huaban.type="juxing";
        huaban.draw();
        xing.innerHTML="矩形";
    }
    shapeobj.onclick=function(){
        huaban.fangshi="fill";
    }
    path.onclick=function(){
        huaban.fangshi="stroke";
    }
    fillcolor.onchange=function () {
        //改变颜色后得到颜色
        huaban.fillcolor=this.value;
    }
    duobian.onclick=function(){
        huaban.num=parseInt(prompt("请输入边数"));
        huaban.type="bian";
        huaban.draw();
    }
    duojiao.onclick=function(){
        huaban.num=parseInt(prompt("请输角数"));
        huaban.type="jiao";
        huaban.draw();
    }
    save.onclick=function(){
        huaban.save();
    }
})

class shape{
    constructor(canvas,zhezhao){
        this.canvas=canvas;
        this.zhezhao=zhezhao;
        this.cobj=this.canvas.getContext("2d");
        this.type="shixian";
        this.fangshi="stroke";
        this.draw();
    }
    //画
    draw(){

        let that=this;
        this.zhezhao.onmousedown=function(e){
            // that.cobj.fillStyle=that.fillcolor;
            that.init();
            let sx=e.offsetX;
            let sy=e.offsetY;
            document.onmousemove=function(e){
                let ex=e.offsetX;
                let ey=e.offsetY;
                e.preventDefault();
                that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height);
                if(that.historys){
                    // that.cobj.putImageData(that.data,0,0);
                    that.cobj.putImageData(that.historys,0,0);
                }
                that[that.type](sx,sy,ex,ey);
            }
        }
        document.onmouseup=function(e){
            document.onmousemove=null;
            // that.zhezhao.onmouseup=null;
            that.historys=that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height);
            // that.cobj.closePath();
            // that.canvas.style.zIndex=20;
            // that.zhezhao.onmousemove=function(){
            //     that.data=that.cobj.getImageData(0,0,1000,600);
            // }
        }
    }
    shixian(sx,sy,ex,ey){
        this.cobj.beginPath();
        this.cobj.moveTo(sx,sy);
        this.cobj.lineTo(ex,ey);
        this.cobj.stroke();
    }
    xuxian(sx,sy,ex,ey){
        this.cobj.beginPath();
        this.cobj.moveTo(sx,sy);
        this.cobj.lineTo(ex,ey);
        this.cobj.setLineDash([5,3]);
        this.cobj.stroke();
        this.cobj.setLineDash([]);
    }
    yuan(sx,sy,ex,ey){
        this.cobj.beginPath();
        let r=((ex-sx)**2+(ey-sy)**2)**0.5;
        this.cobj.arc(sx,sy,r,0,Math.PI*2);
        // this.cobj.stroke();
        this.cobj[this.fangshi]();
    }
    juxing(sx,sy,ex,ey){
        this.cobj.beginPath();
        this.cobj.rect(sx,sy,ex-sx,ey-sy);
        this.cobj[this.fangshi]();
    }
    //初始化画笔的样式
    init(){
        this.cobj.fillStyle=this.fillcolor?this.fillcolor:"#000";
    }
    bian(sx,sy,ex,ey){
        this.cobj.beginPath();
        let reg = 360/this.num;
        let r=((ex-sx)**2+(ey-sy)**2)**0.5;

        for(let i=0;i<this.num;i++){
            let x=sx+r*Math.cos((Math.PI/180)*reg*(i+1));
            let y=sy+r*Math.sin((Math.PI/180)*reg*(i+1));
            this.cobj.lineTo(x,y);
        }
        this.cobj.closePath();
        this.cobj.stroke();
    }
    jiao(sx,sy,ex,ey){
        this.cobj.beginPath();
        let num=this.num*2;
        let reg = 360/num;
        let r=((ex-sx)**2+(ey-sy)**2)**0.5;
        this.jiandu=3;
        for(let i=0;i<num;i++){
            if(i%2==0){
                let x=sx+r*Math.cos((Math.PI/180)*reg*(i));
                let y=sy+r*Math.sin((Math.PI/180)*reg*(i));
                this.cobj.lineTo(x,y);
            }else{
                let x=sx+(r/this.jiandu)*Math.cos((Math.PI/180)*reg*(i));
                let y=sy+(r/this.jiandu)*Math.sin((Math.PI/180)*reg*(i));
                this.cobj.lineTo(x,y);
            }
        }
        this.cobj.closePath();
        this.cobj.stroke();
    }
    save(){
        location.href=this.canvas.toDataURL().replace("data:image/png","data:stream/octet")
    }
}