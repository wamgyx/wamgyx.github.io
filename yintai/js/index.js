$(function () {
    const bannerimg = $(".bannerimg");
    const banner = $(".bannerbox")[0];
    const lis = $(".dianbox ul li");
    const jiantoul = $(".jiantoul")[0];
    const jiantour = $(".jiantour")[0];
    bannerlunbo(banner, bannerimg, lis, jiantoul, jiantour);
    function bannerlunbo(banner, bannerimg, lis, jiantoul, jiantour) {
        let now = 0;
        let next = 0;
        lis[now].classList.add("active");
        let t = setInterval(move, 2500);
        let flag = true;

        function move(type = "l") {
            if (flag) {
                flag = false;
                if (type == "l") {
                    next++;
                    if (next >= bannerimg.length) {
                        next = 0;
                    }
                } else if (type == "r") {
                    next--;
                    if (next < 0) {
                        next = bannerimg.length - 1;
                    }
                }
                // bannerimg[now].style.opacity=0;
                animate(bannerimg[now], {opacity: 0}, 300);
                animate(bannerimg[next], {opacity: 1}, 300, function () {
                    lis[now].classList.remove("active");
                    lis[next].classList.add("active");
                    now = next;
                    flag = true;
                });
            }
        }

        banner.onmouseover = function () {
            clearInterval(t);
        };
        banner.onmouseout = function () {
            t = setInterval(move, 2500);
        };
        jiantoul.onclick = function () {
            move("r");
        };
        jiantour.onclick = function () {
            move("l");
        }
        for (let i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                if(flag){
                    next = i - 1;
                    move("l");
                }
            }
        }
    }


    //超值特卖
    const temail = $(".sbxg");
    const temaiimg = $(".temai-3");
    for (let i = 0; i < temail.length; i++) {
        temail[i].onmouseover = function () {
            for (let j = 0; j < temail.length; j++) {
                temail[j].style.borderBottomColor = "#333";
                temail[j].style.fontWeight = "normal";
                temail[j].children[1].classList.remove("xian1");
                temaiimg[j].style.display = "none";
            }
            temail[i].style.borderBottomColor = "#e5004f";
            temail[i].style.fontWeight = "bold";
            temail[i].children[1].classList.add("xian1");
            temaiimg[i].style.display = "block";
        }
    }

    //银泰百货
    const sbxg1 = $(".sbxg1");
    const chuxian = $(".ytbh-24")[0];
    for (let i = 0; i < sbxg1.length; i++) {
        sbxg1[i].onmouseover = function () {
            for (let j = 0; j < sbxg1.length; j++) {
                sbxg1[j].style.borderBottomColor = "#333";
                sbxg1[j].style.fontWeight = "normal";
                sbxg1[j].children[1].classList.remove("xian1");
                chuxian.children[j].style.display = "none";
            }
            sbxg1[i].style.borderBottomColor = "#e5004f";
            sbxg1[i].style.fontWeight = "bold";
            sbxg1[i].children[1].classList.add("xian1");
            chuxian.children[i].style.display = "block";
        }
    }

    const temaikuai = $(".temai-4");
    for (let i = 0; i < temaikuai.length; i++) {
        temaikuai[i].onmouseover = function () {
            temaikuai[i].children[0].style.width = "100%";
            temaikuai[i].children[1].style.height = "100%";
            temaikuai[i].children[2].style.width = "100%";
            temaikuai[i].children[3].style.height = "100%";
        }
        temaikuai[i].onmouseout = function () {
            temaikuai[i].children[0].style.width = "0";
            temaikuai[i].children[1].style.height = "0";
            temaikuai[i].children[2].style.width = "0";
            temaikuai[i].children[3].style.height = "0";
        }
    }
//    楼层中的轮播一
    const lunbo1 = $(".mokuai2-3");
    const xjtl1 = $(".smalljtl");
    const xjtlr = $(".smalljtr");
    for (let i = 0; i < lunbo1.length; i++) {
        xjtl1[i].onclick = function () {
            lunbo1[i].style.left = "-170px";
            lunbo1[i].insertBefore(lunbo1[i].lastElementChild, lunbo1[i].firstElementChild);
            animate(lunbo1[i], {left: 0}, 500);
        }
        xjtlr[i].onclick = function () {
            animate(lunbo1[i], {left: -170}, 500, function () {
                lunbo1[i].appendChild(lunbo1[i].firstElementChild);
                lunbo1[i].style.left = 0;
            });
        }
    }

    loucengtiaozhuan(".gudingbox", ".louceng", ".yt-floor", ".all", "xiaoguo", "xiaoguo", ".fhtop");

    const mokuai3box = $(".mokuai3box1");
    const yidong = $(".mokuai3-1");
    const midjt = $(".midjt");
    for (let i = 0; i < mokuai3box.length; i++) {
        mokuai3box[i].onmouseover = function () {
            animate(mokuai3box[i].children[2], {left: 0}, 200);
            animate(mokuai3box[i].children[3], {right: 0}, 200);
        }
        mokuai3box[i].onmouseout = function () {
            animate(mokuai3box[i].children[2], {left: -30}, 200);
            animate(mokuai3box[i].children[3], {right: -30}, 200);
        }
        console.log(mokuai3box[i])
        mokuai3box[i].children[1].children[0].onclick = function () {
            mokuai3box[i].children[1].children[1].classList.remove("activedian");
            animate(yidong[i], {left: 0}, 500);
            mokuai3box[i].children[1].children[0].classList.add("activedian");
        }
        mokuai3box[i].children[1].children[1].onclick = function () {
            mokuai3box[i].children[1].children[0].classList.remove("activedian");
            animate(yidong[i], {left: -390}, 500);
            mokuai3box[i].children[1].children[1].classList.add("activedian");
        }
        mokuai3box[i].children[2].onclick = function () {
            if (parseInt(yidong[i].style.left) != 0) {
                mokuai3box[i].children[1].children[1].classList.remove("activedian");
                animate(yidong[i], {left: 0}, 500);
                mokuai3box[i].children[1].children[0].classList.add("activedian");
            }
        }
        mokuai3box[i].children[3].onclick = function () {
            if (parseInt(yidong[i].style.left) != -390) {
                mokuai3box[i].children[1].children[0].classList.remove("activedian");
                animate(yidong[i], {left: -390}, 500);
                mokuai3box[i].children[1].children[1].classList.add("activedian");
            }
        }
    }
    const menu=$(".fenleimenu dl");
    const chuxian2=$(".fenleimenu dl dd");
    for(let i=0;i<menu.length;i++){
        menu[i].onmouseover=function(){
            chuxian2[i].style.display="block";
        }
        menu[i].onmouseout=function(){
            chuxian2[i].style.display="none";
        }
    }
});