$(function () {
  $('#city_lover').click(function (e) {
    e.preventDefault();
    $('#headerImage').css('background', 'url(/images/Regular_size/Home_hero1.jpg)');
    $('#city_lover a').css('color', 'color:#ffffff;');
  });
  $('#village_dweller').click(function (e) {
       e.preventDefault();
      $('#headerImage').css('background-image', 'url(/images/Regular_size/Home_hero2.jpg)');
  });
  $('#nature_seeker').click(function (e) {
    e.preventDefault();
    $('#headerImage').css('background', 'url(/images/Regular_size/Home_hero3.jpg)');
});
    $('.change').click(function (e) {
    $('.navigation').css('display', 'table');
});
    
});
function myFunction(x) {
  x.classList.toggle("change");
    if ($('.hamburger').hasClass("change")) {
      $('.navigation').css('display', 'table');
    } else {
       $('.navigation').css('display', 'none');
    }
}
function hover(x) {
    x.setAttribute('src', './images/social_icons_hover.png');
}
function out(x) {
    x.setAttribute('src', './images/social_icons.png');
}