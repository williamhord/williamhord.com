$('.divOutput').hide();
//Function to allow the enter button to
//trigger the #divCalc button
$("#input").keyup(function(event){
    if(event.keyCode == 13){
        $("#divCalc").click();
    }
});
//------------------------------------------------
$('#divCalc').click(function() {
  //Alerts to user, refocus to input
  //input validation
  $('#tdStep').html('');
  $('#tdEquation').html('');
  $('#tdAnswer').html('');

  var x = $('#input').val();
  var xStatic = $('#input').val();

  //Input Validation, remove comma's then check if its a
  //number, and also if it is a whole number or a number within
  //Javascripts range
  x = x.replace(/,/g, "");
  if (isNaN(x) || x < 1 || x > 9007199254740991 || x%1 != 0) {
        alert("Hey, For some reason your input isn't working! ): \n Here are the rules for inputs: \n - A whole number between 1 and 9,007,199,254,740,991 \n - Must not contain any letters \n If you're wondering about the upper number limit sadly it's there just because of a javascript limitation");
        $('#input').focus();
  }
  else{
    for(a=1; x !== 1; a++){
      var y = x % 2;
      $('#tdStep').append(a + '.' + '<br />');
      if(y == 1){
        $('#tdEquation').append('3(' + x + ') + 1 =' + '<br />');
        x = 3*x+1;
      }
      else{
        $('#tdEquation').append(x + ' / 2 =' + '<br />');
        x = x/2;
      }
      $('#tdAnswer').append(x + '<br />');
    }
    $('.divOutput').show();
  }
});
