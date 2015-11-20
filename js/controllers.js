'use strict';

/* Controllers */
var searchApp = angular.module('searchApp', []);

searchApp.controller('searchCtrl', function ($scope, $http) {

  $http.get('databasecontent.json').then(function (res) {
    $scope.searchResults = res.data;
  });
  
  $scope.menuList = ["File", "Edit", "View", "Tools", "Window", "Community", "Help"];

  
  $scope.selectedRow = {};
  $scope.setRowSelection = function(result) {
    $scope.selectedRow = result;
  };
  
});
