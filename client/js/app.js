(function () {
    'use strict';
    var baseUrl = 'client/views/partials/';

    angular.module('main', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider

            .state('home', {
                url: "/home",
                templateUrl: baseUrl+ "home.html",
                controller: "homeController",
                controllerAs: "vm"
            });
    });

})();
