'use strict';

// 1. Показ карточки объявления
var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var tokioMap = document.querySelector('.tokyo__pin-map');
var timeIn = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');
var roomNumber = document.querySelector('#room_number');

var activePin = null;

var ENTER_KEY_CODE = 13;

tokioMap.addEventListener('click', onOpen);
dialogClose.addEventListener('click', onClose);
timeIn.addEventListener('change', onConnectOptions);
timeOut.addEventListener('change', onConnectOptionsBack);
roomNumber.addEventListener('change', onSwitchRoomValue);

for (var i = 0; i < pins.length; i++) {
  pins[i].addEventListener('keydown', onOpenByEnter);
}

// 3. Проверка правильности введенных данных
// Заголовок объявления
var noticeTitle = document.querySelector('#title');
noticeTitle.required = true;
noticeTitle.minLength = 30;
noticeTitle.maxLength = 100;

// Цена за ночь
var noticePrice = document.querySelector('#price');
noticePrice.required = true;
noticePrice.min = 1000;
noticePrice.max = 1000000;

// Адрес
var noticeAddress = document.querySelector('#address');
noticeAddress.required = true;

//  «Тип жилья» синхронизировано с минимальной ценой
var apartType = document.querySelector('#type');
apartType.addEventListener('change', switchPrice);

var roomCapacity = document.querySelector('#capacity');
var oneRoom = roomNumber.value === '1';
roomCapacity.value = 0;

function switchPrice() {
  switch (apartType.value) {
    case 'appartment': noticePrice.min = 1000;
      break;
    case 'hovel': noticePrice.min = 0;
      break;
    case 'palace': noticePrice.min = 10000;
      break;
  }
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
  dialog.style.display = 'block';
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
  dialog.style.display = 'block';
}

function onClose(event) {
  event.preventDefault();
  deactivatePin();
  dialog.style.display = 'none';
}

function onConnectOptions() {
  timeOut.value = timeIn.value;
}

function onConnectOptionsBack() {
  timeIn.value = timeOut.value;
}

function onSwitchRoomValue() {
  roomCapacity.value = (oneRoom) ? 0 : 3;
}
