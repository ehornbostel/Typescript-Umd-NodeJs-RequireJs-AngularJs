if(window.__karma__) {
    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function(path) {
        return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function(file) {
        if (TEST_REGEXP.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });
}

//noinspection JSUnusedAssignment
require.config({
    paths: {
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular.min',
        angularRoute: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular-route.min',
        'angular.resource': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular-resource.min',
        umdTest: 'javascripts/app',
        'services/UserRepository': 'javascripts/services/UserRepository'
    },
    shim:  {
        'angular' : {
            exports : 'angular'
        },
        'angularRoute': ['angular'],
        'angular.resource': ['angular']
    },
    priority: [
        "angular"
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : '',
});

//noinspection JSUnusedAssignment,JSUnusedLocalSymbols
require([
        'angular',
        'umdTest'
    ], function(angular, umdTest) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            //noinspection JSCheckFunctionSignatures
            angular.bootstrap(document, ['umdTest']);
        });
    }
);
