/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('BaseServicesModule', [])
    .service('constants', function () {
        return {
            
        }
    })
    .service('httpService', ['$http', function ($http) {
        var module = {};
        module.get = function (url, success, error) {
            $http({method: 'GET', url: url}).then(function (result, status, headers, config) {
                success(result);
            }, error);
        };
        return module;
    }])
    .service('queryEngine', ['httpService', function (httpService) {
        var baseUrl = '../../resources/';
        var streamUrl = baseUrl + 'stream-data.json';
        var whoAmIUrl = baseUrl + 'who-am-i.json';
        var module = {};
        module.getStreams = function (success, error) {
          httpService.get(streamUrl, success, error);
        };
        module.getProfile = function (success, error) {
          httpService.get(whoAmIUrl, success, error);
        };
        return module;
    }]);