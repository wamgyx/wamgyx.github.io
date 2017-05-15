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
$(function(){
   const yunbox1=$(".yunbox")[0];
   const yunbox2=$(".yunbox")[1];
    // console.log(yunbox1);
    move1();
    let t=setInterval(move1,30100);
    function move1(){
        // yunbox1.style.transition="left 10s linear";
        // yunbox1.style.left=-document.documentElement.clientWidth+"px";
        // yunbox1.addEventListener("transitionend",function(){
        //     yunbox1.style.transition="";
        //     console.log(yunbox1.style.transition);
        //     yunbox1.appendChild(yunbox1.firstElementChild);
        //     yunbox1.style.left=0+"px";
        // })
        // console.log(document.documentElement.clientWidth);
        animate(yunbox1,{left:-document.documentElement.clientWidth},30000,function(){
            yunbox1.appendChild(yunbox1.firstElementChild);
            yunbox1.style.left=0+"px";
        });
        yunbox2.style.left=-document.documentElement.clientWidth+"px";
        animate(yunbox2,{left:0},30000,function(){
            yunbox2.insertBefore(yunbox2.lastElementChild,yunbox2.firstElementChild);
            yunbox2.style.left=-document.documentElement.clientWidth+"px";
        })
    }
    const lianpubox=$(".lianpubox")[0];
    const fengmian=$(".fengmian")[0];
    const lianname=$(".lianname");
    let nowname=lianname[0];
    let num=0;
    let biaoji=1;
    setTimeout(function () {
        fengmian.style.top=440+"px";
    },3000);
    let bianhua1=setInterval(function(){
        fengmian.style.top=440+"px";
    },10000);
    fengmian.addEventListener("transitionend",function(){
        fengmian.style.top=-440+"px";
        biaoji++;
        console.log(biaoji);
        if(biaoji==44){
            alert(1)
        }
        if(biaoji%2==0&&fengmian.offsetTop==440){
            num++;
            if(num>5){
                num=1;
            }
            console.log(`url(../img/lianpu${num}.png)`);
            setTimeout(function () {
                lianpubox.style.backgroundImage=`url(img/lianpu${num}.png)`;
                nowname.style.display="none";
                lianname[num-1].style.display="block";
                nowname=lianname[num-1];
            },1500);
        }

    })
});