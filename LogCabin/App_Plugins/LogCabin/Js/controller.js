angular.module('umbraco').controller('LogCabin.ErrorNotificationsController',
    ['$scope', '$controller', 'notificationsService',
        function ($scope, $controller, notificationsService) {

            console.log("im being hit");

            // now apply our LogCabin functionality
            notificationsService.success("LogCabin", "We have hit our LogCabin custom success!");

            notificationsService.warning("LogCabin", "We have hit our LogCabin custom warning!");

            notificationsService.error("LogCabin", "We have hit our LogCabin custom error!");

        }
]);