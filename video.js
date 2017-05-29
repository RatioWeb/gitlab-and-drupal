(function (Reveal) {
  'use strict';
  
  Reveal.configure({
    keyboard: {
      13: 'next', // go to the next slide when the ENTER key is pressed
      27: function () {}, // do something custom when ESC is pressed
      32: function vidplay() { 
        var video = document.getElementById("video");

        if (video.paused === true) {
          video.play();
        }
        else  {
          video.pause();
        };
      }
    }
  });
}) (Reveal);
