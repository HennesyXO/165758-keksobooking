'use strict';

window.load = (function () {
  return function (url, onload) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.addEventListener('load', function (event) {
      if (event.target.status >= 200) {
        onload(event.target.response);
      }
    });

    xhr.responseType = 'json';

    xhr.send();
  };
})();
