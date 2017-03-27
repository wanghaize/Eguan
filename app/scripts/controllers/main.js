angular.module('cyzApp')
 	.controller("main",["$scope","$http","$state","$timeout","$filter",function($scope,$http,$state,$timeout,$filter){
 		
 
 		
			$scope.dt1 = new Date();
		    $scope.dt2 = $filter("date")($scope.dt1, "yyyy-MM-dd HH:mm:ss");
		   
		    
		    
		    $http({
				url:"http://47.88.16.225:402/users",
				method:"get"	
			}).then(function(data){
				for (var i=0;i<data.data.length;i++) {
										
					if(data.data[i].id==localStorage.uid){						
							localStorage.Name = data.data[i].nicheng							
						}								
					}									
				})
	
				
$scope.Biaoti=function(){		    	
		   if($scope.biaoti==undefined){
			   $scope.uBiaoti = true		   
		   }
		   else if($scope.biaoti==""){
			   $scope.uBiaoti = true	
		   }else{
			   $scope.uBiaoti = false	
		   }		    	
	}	


		    
  $scope.Neirong=function(){		    	
				   if($scope.neirong==undefined){
					   $scope.uNeirong = true		   
				   }
				   else if($scope.neirong==""){
					   $scope.uNeirong = true	
				   }else{
					   $scope.uNeirong = false	
				   }		    	
			}
	
  
$scope.confirm=function(){	


	if($scope.uNeirong == false	&&  $scope.uBiaoti == false	){
				$http({
					url:"http://47.88.16.225:402/xiaoxi",
					method:"post",
					data:{
						biaoti:$scope.biaoti,
						neirong:$scope.neirong,
						faburen:localStorage.Name,
						fabushijian:$scope.dt2
					}
				}).then(function(da){
					$("#myModalThree").modal("hide")				
				})		
}	
	 else{
		 //	$(".btn-primary").css()
				 if($scope.neirong==undefined){
					   $scope.uNeirong = true		   
				   }
				   else if($scope.neirong==""){
					   $scope.uNeirong = true	
				   }else{
					   $scope.uNeirong = false	}
				 
				 
				 if($scope.biaoti==undefined){
					   $scope.uBiaoti = true		   
				   }
				   else if($scope.biaoti==""){
					   $scope.uBiaoti = true	
				   }else{
					   $scope.uBiaoti = false	
				   }
		   
	}
	
 			
}
 		
 		
 		
		    
		    
		    
 	}])