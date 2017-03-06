'use strict';

angular.module('userActivityList', []).component('userActivityList', {
  templateUrl: './app/user-activity-list/user-activity-list.template.html',
  controller: ['User', function UserActivityListController(user) {
    var self = this;
    self.getAllUserActivity = function () {
      user.getUserActivity().then(function (response) {
        self.userActivity = response.data;
        return self.userActivity
      });
    }
    self.getAllUserActivity();

    self.deleteAllUserActivity = function () {
      user.deleteUserActivity().success(function (data, status, headers) {
        self.ServerResponse = status;
        self.getAllUserActivity();
        console.log(self.ServerResponse);
      })
        .error(function (data, status, header, config) {
          self.ServerResponse = status;
          console.log(self.ServerResponse);
        });

    }

  }]
});
