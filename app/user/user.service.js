'use strict';

angular.module('userServise', [])
  .service('User', ['$http', function ($http) {
    var self = this;

    self.getUserActivity = function () {
      return $http.get('https://userbackend.herokuapp.com/')
    }

    self.deleteUserActivity = function () {
      return $http.delete('https://userbackend.herokuapp.com/delete')
    }

  }]);
