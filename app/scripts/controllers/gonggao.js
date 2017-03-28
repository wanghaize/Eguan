angular.module('cyzApp')
 	.controller("gonggao",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
	
 		
 function CX(){
			$http({
				url:"http://47.88.16.225:402/xiaoxi",
				method:"get"	
			}).then(function(data){
				 $scope.Data=data.data			
			})

 }
 
 CX() 

$scope.filterXX=function(){
	$scope.FilterXX=$scope.Filter
}

$scope.ID =function(id){
	
					$http({
						url:"http://47.88.16.225:402/xiaoxi",
						method:"get"	
					}).then(function(data){							
						for(var i=0;i<data.data.length;i++){
							if(id==data.data[i].id){								
								$scope.NR   = data.data[i].neirong						
								$scope.BT	= data.data[i].biaoti						
								$scope.FBSJ	= data.data[i].fabushijian						
								$scope.FBR	= data.data[i].faburen
							}													
						}						
					})	
}

//删除
$scope.rem =function(id){
		$http({
			url:"http://47.88.16.225:402/xiaoxi/"+id,
			method:"delete"		
		}).then(function(data){	
			 CX()					
		})
	}


}])


.filter('cut', function () {
  return function (value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        value = value.substr(0, lastspace);
      }
    }

    return value + (tail || ' …');
  };
});
