$('input[data-update]').bind('keyup',function(){
	$('.js-update').html($(this).val()); 
});

//console.log($('input[data-update]'));  

$(function(){
		$('.verbutton').bind('click', function(event){
  event.preventDefault(); 
  $(this).toggleClass('active');
  var _html = "Publish";
  var span = $(this).find('span');
  if($(this).hasClass('active')){
    span.html(_html+'ed');
  } else{
    span.html(_html);
  }
  
  return false;
});
	});