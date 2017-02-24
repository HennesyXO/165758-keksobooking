'use strict';

window.renderPin = (function () {
  var templatePin = document.querySelector('#pin-template');
  var elementToClone = templatePin.content.querySelector('.pin');

  var SIZE = {
    WIDTH: 56,
    HEIGHT: 75
  };

//   document.body.appendChild(newElement);
// newElement.addEventListener('click', function() {
//   alert('Я умею работать с шаблонами');
// });
  return function (item, index) {
    var newElement = elementToClone.cloneNode(true);
    // document.body.appendChild(newElement);

    newElement.style.left = SIZE.WIDTH / 2 + item.location.x + 'px';
    newElement.style.top = SIZE.HEIGHT / 2 + item.location.y + 'px';
    newElement.setAttribute('data-index', index);

    var image = newElement.querySelector('.rounded');
    image.src = item.author.avatar;

    return newElement;
  };
})();

