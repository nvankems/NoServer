app.controller('profileCtrl', function($scope, $http, $firebaseArray, $firebaseObject, profileRef, $rootScope, leagueRef, profileService) {

    $scope.profile = $firebaseObject(profileRef);

    $scope.leagueProfile = {};

    $scope.fetchLoL = function() {
        $scope.leagueProfile = profileService.fetchLoL($scope.sumName);
        console.log(profileService.fetchLoL($scope.sumName));
    }



});