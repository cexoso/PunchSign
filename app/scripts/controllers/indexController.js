angular.module('controller').
controller('indexController',['$scope',function(s){
    function success(position){
        var coords=position.coords;
        /*
        coords.latitude//估计纬度
        coords.longitude//估计经度
        coords.altitude//估计高度
        coords.accuracy//所提供的以米为单位的经度和纬度估计的精确度
        coords.altitudeAccuracy//所提供的以米为单位的高度估计的精确度
        coords.heading// 宿主设备当前移动的角度方向，相对于正北方向顺时针计算
        coords.speed//以米每秒为单位的设备的当前对地速度
        */
    }
    function error(error){
        alert(error.message)
    }
    var opt={
        enableHighAccuracy:true,
        // timeout:0,
        // maximumAge:0
    }
    navigator.geolocation.getCurrentPosition(success,error,opt);

}]);