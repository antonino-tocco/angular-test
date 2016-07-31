/**
 * Created by antoninotocco on 30/07/16.
 */
var modelServices = angular.module('ModelModule',['BaseServicesModule'])
    .service('BaseObject', [ function () {
        return function () {
          this.build = function (item) {
              angular.extend(this, item);
              this.save();
          };
          this.save = function () {

          };
        };
    }])
    .service('Streams', ['BaseObject','queryEngine', '$q', 'constants', 'storage',
        function (BaseObject, queryEngine, $q, constants, storage) {
            var module = {};
            var selectedStream = null;
            var streams = null;
            var Stream = function () {
                angular.extend(this, new BaseObject());
                this.isRated = false;
                this.getDate = function () {
                    return new Date(moment(this.created_at, ['YYYY-MM-DD HH:mm', 'YYYY-M-DD HH:mm'])); // FOR VALIDATE DATE WITH ONE DIGIT MONTH
                };
                this.getAuthor = function () {
                    return this.author;
                };
                this.getMessage = function () {
                    return this.message;
                };
                this.getRating = function () {
                    return this.rating;
                };
                this.incrementRating = function () {
                    this.rating++;
                    this.isRated = true;
                    this.save();
                };
                this.save = function () {
                    var key = constants.KEYS.STREAM + this.id;
                    storage.set(key, this);
                };
            };
            module.getAll = function () {
                var deferred = $q.defer();
                if(streams) {
                    deferred.resolve(streams);
                } else {
                    queryEngine.getStreams(
                        function (result) {
                            var data = result.data.data;
                            streams = [];
                            _.each(data, function (stream) {
                                var StreamObject = new Stream();
                                StreamObject.build(stream);
                                streams.push(StreamObject);
                            });
                            deferred.resolve(streams);
                        }, function (error) {
                            deferred.reject(error);
                        });
                }
                return deferred.promise;
            };
            module.push = function (stream) {
                var deferred = $q.defer();
                var StreamObject = new Stream();
                StreamObject.build(stream);
                streams.push(StreamObject);
                deferred.resolve(streams);
                return deferred.promise;
            };
            module.getSelected = function () {
                return selectedStream;
            };
            module.setSelected = function (stream) {
                selectedStream = stream;
            };
            module.resetSelected = function () {
                selectedStream = null;
            };
            return module;
        }]);
