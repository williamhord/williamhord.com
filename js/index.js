//-----------------------------------------------------------------------
//GSAP Animations--------------------------------------------------------
//-----------------------------------------------------------------------
//Get elements that will be animated and assign them to a JS variable
(function () {
  var imgLogo = document.getElementById('imgLogo');
  var divEmail = document.getElementById('divEmail');
  var divSocial = document.getElementById('divSocial');
  var h1 = document.getElementsByTagName('h1');
  var divProjectTitle = document.getElementsByClassName('divProjectTitle');
  var contentDetail = document.getElementsByClassName('contentDetail');
  var divTheme = document.getElementById('divTheme');

  //Get viewport width so different sets of animations can be played based on viewport width
  var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(vw > 768)
  {
    var desktopTL = new TimelineLite();
    desktopTL.from(imgLogo, .5, {autoAlpha: 0, xPercent: -150, opacity: 0})
    .from(divEmail, .5, {autoAlpha: 0, xPercent: -50, opacity: 0},"-=.25")
    .from(divSocial, .5, {autoAlpha: 0, xPercent: -50, opacity: 0},"-=.25")
    .staggerFrom(h1, .5, {autoAlpha: 0, xPercent: 50, opacity: 0}, .25, "-=.5")
    .staggerFrom(divProjectTitle, .5, {autoAlpha: 0, xPercent: 50, opacity: 0}, .25)
    .staggerFrom(contentDetail, .5, {autoAlpha: 0, xPercent: 50, opacity: 0}, .25, "-=1.25")
    .from(divTheme, .25, {autoAlpha: 0, opacity: 0});
  }
  else{
    var mobileTL = new TimelineLite();
    var main = [imgLogo, divEmail, divSocial];
    var theRest = [h1, divProjectTitle, contentDetail, divTheme];

    mobileTL.staggerFrom(main, 1, {autoAlpha: 0, yPercent: -200, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)}, .5)
    .from(theRest, 1, {autoAlpha: 0, opacity: 0},"-=.25");
  }
  //While Animations are playing overflowY is set to hidden to keep the
  //animations from "pushing" the scroll bar, this just fixes that
  document.getElementById('divOne').style.overflowY = 'auto';
  document.getElementById('divTwo').style.overflowY = 'auto';
  document.getElementById('divThree').style.overflowY = 'auto';
})();
//-----------------------------------------------------------------------
//Theme Changing stuff---------------------------------------------------
//-----------------------------------------------------------------------
//Show dropdown after clicking 'Theme' button
function changeClick(){document.getElementById("divThemeDrop").classList.toggle("show")};

//Button Handlers
document.getElementById("butTheme").onclick = function() {changeClick()};
document.getElementById("butMonokai").onclick = function() {changeTheme('/css/monokai.css', 'icon-monokai')};
document.getElementById("butSolarDark").onclick = function() {changeTheme('/css/solarizeddark.css', 'icon-solarizedDark')};
document.getElementById("butSolarLight").onclick = function() {changeTheme('/css/solarizedlight.css', 'icon-solarizedLight')};
document.getElementById("butGrayscale").onclick = function() {changeTheme('/css/grayscale.css', 'icon-grayscale')};
document.getElementById("butInvisible").onclick = function() {changeTheme('/css/invisible.css', 'icon-invisible')};

function removeOldCSS(){
    document.head.removeChild(document.head.lastChild.previousElementSibling);
}

function changeTheme(colors, logo){
  var head = document.head;
  var current = head.lastChild.href;
  //WILL NEED TO CHANGE NEXT LINE AFTER UPLOADING TO FIX
  var compareFile = 'http://www.williamhord.com' + colors;
	console.log(current);
	console.log(compareFile);
  if(compareFile == current ){
	console.log('workingcorrectly?');
	return;
  }
  else{
    var link = document.createElement('link');
    var newLogo = "<img src='/assets/" + logo + ".svg'>";

    link.rel = 'stylesheet';
    link.href = colors;

    head.appendChild(link);
    document.getElementById('divLogo').innerHTML = "" + newLogo + "";
    setTimeout(removeOldCSS, 5000);
  }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#butTheme')) {

    var dropdowns = document.getElementsByClassName("divDropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
