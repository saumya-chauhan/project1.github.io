angular
      .module('ngCribs')
      .filter('cribsFilter',function(){
          return function(listings,priceInfo){
              var filtered=[];
              var min = priceInfo.min;
              var max = priceInfo.max;
              angular.foreach(listings,function(listing){
                  if(listing.price>= min && listing.price <= max){
                      filtered.push(listing);
                  }
              });
              return filtered;
          }
      });