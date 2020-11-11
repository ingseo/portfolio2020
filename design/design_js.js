//스크롤바
$('body').niceScroll({
    cursorcolor:"#5790c8",
    cursorwidth:"8px"
});


//menubar
$('.manubar').click(function(){
    $('header .under_list').stop().slideToggle(); 
})
function menu(){
    win_height=$(window).height();
    doc_height=$(document).height();
    menubar_height=$('header').height();
    se2_top=$('.section2').offset().top
    se3_top=$('.section3').offset().top
    se4_top=$('.section4').offset().top
    se6_top=$('.section6').offset().top
    se7_top=$('.section7').offset().top
    $('header .logo').click(function(){
        $('html').stop().animate({scrollTop:0})
    })
    $('header li').eq(0).click(function(){
        $('html').stop().animate({scrollTop:se2_top-menubar_height})
    })
    $('header li').eq(1).click(function(){
        $('html').stop().animate({scrollTop:se3_top-menubar_height})
    })
    $('header li').eq(2).click(function(){
        $('html').stop().animate({scrollTop:se4_top-menubar_height})
    })
    $('header li').eq(3).click(function(){
        $('html').stop().animate({scrollTop:se6_top-menubar_height})
    })
    $('header li').eq(4).click(function(){
        $('html').stop().animate({scrollTop:se7_top-menubar_height})
    })
    $('header li').eq(5).click(function(){
        $('html').stop().animate({scrollTop:se2_top-menubar_height})
    })
    $('header li').eq(6).click(function(){
        $('html').stop().animate({scrollTop:se3_top-menubar_height})
    })
    $('header li').eq(7).click(function(){
        $('html').stop().animate({scrollTop:se4_top-menubar_height})
    })
    $('header li').eq(8).click(function(){
        $('html').stop().animate({scrollTop:se6_top-menubar_height})
    })
    $('header li').eq(9).click(function(){
        $('html').stop().animate({scrollTop:se7_top-menubar_height})
    })
    
}    
$(document).ready(function(){
    menu()
})
$(window).resize(function(){
    menu()
    $('header .under_list').stop().slideUp(); 
})

//section3 작가
$('.section3 li').click(function(){
    $('.section3 li').css({'background':'none', color:'black'})
    $(this).css({'background':'#5790c8','color': 'white'})
    menu()
})
$('.section3 .m1').click(function(){
    $('.section3 .item').hide()
    $('.section3 .item').fadeIn()
    menu()
})
$('.section3 .m2').click(function(){
    $('.section3 .item').hide()
    $('.section3 .design').fadeIn()
    menu()
})
$('.section3 .m3').click(function(){
    $('.section3 .item').hide()
    $('.section3 .art').fadeIn()
    menu()
})
$('.section3 .m4').click(function(){
    $('.section3 .item').hide()
    $('.section3 .sculpture').fadeIn()
    menu()
})
$('.section3 .m5').click(function(){
    $('.section3 .item').hide()
    $('.section3 .emplacement').fadeIn()
    menu()
})
$('.section3 .m6').click(function(){
    $('.section3 .item').hide()
    $('.section3 .metal').fadeIn()
    menu()
})
$('.section3 .m7').click(function(){
    $('.section3 .item').hide()
    $('.section3 .etc').fadeIn()
    menu()
})

