'use strict';
// 1. Показ карточки объявления
var pin = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
if (dialog) {
  var dialogClose = dialog.querySelector('.dialog__close');
}
// удаляем оранжевый ободок у существующих классов
var removeActivePin = function () {
  var actPin = document.querySelector('.pin--active');
  if (actPin) {
    actPin.classList.remove('pin--active');
  }
};

if (pin) {
  Array.prototype.forEach.call (pin, function (singlePin) {
    singlePin.addEventListener ('click', function () {
      removeActivePin();
      singlePin.classList.add('pin--active');
      dialog.style.display = 'block';
    });
  });
}
// 2. Закрытие карточки объявления
if (dialogClose) {
  dialogClose.addEventListener('click', function () {
    removeActivePin();
    dialog.style.display = 'none';
  });
}

// 3. Проверка правильности введенных данных
// Заголовок объявления
var noticeTitle = document.querySelector('#title');
noticeTitle.required = true;
noticeTitle.min = 30;
noticeTitle.max = 100;
// Цена за ночь
var noticePrice = document.querySelector('#price');
noticePrice.required = true;
noticePrice.min = 1000;
noticePrice.max = 1000000;

// Адрес
var noticeAddress = document.querySelector('#address');
noticeAddress.required = true;
// 4. Автоматическая корректировка полей в форме.
// Поля «время заезда» и «время выезда» синхронизированы
var timeIn = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');

if (timeIn && timeOut) {
  timeIn.addEventListener('change', function() {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', function() {
    timeIn.value = timeOut.value;
  });
}


//  «Тип жилья» синхронизировано с минимальной ценой
var apartType = document.querySelector('#type');

if (apartType && noticePrice) {
  apartType.addEventListener('change', function() {
    switch (apartType.value) {
      case 'appartment': noticePrice.min = 1000;
      break;
      case 'hovel': noticePrice.min = 0;
      break;
      case 'palace': noticePrice.min = 10000;
      break;
    }
  });
}

var roomNumber = document.querySelector('#room_number');
var roomCapacity = document.querySelector('#capacity');

var isOneRoom = function () {
  return noticeRoomNumber.value === '1';
};

if (roomNumber && roomCapacity) {
  if (roomNumber.value === '1') {
    roomCapacity.value = 0;
  }

  roomNumber.addEventListener('change', function () {
    roomCapacity.value = (roomNumber.value === '1') ? 0 : 3;
  });
}
