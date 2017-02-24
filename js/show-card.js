'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');

  return function (card) {
    var description = dialog.querySelector('.lodge__description');
    description.textContent = card.offer.description;

    var title = dialog.querySelector('.lodge__title');
    title.textContent = card.offer.title;

    var address = dialog.querySelector('.lodge__address');
    address.textContent = card.offer.address;

    var price = dialog.querySelector('.lodge__price');
    price.textContent = card.offer.price + '₽/ночь';

    var type = dialog.querySelector('.lodge__type');
    type.textContent = card.offer.type;

    var rooms = dialog.querySelector('.lodge__rooms-and-guests');
    rooms.textContent = card.offer.rooms + 'комната для ' + card.offer.guests + ' гостей';

    var checkin = dialog.querySelector('.lodge__checkin-time');
    checkin.textContent = 'Заезд после' + card.offer.checkin + ', выезд до ' + card.offer.checkout;

    var photos = dialog.querySelector('.lodge__photos');

    var photosArray = card.offer.photos;

    photosArray.forEach(function (photosListItem) {
      var img = new Image(52, 52);
      img.src = photosListItem;
      photos.appendChild(img);
    });

    var features = dialog.querySelector('.lodge__features');
    var featuresArray = card.offer.features;

    featuresArray.forEach(function (featuresListItem) {
      var feature = document.createElement('span');
      feature.classList.add('feature__image');
      feature.classList.add('feature__image--' + featuresListItem);
      features.appendChild(feature);

    });

    dialog.style.display = 'block';
  };
})();


