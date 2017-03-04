'use strict';

angular.module('userActivityList', []).component('userActivityList', {
  templateUrl: './app/user-activity-list/user-activity-list.template.html',
  controller: ['User', function UserActivityListController(user) {
    var self = this;
    user.getUserActivity().then(function (response) {
      self.userActivity = response.data;
    });

  }]
});
