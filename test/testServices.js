/**
 * Created by antoninotocco on 30/07/16.
 */
angular.module('TestModule', ['ModelModule', 'UserModule'])
    .run(function (User, Streams) {
        QUnit.test('Login', function (assert) {
            var done = assert.async();
            User.login()
                .then(function () {
                    assert.ok(User.getUsername() === 'Mario Rossi', User.getUsername());
                    QUnit.test('Logout', function (assert) {
                        User.logout();
                        assert.ok(User.getProfile()  === null,'User profile is null');
                        QUnit.test('Get all streams', function (assert) {
                            var done = assert.async();
                            Streams.getAll()
                                .then(function (results) {
                                    assert.ok(_.isArray(results), results);
                                    QUnit.test('Get selected stream', function (assert) {
                                        var selected = Streams.getSelected();
                                        assert.ok(selected === null, 'Selected stream is null');
                                        QUnit.test('Set selected stream', function (assert) {
                                            Streams.setSelected(results[0]);
                                            var selected = Streams.getSelected();
                                            assert.ok(selected === results[0], selected);
                                            QUnit.test('Reset selected stream', function (assert) {
                                                Streams.resetSelected();
                                                var selected = Streams.getSelected();
                                                assert.ok(selected === null, 'Selected stream is null');
                                            });
                                        });
                                    });
                                    done();
                                }, function (reason) {
                                    console.log(reason);
                                    done();
                                });
                        });
                    });
                    done();
                });
        });
    });
angular.bootstrap(document, ['TestModule']);