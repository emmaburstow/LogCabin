angular.module('umbraco').controller('LogCabin.ErrorNotificationsController',
    ['$scope', '$controller', 'notificationsService', 'dialogService',
        function ($scope, $controller, notificationsService, dialogService) {

            console.log($scope.notification);
            
            notificationsService.add({
                headline: "logcabin headline",
                message: "logcabin message",
                type: "warning",
                //view: "/App_Plugins/LogCabin/views/LogCabin.html",
                sticky: true
            })

            $scope.addEntry = function () {

                dialogService.open({ template: '/App_Plugins/LogCabin/views/ErrorLogDialog.html', show: true, callback: done });
                function done(data){
                    //The dialog has been submitted 
                    //data contains whatever the dialog has selected / attached
                }     
            }

        }
]);