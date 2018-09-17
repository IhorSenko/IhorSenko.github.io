$( document).ready(function() {
    $(".btn-menu").click(function(e){
        e.preventDefault();
        $(this).toggleClass('btn-menu-active');
        $(this).next().slideToggle(500);
    });

    $('.domain-service a').on("click", function(e){
        e.preventDefault();
        $('.domain-service-description-hiden').slideToggle(500);
    });
    $('.web-host a').on("click", function(e){
        e.preventDefault();
        $('.web-host-description-hiden').slideToggle(500);
    });

    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop:$('#header-wrapper').position().top}, 1000);
 });

});