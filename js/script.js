function copyTelephoneToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


function view(element)
{
  $('body').toggleClass('_lock');
 $('.full__image').toggleClass('_active__image');
 document.querySelector('.toggle__image').setAttribute('src', `${element.querySelector('img').getAttribute('src')}`);
}
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
  });
});