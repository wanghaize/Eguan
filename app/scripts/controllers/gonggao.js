angular.module('cyzApp')
 	.controller("gonggao",["$scope","$http","$state","$timeout","$location",function($scope,$http,$state,$timeout,$location){
 		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("daishenpi")
		if($scope.uNum!=-1){
			$(".newsConNav p").eq(0).attr("class","n_active").siblings().removeClass("n_active")
		}
 		
 		
	$scope.loading=true;
 		
 function CX(){
 	if(localStorage.uid!=undefined){
 		$http({
				url:"http://47.88.16.225:402/xiaoxi",
				method:"get"	
			}).then(function(data){
				$scope.loading=false;
				$scope.Data=data.data
				
				console.log(data.data)
				
				if(data.data.length==undefined || data.data.length==0){
					$scope.HIDE=true
				}
				
				
				$scope.a = $scope.Data;								
				$scope.num = 0;				
				$scope.SY = 1;				
				$scope.num = Math.ceil(data.data.length / 10)
				$scope.currentpage = 0;
				$scope.listpage = 10;
				$scope.page = 1;
				
				if($scope.SY=="1"){
					$("#prevpage").attr("disabled","disabled")		
				}
				
				
				if($scope.num=="1"){
					$("#prevpage").attr("disabled","disabled")
					$("#nextpage").attr("disabled","disabled")	
				}
				
				
				$scope.next = function() {
					if($scope.currentpage < $scope.num - 1) {
						$scope.currentpage++;
						$scope.page += 1;
						$scope.SY++
					}
					
					if($scope.num==$scope.SY){
						$("#nextpage").attr("disabled","disabled")	
						$("#prevpage").attr("disabled",false)	
					}					
				}
				
				$scope.prev = function() {
					if($scope.currentpage > 0) {
						$scope.currentpage--;
						$scope.page -= 1;
						$scope.SY--
					}
					
					if($scope.num!==$scope.SY){
						$("#nextpage").attr("disabled",false)		
					}
					
					if($scope.SY=="1"){
						$("#prevpage").attr("disabled","disabled")		
					}
					
				}
 
			})
 	}
			
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

//删除 陈颖志修改
var ids = ""
$scope.rem =function(id){
	ids = id
		
	}

$scope.dell = function(){
	$http({
			url:"http://47.88.16.225:402/xiaoxi/"+ids,
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
})
.filter("myfilter", function() {
		return function(list, start) {
			if(list==undefined){
				
			}else{
				return list.slice(start)
			}
			
		}
	})
