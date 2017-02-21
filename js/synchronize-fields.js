'use strict';

window.synchronizeFields = (function () {
  return function (fieldPrimary, fieldAdditional, fieldPrimaryValues, fieldAdditionalValues, callback) {
    fieldPrimary.addEventListener('change', onChange);

    function onChange() {
      var value = fieldPrimary.value;
      var index = fieldPrimaryValues.indexOf(value);

      if (index === -1) {
        return;
      }

      var syncValue = fieldAdditionalValues[index];

      if (typeof callback === 'function') {
        callback(fieldAdditional, syncValue);
      }
    }
  };
})();
