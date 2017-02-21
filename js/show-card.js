'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');

  return function () {
      dialog.style.display = 'block';
    };
})();
