//Hide buttons initally to show them later
$("#divSlow").hide();
$("#divReverse").hide();
//These are variables being declared to
//count clicks on buttons so the buttons
//can do something different after the
//first time they are clicked
var x=0;
var y=0;
var z=0;
//Declaring button tweens now so I can call them
//throughout different button clicks, deciding
//when to disply them
var dispNorm = new TweenLite.from("#divNorm", .5, {
  delay: 8,
  autoAlpha: 0,
  y: 500
});
var dispSlow = new TweenLite.from("#divSlow", .5, {
  delay: 8,
  autoAlpha: 0,
  y: 500
});
var dispReverse = new TweenLite.from("#divReverse", .5, {
  delay: 8,
  autoAlpha: 0,
  y: 500
});
//Declaring the timeline that has all the
//tweens on it except for the buttons
var tl = new TimelineLite();
//First line of text
tl.from("#1", 1, {
    autoAlpha: 0,
    y: -200,
    ease: Sine.easeOut
  })
//Second line of text
  .from("#2", 1, {
    autoAlpha: 0,
    xPercent: 50,
    yPercent: -50,
    ease: Elastic.easeOut.config(1.5, 0.5)
  })
//Third line of text
  .from("#3", 1, {
    autoAlpha: 0,
    xPercent: -50,
    yPercent: -50,
    ease: Elastic.easeOut.config(1.5, 0.5)
  }, "-=.5")
//Blue div (Blue and Yellow go at the same time)
  .from("#blue", .5, {
    autoAlpha: 0,
    transformOrigin: "left bottom",
    rotation: 180
  }, "uno")
//Yellow div
  .from("#yellow", .5, {
    autoAlpha: 0,
    transformOrigin: "right bottom",
    rotation: -180
  }, "uno")
//Red div (Red and Green go at the same time,
// .2 seconds after the previous two start)
  .from("#red", .5, {
    autoAlpha: 0,
    transformOrigin: "left bottom",
    rotation: 180
  }, "uno+=.2")
//Green div
  .from("#green", .5, {
    autoAlpha: 0,
    transformOrigin: "right bottom",
    rotation: -180
  }, "uno+=.2")
//the 3 icons that spin in from the bottom
  .staggerFrom("li", .75, {
    autoAlpha: 0,
    y: 100,
    rotation: 720,
    ease: Power2.easeIn
  }, .2, "-=.2")
//A wild "ok" emoji (svg) appears
  .from("#hokay", 1, {
    autoAlpha: 0
  })
//Crazy zoom in/out and rotation
  .from("#hokay", 5, {
    rotation: 720,
    scale: 2,
    ease: Elastic.easeOut.config(2, 0.2)
  },"-=1");
//Display the replay button initally
  dispNorm.restart(true, false);

//Button to play 💯% speed
// ..
// That was the 100 emoji if your
// OS / Browser doesn't support them
$('#divNorm').click(function() {
//This if statement goes first. It increments
//the variable at the begining so that
//it will go to the "else" part next time.
//It also changes the button clicked to
//a more formal name and shows back up with
//another friend (button). Lastly it restarts
//the timeline at a normal speed.
  if(x==0){
    x=x+1;
    $("#divNorm").html("Normal speed");
//Restarts timeline
    tl.timeScale(1)
    tl.restart(true, false);
    dispNorm.restart(true, false);
    $("#divSlow").show()
    dispSlow.restart(true, false);
  }
//The else statement just restarts the timeline
  else{
    tl.timeScale(1)
    tl.restart(true, false);
  }
});

//Button to play 50% speed
$('#divSlow').click(function() {
  //This if statement does about the same thing
  //as the one in the last button handler
  if(y==0){
    y=y+1;
    $("#divSlow").html("Slow");
//Restarts timeline... ssloooower
    tl.timeScale(0.5);
    tl.restart(true, false);
    dispNorm.restart(true, false);
    dispSlow.restart(true, false);
    $("#divReverse").show()
    dispReverse.restart(true, false);
  }
  else{
    tl.timeScale(0.5);
    tl.restart();
  }
});

//Button to play reverse
$('#divReverse').click(function() {
  var ct = tl.time();
  if(z==0){
    z=z+1;
//This is where things are different,
//I wanted to be able to reverse an already
//playing animation, but if an animation wasn't
//on the screen nothing would happen when the
//button is clicked, that was this if
//statement does.
    if(ct==0){
      tl.time(9.15);
      tl.timeScale(1);
      tl.reversed(true);
    }
//The else will reverse alredy playing
//animations taking the current speed of it
    else{
      tl.reversed(true);
    }
    $("#divReverse").html("Reverse");
    dispNorm.restart(true, false);
    dispSlow.restart(true, false);
    dispReverse.restart(true, false);
  }
  else{
    if(ct==0){
      tl.time(9.15);
      tl.timeScale(1);
      tl.reversed(true);
    }
    else{
      tl.reversed(true);
    }
  }
});
