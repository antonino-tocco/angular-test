/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('MainServicesModule',['BaseServicesModule'])
    .service('Streams', ['queryEngine', '$q',
        function (queryEngine, $q) {
            var module = {};

            module.getAll = function () {
                var deferred = $q.defer();
                queryEngine.getStreams(
                    function (result) {
                        console.log(result);
                    }, function (error) {
                        console.log(error);
                });
                return deferred.promise;
            };
            return module;
        }]);
