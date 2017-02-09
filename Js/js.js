$('.navBar-bg').hide();

$(document).ready(function(){


  // controls navbar display
  $(window).scroll(function(){
  if($(window).scrollTop()>70){
    console.log($(window).scrollTop());
    $('.navBar').hide(500);
    $('.navBar-bg').show(500);
  }
else {
  $('.navBar-bg').hide(500);
  $('.navBar').show(500);
  }
});


$('.bars').on('click',function(){
  console.log('clicking')
  $('.dd-navs').slideToggle();
})


});
