angular.module('umbraco').controller('Skrift.ContentEditController',
    ['$scope', '$controller',
    function ($scope, $controller) {
        // inherit core content edit controller
        angular.extend(this, $controller('Umbraco.Editors.Content.EditController', { $scope: $scope }));

        $scope.rotate = function() {
            var $body = document.querySelector('body');

            if($body.classList.contains('rotate')) {
                $body.classList.remove('rotate');
            }
            else {
                $body.classList.add('rotate');
            }


        };
    }]);