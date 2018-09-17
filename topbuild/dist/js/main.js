$(document).ready(function(){
    $('.slider-news-bild').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        arrows: false 
    });

    $('.new-offer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        adaptiveHeight: true,
        autoplay: false
    });
    $('.inline-item-img, .block-item-img, .item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        adaptiveHeight: true,
        autoplay: false
    });
    $('.apartment-plan').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 500
    });

    $('.filter p').click(function(){
        $(this).next().slideToggle(1000);
        $(this).find("i").toggleClass("rotate180");    
    });
    $('#sort-form li a').click(function(){
        $('#sort-form li .sort-form-toggle').not($(this).next()).slideUp(1000);
        $(this).next().slideToggle(1000);
        
        $('#sort-form li a').children().removeClass("rotate180");  
        $(this).children().toggleClass("rotate180"); 
    });


    $('.log-reg').click(function(){
      $('.log-reg div').slideToggle(500);
  });
  $(window).resize(function() {
    if ($(window).width() <= '1140'){
      $('.log-reg').click(function(){
        $('.links').slideUp();
        $('.search-form-filters').slideUp();
    });}
    });

    $('.mobile-menu').click( function(){
      $('.links').slideToggle(500);
      $('.log-reg div').slideUp();
      $('.search-form-filters').slideUp();
    });      
      $('.mobile-filter').click(function(){
        $('.search-form-filters').slideToggle(500);
        $('.links').slideUp();
        $('.log-reg div').slideUp();
      });
    $('.block-item-table-wrapper span').click(function(){
      $(this).next().slideToggle(1000);
      $(this).children().toggleClass("rotate180");
       if($(this).text()=="rozwiń"){
         $(this).html("zwiń <i class='fas fa-sort-down rotate180'></i> ");
        }else{
        $(this).html("rozwiń<i class='fas fa-sort-down'></i>")
        }
    });
    
  $('#item-list').click(function(){
    $('.column-left, .column-right').css({'height':'0px', 'overflow-y':'hidden ', 'margin':'0px'}, 500);
    $('.inline-item-wrapper').css({'height':'auto', 'overflow-y':'visible'});
    $('.view-changer').children().css('color', '#343a40');
    $(this).css('color','#5562eb');
  });
  $('#item-block').click(function(){
    $('.inline-item-wrapper').css({'height' : '0px', 'overflow-y':'hidden ', 'margin':'0px'});
    $('.column-left, .column-right').css({'height' : 'auto', 'overflow-y':'visible'});
    $('.view-changer').children().css('color', '#343a40');
    $(this).css('color','#5562eb');
  });
    $('.log-up').click( function(event){
    event.preventDefault();
    $('.overlay').fadeIn(400, function(){
      $('.login') 
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
    });
  });
  $('.modal_close, .overlay').click( function(){ 
    $('.login')
      .animate({opacity: 0, top: '45%'}, 200,function(){ 
      $(this).css('display', 'none');
      $('.overlay').fadeOut(400);
    });
  });

  $('.reg-up').click( function(event){
    event.preventDefault();
    $('.overlay').fadeIn(400, function(){
      $('.sign-form') 
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
    });
  });
  $('.modal_close, .overlay').click( function(){ 
    $('.sign-form')
      .animate({opacity: 0, top: '45%'}, 200,function(){ 
      $(this).css('display', 'none');
      $('.overlay').fadeOut(400);
    });
  });

  $('.apartment-plan img').click( function(event){
    var i_path = $(this).attr('src');
    $('.overlay-img').append('<div class="magnify"><img src="'+i_path+'"><span class="modal_close"><i class="fas fa-times-circle"></i></span></div>');
    $('.overlay-img, .magnify').fadeIn(400);
  });


  $('.modal_close, .overlay-img').click( function(){ 
      $('.overlay-img').fadeOut(400);
      $('.magnify, #overlay-img').remove();
    });


  $('.box-order a').click( function(){
    $(this).next().slideToggle(500);
    $(this).children().toggleClass("rotate180");
  });
$('.pagination ul li').click(function(){
  $('.pagination ul li').not($(this)).css("background-color", "#ffffff");
  $(this).css("background-color", "#b2b2b2");
});
$('.part').hover(function(){
  $('.build-description h3').text('Opis'); 
  $('.build-description .realization').html($(this).attr('data-realization'));
  $('.build-description .number-building').html($(this).attr('data-number-building'));
  $('.build-description .price-m2').html($(this).attr('data-price-m2'));
  $('.build-description .metr2').html($(this).attr('data-metr2'));
  $('.build-description .rooms').html($(this).attr('data-rooms'));
  $('.build-description .floors').html($(this).attr('data-floors'));
  $('.build-description div').fadeIn();
  $('.build-description').fadeIn();
});

  $('.part1').hover(function(){
    $('.build-description div').fadeOut();
    $('.build-description h3').text($(this).attr('data-name'));
  });
  $('.maps-title').click( function(){
    $(this).next().slideToggle(500);
  });

});

//MAPS
function initMap(){
  var element = document.getElementById('map');
  var options = {
    zoom: 16,
    center: { lat: 52.2532876, lng: 21.0826577 }
  };
  var TopBuildMap = new google.maps.Map(element, options);
  addMarker({ lat: 52.2532876, lng: 21.0826577 });

  function addMarker(coordinates){
    var marker = new google.maps.Marker({
      position: coordinates,
      map: TopBuildMap,
      icon: './img/mapMarcer.png'
    });
  }


}
  //$('#sort-form li a i').not($(this).next()).removeClass("rotate180");  
  //$(this).find('i').toggleClass("rotate180");
   // if($(this).text()=="rozwiń"){
  //  $(this).text("zwiń");
 // }else{
  //  $(this).text("rozwiń")
 // }