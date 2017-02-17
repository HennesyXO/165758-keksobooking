'use strict';

window.synchronizeFields = (function () {
  return function (fieldPrimary, fieldAdditional, fieldPrimaryValues, fieldAdditionalValues, fieldAttribute) {
    fieldPrimary.addEventListener('change', fieldHandler);

    function fieldHandler(event) {
      var indexSelectValue = fieldPrimaryValues.indexOf(fieldPrimary.value);
      fieldAdditional[fieldAttribute] = fieldAdditionalValues[indexSelectValue];
    }
  };
})();
