/*$('#welcome_button').on('click', function() {
    const toptop = $('#content').position().top;

    $('html, body').animate(
      {
        scrollTop: toptop
      },
      1100);
});*/

$('#welcome_button').hover(function() {
  $('#welcome_video').css('filter','blur(15px)');
}, function() {
  $('#welcome_video').css('filter','none');
});