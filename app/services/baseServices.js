/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('BaseServicesModule', [])
    .service('constants', function () {
        return {
            KEYS: {
                STREAM: 'STREAMS_'
            }
        }
    })
    .service('storage', function () {
        var memcache = {};

        var hashCode = function (text) {
            return (text + "").split("").reduce(function (a, b) {
                a = ((a << 5) - a) + b.charCodeAt(0);
                return a & a
            }, 0);
        };
        var module = {};

        module.set = function (key, value) {
            memcache[hashCode(key)] = JSON.stringify(key);
        };
        module.get = function (key) {
            return memcache[hashCode(key)] ? JSON.parse(memcache[hashCode(key)]) : null;
        };
        return module;
    })
    .service('httpService', ['$http', 'storage', function ($http, storage) {
        var module = {};
        module.get = function (url, success, error) {
            var result = storage.get(url);
            if(result) {
                success(result);
            } else {
                $http({method: 'GET', url: url}).then(function (result, status, headers, config) {
                    storage.set(url, result);
                    success(result);
                }, error);
            }
        };
        return module;
    }])
    .service('queryEngine', ['httpService', function (httpService) {
        var baseUrl = '/resources/';
        var streamUrl = baseUrl + 'stream-data.json';
        var whoAmIUrl = baseUrl + 'who-am-i.json';
        var module = {};
        module.getStreams = function (success, error) {
          httpService.get(streamUrl, success, error);
        };
        module.getStream = function (id, success, error) {

        };
        module.getProfile = function (success, error) {
          httpService.get(whoAmIUrl, success, error);
        };
        return module;
    }]);