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
// if (noticePrice.value.parseInt) {

// }
// Адрес
var noticeAddress = document.querySelector('#address');
noticeAddress.required = true;
// 4. Автоматическая корректировка полей в форме.
// Поля «время заезда» и «время выезда» синхронизированы
// var timeInSelect = document.querySelector('#time');
// var timeIn = document.querySelector('#time').options;
// // var timeOutSelect = document.querySelector('#timeout');
// var timeOut = document.querySelector('#timeout').options;


// timeOutSelect.addEventListener('change', function (e) {
//   e.preventDefault();
//   timeIn.options[timeOut.selectedIndex].selected = true;
// });
// timeInSelect.addEventListener('change', function () {
//   // e.preventDefault();
//   timeOut.options[timeIn.selectedIndex].selected = true;
// });
//  «Тип жилья» синхронизировано с минимальной ценой

