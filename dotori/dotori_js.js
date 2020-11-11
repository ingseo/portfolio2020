
var bg_height=$('.bg1').height();
var page=0
var indi_index


//스크롤
$('body').niceScroll({
    cursorcolor:"#4a4339",
    cursorwidth:"8px"
});


//헤더 부분
$('.header .menu').click(function(){
    $('.main-menu').animate({top:0})
})
$('.main-menu .x-btn').click(function(){
    $('.main-menu').animate({top:'-100%'})
})


// 슬라이드 부분
function scroll_top(){
    $('.bg-group').stop().animate({scrollTop:bg_height*page}, 500, function(){
        $('.info .item').stop().animate({top:'50px', opacity:0})
        $('.indi').css({right:'-10px'})
        $('.indi p').css({fontSize: '18px', marginLeft: 0})
        $('.indi span').css({width: 0})     
        $('.indi').eq(page).css({right:0})        
        $('.indi').eq(page).find('p').css({fontSize: '32px', marginLeft: '5px'})        
        $('.indi').eq(page).find('span').css({width:'98px'})
        
        if(page==0){
            $('.prev').css({opacity:'0.5', cursor:'default'})
            $('.next').css({opacity:'1', cursor:'pointer'})
            $('.info').not($('.info').eq(page)).hide()
            $('.info1').show()
            $('.info1').find('.item').each(function(index, item){
                $(this).stop().delay(200*index).animate({top:'0', opacity:1})
                        })           
        }else if(page==1){
            $('.prev').css({opacity:'1', cursor:'pointer'})
            $('.next').css({opacity:'1', cursor:'pointer'})
            $('.info').not($('.info').eq(page)).hide()
            $('.info2').show()
            $('.info2').find('.item').each(function(index, item){
                $(this).stop().delay(250*index).animate({top:'0', opacity:1})
                        })
        }else if(page==2){
            $('.prev').css({opacity:'1', cursor:'pointer'})
            $('.next').css({opacity:'1', cursor:'pointer'})
            $('.info').not($('.info').eq(page)).hide()
            $('.info3').show()
            $('.info3').find('.item').each(function(index, item){
                $(this).stop().delay(250*index).animate({top:'0', opacity:1})
                        })
        }else if(page==3){
            $('.prev').css({opacity:'1', cursor:'pointer'})
            $('.next').css({opacity:'0.5', cursor:'default'})
            $('.info').not($('.info').eq(page)).hide()
            $('.info4').show()
            $('.info4').find('.item').each(function(index, item){
                $(this).stop().delay(250*index).animate({top:'0', opacity:1})
                        })
        }
    })
    }
$(document).ready(function(){
    bg_height=$('.bg1').height();
    $('.bg-group').height(bg_height);
    scroll_top() 
})
$(window).resize(function(){
    bg_height=$('.bg1').height();
    $('.bg-group').height(bg_height);
    scroll_top()
    box_index=0
    box_next()
})
$('.bg-group').on('scroll mousewheel', function(event){
    delta=event.originalEvent.wheelDelta;
    event.preventDefault();
    event.stopPropagation();
    has_animate=$('.bg-group').is(':animated')
    if(delta<0 && page<3 && !has_animate){
        page++;
        scroll_top();
    }else if(delta>0 && page>0 && !has_animate){
        page--;
        scroll_top();
    }
    })
$('.indi').click(function(){
    page=$(this).index()
    scroll_top();
})
$('.next').click(function(){
    win_heigth = $(window).height();
    if(page<3){
        page++
        scroll_top()
    };//if end
    console.log('click' + page)
})
$('.prev').click(function(){
    win_heigth = $(window).height();
    if(page>0){
        page--
        scroll_top()
    };//if end
    console.log('click' + page)
})


//푸터 부분
$('.footer .site').click(function(){
    $('.footer .online').toggleClass('action-menu')
    $(this).find('.arrow1').toggleClass('action-arrow1')
    $(this).find('.arrow2').toggleClass('action-arrow2')
    $('.footer .class').removeClass('action-menu')
    $('.footer .class').find('.arrow1').removeClass('action-arrow1')
    $('.footer .class').find('.arrow2').removeClass('action-arrow2')
})
$('.footer .cooking').click(function(){
    $('.footer .class').toggleClass('action-menu')
    $(this).find('.arrow1').toggleClass('action-arrow1')
    $(this).find('.arrow2').toggleClass('action-arrow2')
    $('.footer .online').removeClass('action-menu')
    $('.footer .online').find('.arrow1').removeClass('action-arrow1')
    $('.footer .online').find('.arrow2').removeClass('action-arrow2')
})
$('.footer .x-btn').click(function(){
    $('.footer .online, .footer .class').removeClass('action-menu')
    $('.footer .arrow .arrow1').removeClass('action-arrow1')
    $('.footer .arrow .arrow2').removeClass('action-arrow2')
})
$('.num').click(function(){
    $('.num .arrow2').toggleClass('view')
    $('.num-sub').slideToggle()
})
$('.num-sub li').click(function(){
    $('.num .arrow2').removeClass('view')
    $('.num-sub').slideUp()
    text=$(this).text()
    $('.num .text').text(text)
})
$('.kitchen').click(function(){
    $('.kitchen .arrow2').toggleClass('view')
    $('.kitchen-sub').slideToggle()
})
$('.kitchen-sub li').click(function(){
    $('.kitchen .arrow2').removeClass('view')
    $('.kitchen-sub').slideUp()
    text=$(this).text()
    $('.kitchen .text').text(text)
})
$('.footer .online button, .footer .class button').click(function(){
    alert("신청되었습니다. 기입하신 이메일 또는 연락처로 입금안내가 발송될 것입니다. 감사합니다.")
    location.reload();
})