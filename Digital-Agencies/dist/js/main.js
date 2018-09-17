$( document).ready(function() {
    $(".btn-menu").click(function(e){
        e.preventDefault();
        $(this).toggleClass('btn-menu-active');
        $(this).next().slideToggle(500);
    });
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop:$('.contacts-wraper').position().top}, 1500);
 });

});