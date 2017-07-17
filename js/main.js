$(function(){
    $(".xian").animate({"width":600},1000);
    $(".img1").hover(function () {
        $(this).addClass("animated pulse");
    },function () {
        $(this).removeClass("animated pulse");
    })
    $(".dianshang").hover(function () {
        $(this).removeClass("rotateInUpRight");
        $(this).addClass("shake");
    },function () {
        $(this).removeClass("shake");
    })
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation': true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        // continuousVertical: true
        afterLoad: function(anchorLink, index) {
            if(index==1){
                $(".name p").addClass("animated swing");
                $(".pic").addClass("tada");
            }
            if (index == 3) {
                $(".dianshang").addClass("animated rotateInUpRight");
            //     $('.section3').find('.zhanshi1').delay(0).animate({
            //         left: '0'
            //     }, 1500, 'linear');
            //     $('.section3').find('.zhanshi2').delay(10).animate({
            //         right: '0'
            //     }, 1500, 'linear');
            //     $('.section3').find('.zhanshi3').delay(10).animate({
            //         right: '0'
            //     }, 1500, 'linear');
            //     $(".lianjie a").eq(0).css("marginLeft",0);
            //     $(".lianjie a").eq(1).css("marginLeft",50);
            //     $(".lianjie a").eq(2).css("marginLeft",100);
            //     $(".lianjie a").eq(3).css("marginLeft",150);
            //     $(".lianjie a").eq(4).css("marginLeft",40);
            //     $(".lianjie a").eq(5).css("marginLeft",90);
            //     $(".lianjie a").eq(6).css("marginLeft",140);
            //     $(".lianjie a").eq(7).css("marginLeft",190);
            //     $(".zhanshi2 div a").css("marginTop",0);
            //     $(".zhanshi3 div a").css("marginTop",0);
            }
            if(index==2){
                $(".liaojieimg .img1").css({opacity:1});
            }
        },
        onLeave: function(index,nextIndex,direction){
            if(index==1){
                $(".name p").removeClass("swing");
                $(".pic").removeClass("tada");
                console.log($(".name p"))
            }
            if(index==3){
                $(".dianshang").removeClass("animated rotateInUpRight");
            //     $('.section3').find('.zhanshi1').delay(0).animate({
            //         left: '-50%'
            //     }, 1500, 'linear');
            //     $('.section3').find('.zhanshi2').delay(10).animate({
            //         right: '-70%'
            //     }, 1500, 'linear');
            //     $('.section3').find('.zhanshi3').delay(10).animate({
            //         right: '-70%'
            //     }, 1500, 'linear');
            //     $(".lianjie a").css("marginLeft",-200);
            //     $(".zhanshi2 div a").css("marginTop",-85);
            //     $(".zhanshi3 div a").css("marginTop",-85);
            }
            if(index==2){
                $(".liaojieimg .img1").css({opacity:0});
            }
        }
    });

    var myChart = echarts.init(document.querySelector(".slide .box1"));
    var option = {
        backgroundColor: 'rgba(0,0,0,0)',

        title: {
            text: '我的技能',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#090b24'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'我的技能',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:25, name:'CSS3'},
                    {value:18, name:'Ajax'},
                    {value:20, name:'HTML5'},
                    {value:30, name:'JavaScript'},
                    {value:23, name:'JQuery'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#11ff4f',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.2)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    myChart.setOption(option);
});