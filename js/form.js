'use strict';

(function () {
  var timeIn = document.querySelector('#time');
  var timeOut = document.querySelector('#timeout');
  var roomNumber = document.querySelector('#room_number');
  var apartType = document.querySelector('#type');
  var roomCapacity = document.querySelector('#capacity');
  var noticePrice = document.querySelector('#price');

  /** @constant {Array.<string>} */
  var VALUES_TIME_IN_FIELD = ['12', '13', '14'];
  var VALUES_TIME_OUT_FIELD = ['12', '13', '14'];

  var VALUES_ACCOMODATION_FIELD = ['apartment', 'hovel', 'palace'];
  var VALUES_MIN_PRICE_FIELD = ['1000', '0', '10000'];

  var VALUES_ROOM_FIELD = ['1', '2', '100'];
  var VALUES_CAPACITY_FIELD = ['0', '3', '3'];

  // 3. Проверка правильности введенных данных
  // Заголовок объявления
  var noticeTitle = document.querySelector('#title');
  noticeTitle.required = true;
  noticeTitle.minLength = 30;
  noticeTitle.maxLength = 100;

  // Цена за ночь
  noticePrice.required = true;
  noticePrice.min = 1000;
  noticePrice.max = 1000000;

  // Адрес
  var noticeAddress = document.querySelector('#address');
  noticeAddress.required = true;

  function syncValues (element, value) {
    element.value = value;
  };

  function syncValueWithMin (element, value) {
    element.min = value;
  };

  window.synchronizeFields(timeIn, timeOut, VALUES_TIME_IN_FIELD, VALUES_TIME_OUT_FIELD, syncValues);
  window.synchronizeFields(timeOut, timeIn, VALUES_TIME_IN_FIELD, VALUES_TIME_OUT_FIELD, syncValues);
  window.synchronizeFields(apartType, noticePrice, VALUES_ACCOMODATION_FIELD, VALUES_MIN_PRICE_FIELD, syncValueWithMin);
  window.synchronizeFields(roomNumber, roomCapacity, VALUES_ROOM_FIELD, VALUES_CAPACITY_FIELD, syncValues);

  window.initializePins();
})();
