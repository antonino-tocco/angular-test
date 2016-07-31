angular.module('UserModule', ['BaseServicesModule'])
    .service('User', ['queryEngine', '$q', function (queryEngine, $q) {
        return {
            profile: null,
            isLogged: false,
            login: function () {
                //SIMULATE LOGIN
                var deferred = $q.defer();
                var self = this;
                queryEngine.getProfile(function (result) {
                    var data = result.data.data;
                    self.profile = data;
                    self.isLogged = true;
                    deferred.resolve(true);
                });
                return deferred.promise;
            },
            logout: function () {
                //SIMULATE LOGOUT
                this.profile = null;
                this.isLogged = false;
            },
            getUsername: function () {
                return this.profile.username;
            },
            getProfile: function () {
                return this.profile;
            }
        }
    }]);
