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

    tokioMap.addEventListener('click', onOpen);
    dialogClose.addEventListener('click', onClose);
    dialogClose.addEventListener('keydown', onClose);

    for (var i = 0; i < pins.length; i++) {
      pins[i].addEventListener('keydown', onOpenByEnter);
    }

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

      if (!target.classList.contains('pin')) {
        return;
      }

      deactivatePin();
      activatePin(target);
      window.showCard();
    }

    function onOpenByEnter(event) {
      var target = event.target;

      if (event.keyCode !== ENTER_KEY_CODE) {
        return;
      }

      if (!target.classList.contains('pin')) {
        return;
      }

      deactivatePin();
      activatePin(target);
      window.showCard();
      wasOpenByEnter = true;
    }

    function onClose(event) {
      event.preventDefault();
      var target = event.target;

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

    function close() {
      if (typeof callback === 'function' && wasOpenByEnter) {
        callback(activePin);
        wasOpenByEnter = false;
      }

      deactivatePin();
      dialog.style.display = 'none';
    }
  };
})();
