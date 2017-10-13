//-----------------------------------------------------------------------
//GSAP Animations--------------------------------------------------------
//----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
       window.requestAnimationFrame(function() {
          (function () {
            //Get elements that will be animated and assign them to a JS variable
            var imgLogo = document.getElementById('imgLogo');
            var divEmail = document.getElementById('divEmail');
            var divSocial = document.getElementById('divSocial');
            var h1 = document.getElementsByTagName('h1');
            var divProjectTitle = document.getElementsByClassName('divProjectTitle');
            var contentDetail = document.getElementsByClassName('contentDetail');

            //Set autoAlpha to prevent screen flash
            var everything = [imgLogo, divEmail, divSocial, h1, divProjectTitle, contentDetail];
            TweenLite.set(everything, {autoAlpha:1});

            //Get viewport width so different sets of animations can be played based on viewport width
            var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if(vw <= 768)
            {
              var mobileTL = new TimelineLite();
              var main = [imgLogo, divEmail, divSocial];
              var theRest = [h1, divProjectTitle, contentDetail];

              mobileTL.staggerFrom(main, 1, {yPercent: -200, opacity: 0, ease: Elastic.easeOut.config(1, 0.3)}, .5)
              .from(theRest, 1, {opacity: 0},"-=.25");
            }
            else{
              var desktopTL = new TimelineLite();
              desktopTL.from(imgLogo, .5, {xPercent: -150, opacity: 0})
              .from(divEmail, .5, {xPercent: -50, opacity: 0},"-=.25")
              .from(divSocial, .5, {xPercent: -50, opacity: 0},"-=.25")
              .staggerFrom(h1, .5, {xPercent: 50, opacity: 0}, .25, "-=.5")
              .staggerFrom(divProjectTitle, .5, {xPercent: 50, opacity: 0}, .25)
              .staggerFrom(contentDetail, .5, {xPercent: 50, opacity: 0}, .25, "-=1.25");
            }
            //While Animations are playing overflowY is set to hidden to keep the
            //animations from "pushing" the scroll bar, this just fixes that
            document.getElementById('divOne').style.overflowY = 'auto';
            document.getElementById('divTwo').style.overflowY = 'auto';
            document.getElementById('divThree').style.overflowY = 'auto';
          })();
       });
    };

});
