app.controller('homeCtrl', function($scope, $firebaseArray, $firebaseObject, baseUrl, profilesRef, $location) {

    $scope.logIn = function($location) {
        var ref = new Firebase(baseUrl.url);
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                var userInfo = authData;
            }

            ref.onAuth(alert('You logged in!'));

            var relocate = userInfo.facebook.cachedUserProfile.first_name;

            var user = $firebaseObject(profilesRef);
            console.log(user);

            for (var key in user) {
                console.log(key);
                if (key.firstName === relocate) {
                    $location.path('/profile/' + key);
                }
            }
        }, {
            scope: 'email'
        });
    }



});