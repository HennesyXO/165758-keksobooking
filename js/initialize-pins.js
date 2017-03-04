'use strict';

window.initializePins = (function () {
  return function (callback) {
    var pins = document.querySelectorAll('.pin');
    var dialog = document.querySelector('.dialog');
    var dialogClose = dialog.querySelector('.dialog__close');
    var tokioMap = document.querySelector('.tokyo__pin-map');
    var activePin = null;
    var wasOpenByEnter = false;
    var ENTER_KEY_CODE = 13;

    var filtersMapElement = document.querySelector('.tokyo__filters');
    var apartments = [];
    var filteredAppertments = [];

    tokioMap.addEventListener('click', onOpen);
    dialogClose.addEventListener('click', onClose);
    dialogClose.addEventListener('keydown', onCloseByEnter);

    for (var i = 0; i < pins.length; i++) {
      pins[i].addEventListener('keydown', onOpenByEnter);
    }

    var similarApartments = [];
    var URL_LOAD = 'https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data';

    window.load(URL_LOAD, onLoad);

    function activatePin(pin) {
      pin.classList.add('pin--active');
      pin.setAttribute('aria-pressed', 'true');
      activePin = pin;
    }

    function deactivatePin() {
      if (!activePin) {
        return;
      }

      activePin.classList.remove('pin--active');
      activePin.setAttribute('aria-pressed', 'false');
      activePin = null;
    }

    function onOpen(event) {
      var target = event.target;

      if (target.tagName === 'IMG') {
        target = target.parentNode;
      }

      open(target);
    }

    function onOpenByEnter(event) {
      var target = event.target;

      if (target.keyCode !== ENTER_KEY_CODE) {
        return;
      }

      open();
      wasOpenByEnter = true;
    }

    function onClose(event) {
      event.preventDefault();
      close();
    }

    function onCloseByEnter(event) {
      var target = event.target;

      if (event.keyCode !== ENTER_KEY_CODE) {
        return;
      }

      if (!target.classList.contains('pin')) {
        return;
      }

      close();
    }

    function open(element) {
      if (!element.classList.contains('pin')) {
        return;
      }

      deactivatePin();
      activatePin(element);

      var index = element.getAttribute('data-index');
      var card = similarApartments[index];
      window.showCard(card);
    }

    function close() {
      if (typeof callback === 'function' && wasOpenByEnter) {
        callback(activePin);
        wasOpenByEnter = false;
      }

      deactivatePin();
      dialog.style.display = 'none';
    }

    function clearPins() {
      window.showCard(card);

      for (i = 0; i < pins.length; i++) {
        if (pins[i].dataset.index) {
          pins[i].remove();
        }
      }
    }

    filtersMapElement.addEventListener('change', function () {
      clearPins();
      var fragment = document.createDocumentFragment();
      apartments = similarApartments.slice(0);
      filteredAppertments = window.filterPin(apartments);
      filteredAppertments.forEach(function (item, index) {
        fragment.appendChild(window.renderPin(item, index));
      });

      tokioMap.appendChild(fragment);
    });

    function onLoad(data) {
      similarApartments = data;
      var newSimilarApartments = similarApartments.slice(0, 3);
      var fragment = document.createDocumentFragment();

      newSimilarApartments.forEach(function (item, index) {
        var element = window.renderPin(item, index);
        fragment.appendChild(element);
      });

      tokioMap.appendChild(fragment);
    }
  };
})();
