'use strict';
// 1. Показ карточки объявления
var pin = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');

// удаляем оранжевый ободок у существующих классов
function removeActivePin() {
  var actPin = document.querySelector('.pin--active');
  if (actPin) {
    actPin.classList.remove('pin--active');
  }
}

Array.prototype.forEach.call(pin, function (singlePin) {
  singlePin.addEventListener('click', function () {
    removeActivePin();
    singlePin.classList.add('pin--active');
    dialog.style.display = 'block';
  });
});

// 2. Закрытие карточки объявления
function closeModal() {
  removeActivePin();
  dialog.style.display = 'none';
}

dialogClose.addEventListener('click', closeModal);

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
// 4. Автоматическая корректировка полей в форме.
// Поля «время заезда» и «время выезда» синхронизированы
var timeIn = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');

function connectOptions() {
  timeOut.value = timeIn.value;
}

function connectOptionsBack() {
  timeIn.value = timeOut.value;
}

timeIn.addEventListener('change', connectOptions);
timeOut.addEventListener('change', connectOptionsBack);

//  «Тип жилья» синхронизировано с минимальной ценой
var apartType = document.querySelector('#type');

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

apartType.addEventListener('change', switchPrice);

var roomNumber = document.querySelector('#room_number');
var roomCapacity = document.querySelector('#capacity');
var oneRoom = roomNumber.value === '1';
roomCapacity.value = 0;

function switchRoomValue() {
  roomCapacity.value = (oneRoom) ? 0 : 3;
}

roomNumber.addEventListener('change', switchRoomValue);
