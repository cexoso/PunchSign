angular.module('controller').
controller('fpController',['$scope','locationService','$interval','data',function(s,l,$interval,data){
   console.log(data)
   s.data=data;
   s.systime=new Date();
   s.curPos;
   s.tips="刷新";
   s.freshPos=(function(){
        var refreshing=false;//防止暴力请求
        return function(){
            // if(refreshing){
            //     return;
            // }
            s.tips="正在刷新";
            refreshing=true;
            l.getCNpos().then(function(e){
                s.curPos=e.addressComponents;
                s.tips="刷新";
                refreshing=false;
                Countdown();
            },function(e){
                console.log(e)
                s.tips="刷新失败";
                refreshing=false;
            });
        }
   })();
   var sec=80;
   function Countdown(){
        s.sec=sec;
        $interval(function(){
            s.sec--;
            if(s.sec==0){
                s.freshPos();
            }
        },1000,s.sec,true);
   }
   s.freshPos();
}]);