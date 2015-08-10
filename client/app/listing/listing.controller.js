'use strict';

angular.module('pplGureWrApp')
  .controller('ListingCtrl', function ($scope, $http, socket) {
    $scope.listing = { link: '/1', title: '51. WM_バッグ'};

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      // socket.syncUpdates('thing', $scope.awesomeThings);
    });
  });