//section4 전시안내
var box_size=$('.section4 .container .box').width()
$(window).resize(function(){
    box_size=$('.section4 .container .box').width()
    $('.section4 .box3').addClass('active')
    $('.section4 .box').not('.section4 .box3').removeClass('active')
    $('.section4 .box .cont').css({opacity:0})
    $('.section4 .box3').find('.cont').css({opacity:1})
    $('.section4 .box1 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .box2 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .box2').css({right:'80px'})
    $('.section4 .box3').css({right:'160px'})
})
$('.section4 .container1 .box1').click(function(){
    $(this).addClass('active')
    $('.section4 .container1 .box').not(this).removeClass('active')
    $('.section4 .container1 .box .cont').css({opacity:0})
    $(this).find('.cont').css({opacity:1})
    $('.section4 .container1 .box2 .title').css({borderBottom: 'none', borderTop:'1px solid #5790c8'})
    $('.section4 .container1 .box3 .title').css({borderBottom: 'none', borderTop:'1px solid #5790c8'})
    $('.section4 .container1 .box2').css({right:box_size-80})
    $('.section4 .container1 .box3').css({right:box_size})
})    
$('.section4 .container1 .box2').click(function(){
    $(this).addClass('active')
    $('.section4 .container1 .box').not(this).removeClass('active')
    $('.section4 .container1 .box .cont').css({opacity:0})
    $(this).find('.cont').css({opacity:1})
    $('.section4 .container1 .box1 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .container1 .box3 .title').css({borderBottom: 'none', borderTop:'1px solid #5790c8'})
    $('.section4 .container1 .box2').css({right:'80px'})
    $('.section4 .container1 .box3').css({right:box_size})
})   
$('.section4 .container1 .box3').click(function(){
    $(this).addClass('active')
    $('.section4 .container1 .box').not(this).removeClass('active')
    $('.section4 .container1 .box .cont').css({opacity:0})
    $(this).find('.cont').css({opacity:1})
    $('.section4 .container1 .box1 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .container1 .box2 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .container1 .box2').css({right:'80px'})
    $('.section4 .container1 .box3').css({right:'160px'})
})   
$('.section4 .container2 .box1').click(function(){
    $(this).addClass('active')
    $('.section4 .container2 .box').not(this).removeClass('active')
    $('.section4 .container2 .box .cont').css({opacity:0})
    $(this).find('.cont').css({opacity:1})
    $('.section4 .container2 .box2 .title').css({borderBottom: 'none', borderTop:'1px solid #5790c8'})
    $('.section4 .container2 .box3 .title').css({borderBottom: 'none', borderTop:'1px solid #5790c8'})
    $('.section4 .container2 .box2').css({right:box_size-80})
    $('.section4 .container2 .box3').css({right:box_size})
})    
$('.section4 .container2 .box2').click(function(){
    $(this).addClass('active')
    $('.section4 .container2 .box').not(this).removeClass('active')
    $('.section4 .container2 .box .cont').css({opacity:0})
    $(this).find('.cont').css({opacity:1})
    $('.section4 .container2 .box1 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .container2 .box3 .title').css({borderBottom: 'none', borderTop:'1px solid #5790c8'})
    $('.section4 .container2 .box2').css({right:'80px'})
    $('.section4 .container2 .box3').css({right:box_size})
})   
$('.section4 .container2 .box3').click(function(){
    $(this).addClass('active')
    $('.section4 .container2 .box').not(this).removeClass('active')
    $('.section4 .container2 .box .cont').css({opacity:0})
    $(this).find('.cont').css({opacity:1})
    $('.section4 .container2 .box1 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .container2 .box2 .title').css({borderBottom: '1px solid #5790c8', borderTop:'none'})
    $('.section4 .container2 .box2').css({right:'80px'})
    $('.section4 .container2 .box3').css({right:'160px'})
})   


//section5 동영상 //자막때문에 아래를 기준으로 맞춰두었는데, 어떻게하는게 좋을까...
function video(){
    f_w = $('.frame').width();
    f_h = $('.frame').height();
    v_w = $('video').width();
    v_h = $('video').height();
    $('video').css({
        'bottom': 0,
        'left': f_w*0.5 - v_w*0.5
    })
}
$(document).ready(function(){
    video()
})
$(window).resize(function(){
    video()
})


//모든 버튼이 팝업으로라도 활성화되는게 좋을까??
//section4 모바일화면 버튼, section6 관람요금 관련 버튼, section7 참가신청-가이드 버튼