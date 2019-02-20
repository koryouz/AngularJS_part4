  var appVoiture = angular.module('appVoiture',[]);
  appVoiture.controller('voitureCtrl', function($scope, $http){
    $http.get('assets/js/voiture.json').then(function(res){
      $scope.scopeVoiture = res.data;
    });
  });
