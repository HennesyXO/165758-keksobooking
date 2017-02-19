'use strict';

window.synchronizeFields = (function () {
  return function (fieldPrimary, fieldAdditional, fieldPrimaryValues, fieldAdditionalValues, fieldAttribute) {

    function fieldHandler(event) {
      var indexSelectValue = fieldPrimaryValues.indexOf(fieldPrimary.value);
      fieldAdditional[fieldAttribute] = fieldAdditionalValues[indexSelectValue];
    }

    fieldPrimary.addEventListener('change', fieldHandler);
  };
})();
