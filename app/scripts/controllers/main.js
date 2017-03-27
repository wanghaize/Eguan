angular.module('cyzApp')
 	.controller("main",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){

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
	   				method:"post",
	   				data:{
	   					password:$scope.x_password
	   				}
				}).then(function(data){
					console.log(data)
					$scope.mm_tsk = true
					$timeout(function(){
						$scope.mm_tsk = false
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
 	}])