function popup_open(set_popup) {
  $("#" + set_popup)
    .addClass("active")
    .next()
    .addClass("active")
  console.log("click")
}

function popup_close(set_popup) {
  $("#" + set_popup)
    .removeClass("active")
    .next()
    .removeClass("active")
  console.log("click")
}

$(document).ready(function () {
  $("body").on("click", ".switch", function (e) {
    console.log(this);
    var i = +$(this).index()
    var id = $(this).attr("data-sw")
    $(this)
      .parent()
      .find("[data-sw=" + id + "]")
      .removeClass("active")
    $(this).addClass("active")
    $("[data-swb=" + id + "]").hide()
    $("[data-swb=" + id + "]:eq(" + i + ")").show()
  })

  //    $('body').on('click', ".arrow", function(e)
  //  	{
  //  		if($(this).hasClass('next')) $('.switch.active').next().click();
  //  		else $('.switch.active').prev().click();
  //  	});

  //    var $draggable = $('.dsa').draggabilly({
  //      // options...
  //    });

  //  $('.dsa').draggable({});

  // $('.dsa').mousedown(function(event) {
  // 	$('.dsa').css({transition: 'none'});
  // });

  // $('.dsa').mouseup(function(event) {
  // 	$('.dsa').css({transition: 'all 0.7s'});
  // });

  // bxslider
  // $(document).ready(function(){
  // $('.bxslider').bxSlider({
  // mode: 'fade',
  // });
  // });
})
