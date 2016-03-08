app.controller('browseCtrl', function($scope, $firebaseArray, $firebaseObject, profilesRef) {

    $scope.profiles = $firebaseArray(profilesRef);


});