angular.module('nowApp', ['ngRoute', 'angularNotify', 'oitozero.ngSweetAlert', '19degrees.ngSweetAlert2', 'nowCtrls']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller: 'NowCtrl'
    }).when('/pieszo', {
        templateUrl: 'partials/byfoot/profiles_byfoot.html',
        controller: 'ByFootCtrl'
    }).when('/buy', {
        templateUrl: 'partials/byfoot/buy.html',
        controller: 'BuyCtrl'
    }).when('/taxi', {
        templateUrl: 'partials/byfoot/taxi.html',
        controller: 'TaxiCtrl'
    }).when('/eat', {
        templateUrl: 'partials/byfoot/eat.html',
        controller: 'EatCtrl'

    }).when('/drive', {
        templateUrl: 'partials/drive/driver.html',
        controller: 'DriveCtrl'

    }).otherwise({ redirectTo: '/' });
}]);
