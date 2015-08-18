angular.module('services')
.service('locationService',['$http','$q',function($http,$q){
    function getPos(){
        var deferred = $q.defer();
        function success(position){//获取地理位置成功函数
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
           deferred.resolve({
                longitude:coords.longitude,
                latitude:coords.latitude
           });
        }
        function error(error){//获取地理位置失败函数
            deferred.reject(error.message);
        }
        var opt={//获取地理位置选项
            enableHighAccuracy:true,
            // timeout:0,
            // maximumAge:0
        }
        try{
            navigator.geolocation.getCurrentPosition(success,error,opt);
        }catch(e){
            deferred.reject(e);   
        }
        return deferred.promise;
    }
    var geoc = new BMap.Geocoder();    
    function getCNpos(){
        var deferred = $q.defer();
        getPos().then(function(loc){
            var pt=new BMap.Point(loc.longitude,loc.latitude);
            try{
                geoc.getLocation(pt, function(rs){
                    deferred.resolve(rs);
                });        
            }catch(e){
                deferred.reject(e);
            }
        })
        return deferred.promise;
    }
    return {
        getPos:getPos,
        getCNpos:getCNpos
    }
}]);