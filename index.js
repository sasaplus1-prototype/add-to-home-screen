(function(){

  'use strict';

  window.addEventListener('load', function(event) {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('./sw.js');
    }
  }, false);

}());
