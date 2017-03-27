angular.module('cyzApp')
 	.controller("main",["$scope","$http","$state","$timeout","$filter",function($scope,$http,$state,$timeout,$filter){
 		//陈颖志
 				//退出登录

		$scope.logint = function(){

			$('#myModalTwo').modal('hide')
			$timeout(function(){
				$state.go("login")
			},200)
		
		}
		
		//修改昵称
		$scope.xg_nc = false
		$scope.nc_title = "修改成功"
		$scope.nc_tj = function(){
			if($scope.xg_micheng!=undefined){
				var hanziYZ=/^[\u4e00-\u9fa5]{1,10}$/
				if(hanziYZ.test($scope.xg_micheng)){
					$http({
						url:"http://47.88.16.225:402/users/"+localStorage.uid,
		   				method:"put",
		   				data:{
		   					nicheng:$scope.xg_micheng
		   				}
					}).then(function(data){
							$scope.xg_nc = true
							$timeout(function(){
								$scope.xg_nc = false
								$('#myModal').modal('hide')
							},500)
					},function(){
						
					})
				}else{
					$scope.nc_title = "昵称不能为数字或字母"
					$scope.xg_nc = true
					$timeout(function(){
						$scope.xg_nc = false
					},600)
				}
			}else{
				$scope.nc_title = "昵称不能为空"
				$scope.xg_nc = true
				$timeout(function(){
					$scope.xg_nc = false
				},600)
			}
		}

		//修改密码
		$scope.xg_t = false
		$scope.xg_title = "密码格式错误"
		$scope.xg_ts = false
		$scope.xg_titles = "两次密码不一致"
		$scope.mm_tsk = false
		$scope.m_xg = function(){
			if($scope.x_password!=undefined){
				var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
				var m_mi = $scope.x_password;
				if(psd.test(m_mi)){
					$scope.xg_t = false
				}else{
					$scope.xg_t = true
				}
			}
			
		}
		$scope.m_xgs = function(){
			if($scope.x_password!=undefined){
			var pp = $scope.x_password;
			if($scope.xg_password.indexOf(pp)!=-1){
				$scope.xg_ts = false
			}else{
				$scope.xg_ts = true
			}
		}
		}
		$scope.xg_sub = function(){
			if($scope.x_password!=undefined&&$scope.x_password!=undefined &&$scope.xg_password.indexOf($scope.x_password)!=-1){
				console.log(123)
				$http({
					url:"http://47.88.16.225:402/users/"+localStorage.uid,
	   				method:"put",
	   				data:{
	   					password:$scope.x_password
	   				}
				}).then(function(data){
					console.log(data)
					$scope.mm_tsk = true
					$timeout(function(){
						$scope.mm_tsk = false
						$('#myModalOne').modal('hide')
					},500)
					$scope.x_password =""
					$scope.xg_password =""
				},function(){
					console.log("shibai")
				})
			}else{
				$scope.xg_ts = true
			}
		}
 
 		//杜冰冰
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