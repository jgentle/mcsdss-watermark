(function() {
  'use strict';

  // AnalysisDataLoader used to load data for Anlaysis dashboard views asynchronously.
  angular
    .module('core')
    .factory('AnalysisDataFactory', AnalysisDataFactory);

  AnalysisDataFactory.$inject = ['$q', '$http', '$log'];

  function AnalysisDataFactory($q, $http, $log) {
    // APPROACH 1.
    // Requires managing deferred object and custom promise.
    return {
      getData: function(target) {
        var _deferred = $q.defer(); // make the promise.
        $http.get(target)
          .success(function(data) {
            _deferred.resolve({
              attribute1: data.attribute1,
              attribute2: data.attribute2
            });
          })
          .error(function(msg, code) {
            _deferred.reject(msg);
            $log.error(msg, code);
          });
        return _deferred.promise;
      }
    };
  }
})();