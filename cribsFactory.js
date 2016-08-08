angular
            .module('ngCribs')
            .controller('cribsFactory',function($http){
                      function getCribs(){
                        return $http.get('data.json') ;
                    }
                    return{
                        getCribs: getCribs;
                    }
            });