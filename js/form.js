'use strict';

var timeIn = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');
var roomNumber = document.querySelector('#room_number');

/** @constant {Array.<string>} */
var VALUES_TIME_IN_FIELD = ['12', '13', '14'];
var VALUES_TIME_OUT_FIELD = ['12', '13', '14'];

var VALUES_ACCOMODATION_FIELD = ['apartment', 'shack', 'palace'];
var VALUES_MIN_PRICE_FIELD = ['1000', '0', '10000'];

var VALUES_ROOM_FIELD = ['1', '2', '100'];
var VALUES_CAPACITY_FIELD = ['0', '3', '3'];

window.synchronizeFields(timeIn, timeOut, VALUES_TIME_IN_FIELD, VALUES_TIME_OUT_FIELD, 'value');
window.synchronizeFields(apartType, noticePrice, VALUES_ACCOMODATION_FIELD, VALUES_MIN_PRICE_FIELD, 'min');
window.synchronizeFields(roomNumber, roomCapacity, VALUES_ROOM_FIELD, VALUES_CAPACITY_FIELD, 'value');

timeIn.addEventListener('change', onConnectOptions);
timeOut.addEventListener('change', onConnectOptionsBack);
roomNumber.addEventListener('change', onSwitchRoomValue);

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

function onConnectOptions() {
  timeOut.value = timeIn.value;
}

function onConnectOptionsBack() {
  timeIn.value = timeOut.value;
}

function onSwitchRoomValue() {
  roomCapacity.value = (oneRoom) ? 0 : 3;
}

window.initializePins();
