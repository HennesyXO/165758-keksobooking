'use strict';

window.filterPin = (function () {
  var formFilter = document.querySelector('.tokyo__filters');
  var utilities = formFilter.querySelectorAll('input[name="feature"]');

  var FILTER_ANY = 'any';

  var valuePrice = {
    LOW: 10000,
    HIGHT: 50000
  };

  var namesPrice = {
    LOW: 'low',
    MIDDLE: 'middle',
    HIGHT: 'hight'
  };

  function filterPrice(price) {
    var priceSelect = document.querySelector('#housing_price');
    switch (priceSelect.value) {
      case (namesPrice.LOW): return price < valuePrice.LOW;
      case (namesPrice.MIDDLE): return price >= valuePrice.LOW && price <= valuePrice.MIDDLE;
      case (namesPrice.HIGHT): return price > valuePrice.MIDDLE;
    }
    return false;
  }

  function filterGuests(guests) {
    var guestsSelect = document.querySelector('#housing_guests-number');

    return guestsSelect.value === FILTER_ANY || guestsSelect.value === String(guests);

  }

  function filterAccomodation(type) {
    var AccomodationSelect = document.querySelector('#housing_type');
    return AccomodationSelect.value === FILTER_ANY || AccomodationSelect.value === type;
  }


  function filterRooms(rooms) {
    var roomsSelect = document.querySelector('#housing_room-number');

    return roomsSelect.value === FILTER_ANY || roomsSelect.value === String(rooms);
  }


  function filterFeatures(feature) {
    var checkedFeatures = [];
    Array.prototype.forEach.call(utilities, function (featureElementsItem) {
      if (featureElementsItem.checked) {
        checkedFeatures.push(featureElementsItem.value);
      }
    });
    return checkedFeatures.every(function (checkedFeaturesListsItem) {
      return feature.indexOf(checkedFeaturesListsItem) >= 0;
    });
  }
  return function (apartments) {
    return apartments.filter(function (apartmentsItem) {
      return filterAccomodation(apartmentsItem.offer.type) && filterRooms(apartmentsItem.offer.rooms) && filterGuests(apartmentsItem.offer.guests) && filterPrice(apartmentsItem.offer.price) && filterFeatures(apartmentsItem.offer.features);
    });
  };


})();
