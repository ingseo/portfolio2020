
//스크롤
$('body').niceScroll({
    cursorcolor:"#4a4339",
    cursorwidth:"8px"
});


//헤더~메뉴 부분
$('.header .menu').click(function(){
    $('.main-menu').animate({top:0})
})
$('.main-menu .x-btn').click(function(){
    $('.main-menu').animate({top:'-100%'})
})

$('.main-menu').on('scroll mousewheel', function(event){ 
    event.preventDefault();
    event.stopPropagation();
});
