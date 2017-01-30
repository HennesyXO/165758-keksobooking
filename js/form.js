'use strict';
// 1. Показ карточки объявления
var pin = document.querySelectorAll('.pin');
var orangePin = document.querySelector('.pin--active');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
// удаляем оранжевый ободок у существующих классов
orangePin.classList.remove('pin--active');
// перебираем NodeList pin
for (var i = 0; i < pin.length; i++) {
  var singlePin = pin[i];
  singlePin.addEventListener('click', function (e) {
    e.preventDefault();
    // добавляет оранжевый ободок пину
    singlePin.classList.add('pin--active');

    dialog.classList.remove('dialog__invisible');
  });
  // function removeActive() {
  //   for (i = 0; i < pin.length; ++i) {
  //     singlePin.classList.remove('pin--active');
  // }
  // removeActive();
}
// 2. Закрытие карточки объявления
dialogClose.addEventListener('click', function (e) {
  e.preventDefault();
  dialog.classList.add('dialog__invisible');
  singlePin.classList.remove('pin--active');
});
// 3. Проверка правильности введенных данных
// Заголовок объявления
var noticeTitle = document.querySelector('#title');
noticeTitle.required = true;
noticeTitle.minLength == 30;
noticeTitle.maxLength == 100;
// Цена за ночь
var noticePrice = document.querySelector('#price');
noticePrice.required = true;
noticePrice.minLength == 1000;
noticePrice.maxLength == 1000000;
if (noticePrice.value.parseInt) {
  return NaN;
}
// Адрес
var noticeAddress = document.querySelector('#address');
noticeAddress.required = true;
// 4. Автоматическая корректировка полей в форме.
// Поля «время заезда» и «время выезда» синхронизированы
// var timeInSelect = document.querySelector('#time');
var timeIn = document.querySelector('#time').options;
// var timeOutSelect = document.querySelector('#timeout');
var timeOut = document.querySelector('#timeout').options;


timeOutSelect.addEventListener('change', function (e) {
  e.preventDefault();
  timeIn.options[timeOut.selectedIndex].selected = true;
});
// timeInSelect.addEventListener('change', function () {
//   // e.preventDefault();
//   timeOut.options[timeIn.selectedIndex].selected = true;
// });
//  «Тип жилья» синхронизировано с минимальной ценой
