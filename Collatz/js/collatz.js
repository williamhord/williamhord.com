$('#divOutput').hide();
//Function to allow the enter button to
//trigger the #divCalc button
$("#input").keyup(function(event){
    if(event.keyCode == 13){
        $("#divCalc").click();
    }
});
//------------------------------------------------
$('#butCalc').click(function() {
  $("tr:not(:first)").remove();
  var x = $('#input').val();
  //Remove commas if present
  x = x.replace(/,/g, "");
  //Check to see if input is not a number
  if(isNaN(x)) {
        alert("Sorry, but I can't accept that as a number");
        $('#input').focus();
        return
  }
  //Make sure input is not blank
  else if(x == ''){
    alert("Sorry, it doesn't appear you've entered anything");
    $('#input').focus();
    return
  }
  //Make sure its not a decimal number
  else{
    try{
      var x = bigInt(x);
    }
    catch(err) {
        alert("Sorry, but what you entered isn't an integer");
        $('#input').focus();
        return
    }
    calculate(x);
    $('#divOutput').show();
    $.scrollTo($('#divOutput'),500);
  }
});
$('#butBottom').click(function() {
  $.scrollTo($('#butTop'),1000);
});
$('#butTop').click(function() {
  $.scrollTo($('#divOutput'),1000);
});

//Caluate function: Applies 3n+1 to odd numbers; n/2 to even ones.
//It loops and keeps on doing that until you either have the number 1 or
//there have been 10000 interations through the loop. It also builds
//the rows of the table as it loops through appending the current loop
//to the table
function calculate(x){
  for(a=1; a < 10001 && bigInt(x).notEquals(1); a++){
    var row = $('<tr>');
    row.append($('<td>' + a + '. </td>'));
    if(bigInt(x).isOdd()){
      row.append($('<td>3(' + bigInt(x).toString() + ') + 1 = </td>'));
      x = bigInt(3).multiply(x).plus(1);
    }
    else{
        row.append($('<td>' + bigInt(x).toString() + ' / 2 = </td>'));
      x = bigInt(x).divide(2);
    }
    row.append($('<td>' + bigInt(x).toString() + '</td>' + '</tr>'));
    $("#tableOutput").append(row);
  };
}
