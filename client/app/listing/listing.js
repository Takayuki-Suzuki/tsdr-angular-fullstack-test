'use strict';

angular.module('pplGureWrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('listing', {
        url: '/listing/:id',
        templateUrl: 'app/listing/listing.html',
        controller: 'ListingCtrl',
        authenticate: true
      });
  });