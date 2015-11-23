'use strict';

/* Controllers */
var searchApp = angular.module('searchApp', []);

searchApp.controller('searchCtrl', function ($scope) {

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
    "id": 0,
    "changeType": "Drop",
    "name": "Foo",
    "objectType": "Table",
    "owner": "dbo",
    "diffPaneInfoLeft": "Insert diff here",
    "diffPaneInfoRight": "Insert diff here",
    "selected": "false"
  },{
    "id": 1,
    "changeType": "Edit",
    "name": "ProductDescription",
    "objectType": "Table",
    "owner": "Production",
    "diffPaneInfoLeft": "This is a piece of code to show in the diff pane",
    "diffPaneInfoRight": "More diff here",
    "selected": "false"
  }];
  
  $scope.selectedRow = {};
  $scope.setRowSelection = function(item) {
    $scope.selectedRow = item;
  };
  
});
