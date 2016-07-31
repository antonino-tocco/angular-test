/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('TestModule', ['MainServicesModule'])
    .run(function (Streams) {
       QUnit.test('Get all streams', function (assert) {
            var done = assert.async();
            Streams.getAll()
                .then(function (results) {
                    console.log(results);
                    assert.ok(_.isArray(results), true);
                    done();
                }, function (reason) {
                    console.log(reason);
                    done();
                });
       });
    });
angular.bootstrap(document, ['TestModule']);