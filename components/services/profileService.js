app.service('profileService', function(baseUrl, $http, $q) {

   this.getProfiles = function() {
       return new Firebase(baseUrl.url + '/profiles');
   };

   this.getProfile = function(id) {
       return new Firebase(baseUrl.url + '/profiles/' + id)
   };


    var leagueAPI = 'https://na.api.pvp.net/';

    this.fetchLoL = function(sumName) {
        return $http.get(leagueAPI + 'api/lol/na/v1.4/summoner/by-name/' + sumName + '?api_key=33d436c4-39f3-49be-b5c2-df9ebf90e630');
    };

    //this.fetchLoL = function(sumName) {
    //
    //    var dfd = $q.defer;
    //
    //    $http.get(leagueAPI + 'api/lol/na/v1.4/summoner/by-name/' + sumName + '?api_key=33d436c4-39f3-49be-b5c2-df9ebf90e630')
    //        .then(function(res) {
    //            var sumId = res.value.data[sumName].id;
    //            console.log(sumId);
    //        })
    //};
});