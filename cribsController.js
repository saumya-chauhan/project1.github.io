angular
      .module('ngCribs')
      .controller('cribsController',function($scope){

                  $scope.cribs=[
                        {
                                 "id": '1',
                                "type": "condo",
                                "price": 100000,
                                "address": "h-11",
                                "description": "wonderful",
                                "details":{
                                    "bedrooms": "3",
                                    "bathrooms":1.5,
                                    "area": 921
                                },
                                "image": "1"

                        },
                        {
                                 "id": '2',
                                "type": "condo2",
                                "price": 200000,
                                "address": "h-1123",
                                "description": "wonderful pleezz come",
                                "details":{
                                    "bedrooms": "3",
                                    "bathrooms":1.5,
                                    "area": 921
                                },
                                "image": "1"

                        },
                        {
                                 "id": '3',
                                "type": "condo3",
                                "price": 300000,
                                "address": "h-113",
                                "description": "wonderful",
                                "details":{
                                    "bedrooms": "3",
                                    "bathrooms":1.5,
                                    "area": 921
                                },
                                "image": "1"

                        }
                        ];
            /*cribsFactory.getCribs().success(function(data){
                $scope.cribs=data;
            }).error(function(error){
                alert(error);
            });*/
          /* $scope.priceInfo={
                      min=0,
                      max=10000000
                  };*/
      });