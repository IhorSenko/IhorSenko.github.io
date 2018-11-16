$( document ).ready(function() {
$('.slider-for').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    cssEase: 0.3
  });
  
  $('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for',
    centerPadding: "0px",
    vertical: true,
    focusOnSelect: true
  });
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
  $('.coments-slide').slick({
    slidesToShow: 3,
    vertical: true,
    draggable: false
  });
  $('.coments-slide .slick-current').next().addClass('border-slide');
  $('.coments-slide .slick-prev, .coments-slide .slick-next').on("click", function(){
    $('.coments-slide .slick-active').removeClass('border-slide');
    $('.coments-slide .slick-current').next().addClass('border-slide');
  });
  $('.menu a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); 
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
            scrollTop: $(dest).offset().top 
        }, 500 
        );
    }
    return false;
});
$('.call-my').on('click', function(){
  $('#call-form').slideToggle(500);
});
$(".btn-menu").click(function(e){
  e.preventDefault();
  $(this).toggleClass('btn-menu-active');
  $(this).next().slideToggle(500);
});
$(function(){
  if ($(window).width()<=768){
    $('.always-with-you-slide').slick({
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '60px',
      arrows: false
    });
    $('.wrapper-gread').children().removeClass('container').addClass('container-fluid');
  }
});
$(function(){
  if($(window).width()<=576){
    var alwaysWithYouSlide = $('.always-with-you-slide').height();
    $('.description-wrapper').css('height',  alwaysWithYouSlide);
  }
});
});