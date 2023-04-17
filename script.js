function popup_open(set_popup)
{
	$('#' + set_popup).addClass('active').next().addClass('active');
};

function popup_close(set_popup)
{
	$('#' + set_popup).removeClass('active').next().removeClass('active');
}



$(document).ready(function()
{

	$('.switch').click(function(event)
	{
		console.log(this);
		var i = +$(this).index();
		var id = $(this).attr('data-sw');
		$(this).parent().find('[data-sw='+id+']').removeClass('active');
		$(this).addClass('active');
		$('[data-swb='+id+']').hide();
		$('[data-swb='+id+']:eq('+i+')').show();
	});

	// var textarea = $('.edit_msg .textarea');
	// textarea.on("input",function(ev){
	//   if(textarea.html() != '')
	//   	$('.btn_send').addClass('active');
	//   else
	//   	$('.btn_send').removeClass('active');
	// });


});

// var text = document.querySelector('.edit_msg .textarea');
// text.oninput = function(){
// 	if(text.innerHTML.length > 0){

// 	}
// }