angular.module('umbraco.services').config([
   '$httpProvider',
   function ($httpProvider) {

       $httpProvider.interceptors.push(['$q','$injector', 'notificationsService', function ($q,$injector, notificationsService) {
           return {
               'request': function (request) {

                  // Redirect any requests to built in content edit to our custom view
                   if (request.url.indexOf("views/content/edit.html") === 0) {
                       request.url = '/App_Plugins/Skrift/edit-view.html';
                   }

                   return request || $q.when(request);
               }
           };
       }]);

   }]);