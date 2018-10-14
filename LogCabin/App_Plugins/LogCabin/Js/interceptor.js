angular.module('umbraco.services').config([
    '$httpProvider',
    function ($httpProvider) {

        $httpProvider.interceptors.push(function ($q) {
            return {
                'request': function (request) {

                    // Redirect any requests for the listview to our custom list view UI
                    if (request.url.indexOf("notifications") > -1 ){
                        console.log(request.url);
                        console.log("Ouch");
                        request.url = '/App_Plugins/LogCabin/views/LogCabin.html';
                    }

                    return request || $q.when(request);
                }
            };
        });

    }]);