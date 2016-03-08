app.controller('signUpCtrl', function($scope, $firebaseArray, $firebaseObject, profilesRef, baseUrl, $rootScope, $location) {

    $scope.profiles = $firebaseArray(profilesRef);


    $scope.$on('$stateChangeSuccess', function() {
        var ref = new Firebase(baseUrl.url);
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                var userInfo = authData;
                $scope.facebookShit = authData;
            }

            var relocate = userInfo.facebook.cachedUserProfile.first_name;

            var user = $firebaseObject(profilesRef);
            console.log(user);

            //for (var key in user) {
            //    console.log(key);
            //    if (key.firstName === relocate) {
            //        $location.path('/profile/' + key);
            //    }
            //}

        });
    });


    $scope.createProfile = function(userInfo) {

        //ref.resetPassword({
        //    email : userInfo.facebook.email
        //}, function(error) {
        //    if (error === null) {
        //        console.log("Password reset email sent successfully");
        //    } else {
        //        console.log("Error sending password reset email:", error);
        //    }
        //});

        $scope.profiles.$add({
            firstName: userInfo.facebook.cachedUserProfile.first_name,
            lastName: userInfo.facebook.cachedUserProfile.last_name,
            email: userInfo.facebook.email,
            profile_img: userInfo.facebook.profileImageURL

        })


    };

    $scope.createFBProf = function(password) {
        var ref = new Firebase(baseUrl.url);
        ref.createUser({
            email    : $scope.facebookShit.facebook.email,
            password : password
        });

        ref.authWithPassword({
            email    : $scope.facebookShit.facebook.email,
            password : password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });

        ref.onAuth(alert('Congratulations, you are logged in!'));
    }



});