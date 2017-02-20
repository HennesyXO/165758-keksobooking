'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');
  return function (event) {
      var target = event.target;

      dialog.style.display = 'block';
    };

})();
