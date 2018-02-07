$(function(){
  $('#city_lover').click(function(e){
    e.preventDefault();
    $('#headerImage').css('background','url(/images/Regular_size/Home_hero1.jpg)','transition','background-image 2s ease-out;');
    $('#city_lover a').css('color','color:#ffffff;');
  });
  $('#village_dweller').click(function(e){
       e.preventDefault();
      $('#headerImage').css('background-image','url(/images/Regular_size/Home_hero2.jpg)','transition','background-image 2s ease-out;');
  });
  $('#nature_seeker').click(function(e){
    e.preventDefault();
    $('#headerImage').css('background','url(/images/Regular_size/Home_hero3.jpg)','transition','background-image 2s ease-out;');
});
});
function myFunction(x) {
  x.classList.toggle("change");
  //$('.navigation').toggle();
  $('.navigation').css('display','table');
}