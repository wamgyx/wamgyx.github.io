$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation': true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        // continuousVertical: true
        afterLoad: function(anchorLink, index) {
            if (index == 3) {
                $('.section3').find('.zhanshi1').delay(0).animate({
                    left: '0'
                }, 1500, 'linear');
                $('.section3').find('.zhanshi2').delay(10).animate({
                    right: '0'
                }, 1500, 'linear');
                $('.section3').find('.zhanshi3').delay(10).animate({
                    right: '0'
                }, 1500, 'linear');

            }
        },
        onLeave: function(index,nextIndex,direction){
            if(index==3){
                $('.section3').find('.zhanshi1').delay(0).animate({
                    left: '-50%'
                }, 1500, 'linear');
            }
            $('.section3').find('.zhanshi2').delay(10).animate({
                right: '-70%'
            }, 1500, 'linear');
            $('.section3').find('.zhanshi3').delay(10).animate({
                right: '-70%'
            }, 1500, 'linear');
        }
    });
});