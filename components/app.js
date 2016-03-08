var app = angular.module('gamerLifeApp', ['ui.router', 'firebase']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/components/templates/home.html',
            controller: 'homeCtrl',
            resolve: {
                profilesRef: function(profileService) {
                    return profileService.getProfiles();
                }
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '/components/templates/signup.html',
            controller: 'signUpCtrl',
            resolve: {
                profilesRef: function(profileService) {
                    return profileService.getProfiles();
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: '/components/templates/login.html'
        })
        .state('profile', {
            url: '/profile/:profileId',
            templateUrl: '/components/templates/profile.html',
            controller: 'profileCtrl',
            resolve: {
                profileRef: function(profileService, $stateParams) {
                    return profileService.getProfile($stateParams.profileId);
                },
                leagueRef: function(profileService) {
                    return profileService.fetchLoL();
                }
            }
        })
        .state('profileBrowse', {
            url: '/browse',
            templateUrl: '/components/templates/browse.html',
            controller: 'browseCtrl',
            resolve: {
                profilesRef: function(profileService) {
                    return profileService.getProfiles();
                }
            }
        })
        .state('changePW', {
            url: '/password',
            templateUrl: '/components/templates/changePW.html',
            controller: 'signUpCtrl',
            resolve: {
                profilesRef: function (profileService) {
                    return profileService.getProfiles();
                }
            }
        })

})
.constant('baseUrl', {
    url: 'https://gamerlife.firebaseio.com'
});