/**
 * Created by lenovo on 2017/4/22.
 */
$(function(){
   const youkuai=$(".youkuai");
   const xiala=$(".xiala1");
   console.log(youkuai)
    xuanxiang(youkuai,xiala);

    // bannerlunbo(".bannerbox",".bannerimgbox",".jtl",".jtr",".dian li");

    const gonggao=$(".gonggao ul")[0];
    const btnl=$(".btnl")[0];
    const btnr=$(".btnr")[0];
    btnl.onclick=function(){
        gonggao.insertBefore(gonggao.lastElementChild,gonggao.firstElementChild);
    }
    btnr.onclick=function(){
        gonggao.appendChild(gonggao.firstElementChild);
    }

    const chongzhi=$(".mokuai-2-5 a");
    let nowcz=chongzhi[0];
    for(let i=0;i<chongzhi.length;i++){
        chongzhi[i].onclick=function(){
            nowcz.classList.remove("activebg");
            chongzhi[i].classList.add("activebg");
            nowcz=chongzhi[i];
        }
    }

    const mokuai2l=$(".mokuai2l")[0];
    const mokuai2r=$(".mokuai2r")[0];
    const gundong=$(".gundong")[0];
    const mokuai2=$(".mokuai2")[0];
    let type="l";
    let t=setInterval(move,2500);
    function move(){
        if(type!="r"){
            animate(gundong,{left:-295},300,function(){
                gundong.appendChild(gundong.firstElementChild);
                gundong.style.left=0;
            });
        }else{
            gundong.style.left=-295+"px";
            gundong.insertBefore(gundong.lastElementChild,gundong.firstElementChild);
            animate(gundong,{left:-0},300,function(){
            });
        }
    }
    mokuai2l.onclick=function(){
        type="r";
        move();
    }
    mokuai2r.onclick=function(){
        type="l";
        move();
     }
    mokuai2.onmouseover=function(){
        clearInterval(t);
    }
    mokuai2.onmouseout=function(){
        t=setInterval(move,2500);
    }

    yidonglunbo(".bannerbox",".bannerimg",".dian li",".jtl",".jtr");
    function yidonglunbo(bigbox,bannerimg,dianlis,jtl,jtr){
        var box = document.querySelector(bigbox);
        var imgs = document.querySelectorAll(bannerimg);
        var btns = document.querySelectorAll(dianlis);
        var prev = document.querySelector(jtl);
        var next = document.querySelector(jtr);
        var num = 0;
        var z=2;
        var flag=true;

        let t=setInterval(move,3000);
        function move(){
            imgs[num].classList.add("leftOut");
            if(num==0){
                console.log(imgs[num].className);
            }
            btns[num].classList.remove("active");
            num++;
            if(num==imgs.length){
                num=0;
            }
            imgs[num].classList.add("leftIn");
            btns[num].classList.add("active");
            imgs[num].style.zIndex=z++;
        }
        // imgs.forEach(function(img,index){
        //     img.addEventListener("animationend",function(){
        //         img.className="bannerimg";
        //         flag=true;
        //     });
        // });
        for(let i=0;i<imgs.length;i++){
            imgs[i].addEventListener("animationend",function(){
                imgs[i].className="bannerimg";
                flag=true;
            });
        }
        // btns.forEach(function(btn,index){
        //     btn.onclick=function(){
        //         if(flag){
        //             flag=false;
        //             btns[num].classList.remove("active");
        //             btns[index].classList.add("active");
        //             if(num==index){
        //                 return;
        //             }
        //             if(index<num){
        //                 imgs[num].classList.add("rightOut");
        //                 imgs[index].classList.add("rightIn");
        //             }else if(index>num){
        //                 imgs[num].classList.add("leftOut");
        //                 imgs[index].classList.add("leftIn");
        //             }
        //             imgs[index].style.zIndex=z++;
        //             num=index;
        //         }
        //     }
        // });
        for(let i=0;i<btns.length;i++){
            btns[i].onclick=function(){
                if(flag){
                    flag=false;
                    btns[num].classList.remove("active");
                    btns[i].classList.add("active");
                    if(num==i){
                        return;
                    }
                    if(i<num){
                        imgs[num].classList.add("rightOut");
                        imgs[i].classList.add("rightIn");
                    }else if(i>num){
                        imgs[num].classList.add("leftOut");
                        imgs[i].classList.add("leftIn");
                    }
                    imgs[i].style.zIndex=z++;
                    num=i;
                }
            }
        };
        box.onmouseover=function(){
            clearInterval(t);
        }
        box.onmouseout=function(){
            t=setInterval(move,2000);
        }
        next.onclick=function(){
            if(flag){
                flag=false;
                move();
            }
        }
        prev.onclick=function(){
            if(flag){
                flag=false;
                imgs[num].classList.add("rightOut");
                btns[num].classList.remove("active");
                let m=num;
                m--;
                if(m<0){
                    m=imgs.length-1;
                }
                imgs[m].classList.add("rightIn");
                btns[m].classList.add("active");
                imgs[m].style.zIndex=z++;
                num=m;
            }
        }
    }

    const gudingr=$(".gudingr-1");
    for(let i=0;i<gudingr.length;i++){
        gudingr[i].onmouseover=function(){
            gudingr[i].style.left="-84px";
        };
        gudingr[i].onmouseout=function(){
            console.log(gudingr[i].offsetLeft)
            if(gudingr[i].offsetLeft==-84){
                gudingr[i].style.left="-20px";
            }else{
                gudingr[i].style.left="-84px";
                setTimeout(function(){gudingr[i].style.left="-20px";},300)
            }
        }
    }

    const didian1=$(".didian-1")[0];
    const fanhuis=$(".fanhuis")[0];
    document.onclick=function(e){
        if(e.target.className=="didian-1"){
            didian1.nextElementSibling.style.display="block";
            didian1.nextElementSibling.nextElementSibling.style.display="none";
        }else if(e.target.className=="fanhuis"||e.target.className=="fanhuiq"){
            didian1.nextElementSibling.nextElementSibling.style.display="block";
        }else{
            didian1.nextElementSibling.style.display="none";
            didian1.nextElementSibling.nextElementSibling.style.display="none";
        }
    }
});