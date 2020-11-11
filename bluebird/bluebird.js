
//스크롤바
$('body').niceScroll({
    cursorcolor:"#000aba",
    cursorwidth:"8px"
});
AOS.init();

//메뉴버튼
$('.header .menu').click(function(){
    $('.header').toggleClass('active')
    $('.black-bg').toggleClass('view')
    $('.m-menu').slideToggle()
    $("body").toggleClass("hiddenscroll")
})

//메인
$(window).scroll(function(){
    scroll_top=$(window).scrollTop()
    $('.main .bg .tree1').css({backgroundPositionY:-scroll_top*0.5})
    $('.main .bg .tree2').css({backgroundPositionY:-scroll_top*0.9})
})

//stage
$('.section3 .select').mouseenter(function(){
    $('.section3 .cursor').css({opacity:1})
})
$('.section3 .select').mouseleave(function(){
    $('.section3 .cursor').css({opacity:0})
})
$(window).mousemove(function(event){
        scroll_top=$(window).scrollTop()
        mouseX=event.clientX
        mouseY=event.clientY
        $('.section3 .cursor').css({left:mouseX, top:mouseY})
    })

//P-ARCHIVE
$('.poster1').mouseenter(function(){
    $('.line1').stop().css({top:'150px'})
})
$('.poster2').mouseenter(function(){
    $('.line2').stop().css({top:'150px'})
})
$('.poster3').mouseenter(function(){
    $('.line3').stop().css({top:'150px'})
})
$('.poster7').mouseenter(function(){
    $('.line1').stop().css({top:'-150px'})
})
$('.poster8').mouseenter(function(){
    $('.line2').stop().css({top:'-150px'})
})
$('.poster9').mouseenter(function(){
    $('.line3').stop().css({top:'-150px'})
})
$('.poster').mouseleave(function(){
    $('.poster-line').stop().css({top:0})
})

$('.poster1').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal1').show()
})
$('.poster2').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal2').show()
})
$('.poster3').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal3').show()
})
$('.poster4').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal4').show()
})
$('.poster5').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal5').show()
})
$('.poster6').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal6').show()
})
$('.poster7').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal7').show()
})
$('.poster8').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal8').show()
})
$('.poster9').click(function(){
    $('.modal_popup').css({display:'flex'})
    $('.pop').hide()
    $('.modal9').show()
})
$('.modal_popup .bg').click(function(){
    $('.modal_popup').css({display:'none'})
})
$('.modal_popup').click(function(){
    win_width=$(window).width()
    if(win_width<768){
        $(this).css({display:'none'})
    }
})