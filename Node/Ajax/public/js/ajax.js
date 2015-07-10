$(document).ready(function(){
  function successCallback(e){
    $('#js-result').text(e);
  }

  $('#js-placeholder').click(function(){
    $.ajax({
      url: '/ajax',
      success: successCallback
    });
  });
});
