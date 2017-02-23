'use strict';

window.renderPin = (function () {
  var templatePin = document.querySelector('#pin-template');
  var elementToClone = templatePin.content.querySelector('.pin');

  var PIN_SIZE = {
    WIDTH: 56,
    HEIGHT: 75
  };

  return function (item, index) {
    var newElement = elementToClone.cloneNode(true);
    newElement.style.left = PIN_SIZE.WIDTH / 2 + item.location.x + 'px';
    newElement.style.top = item.location.y + 'px';
    newElement.setAttribute('data-index', String(index));

    return newElement;
  };
});

