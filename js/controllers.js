'use strict';

/* Controllers */
var searchApp = angular.module('searchApp', []);

searchApp.controller('searchCtrl', function ($scope, $http) {

  $http.get('databasecontent.json').then(function (res) {
    $scope.searchResults = res.data;
  });
  
  $scope.menuList = ["File", "Edit", "View", "Tools", "Window", "Community", "Help"];
  $scope.objectExplorerContents = ["Server", "Databases", "System Databases", "Adventureworks", "Development", "MigTeamDev", "MigTeamTest", "MigTeamStaging", "MigTeamProd"];
  $scope.ssmsTabs = [{
    "name": "SQLQuery1.sql",
    "class": "disabled"
  },{
    "name": "SQLQuery2.sql",
    "class": "disabled"
  },{
    "name": "SQL Source Control",
    "class": "active"
  }];

  $scope.socTabs = [{
    "name": "Commit changes",
    "class": "active"
  },{
    "name": "Get latest",
    "class": ""
  },{
    "name": "Migrations",
    "class": ""
  },{
    "name": "Object locking",
    "class": ""
  },{
    "name": "Setup",
    "class": ""
  }];

  $scope.commitGridContents = [{
    "changeType": "Drop",
    "name": "Foo",
    "objectType": "Table",
    "owner": "dbo"
  },{
    "changeType": "Edit",
    "name": "ProductDescription",
    "objectType": "Table",
    "owner": "Production"
  }];
  
  $scope.selectedRow = {};
  $scope.setRowSelection = function(result) {
    $scope.selectedRow = result;
  };
  
});
