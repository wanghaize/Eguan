angular.module('cyzApp')
 	.controller("shourizhi",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
			$scope.classifys=[];
			$scope.Infosa=[];
			$scope.Infosb=[];
			$scope.Infosc=[];
			$scope.loading=true;
			//按时间排序
		$scope.timeOrderUp=function(){
			$scope.time="time";
		}
		$scope.timeOrderDown=function(){
			$scope.time="-time";
		}
			
			
			//获取登录者昵称
				$http({
					url:"http://47.88.16.225:402/users",
					method:"get"
				}).then(function(data){
					for (var i=0;i<data.data.length;i++) {
						if(data.data[i].id==localStorage.uid){
							localStorage.unicheng=data.data[i].nicheng;
						}
					}
					
				})
				console.log(localStorage.unicheng)
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"get"
			}).then(function(data){
				$scope.Getss=[];
				$scope.loading=false;
				for (var k=0;k<data.data.length;k++) {
					if(data.data[k].fageishui==localStorage.unicheng){
						
						$scope.Gets=data.data[k]
					$scope.Getss.push($scope.Gets)
						
					}
					
//					else{
////						alert("kong")
////						数据为空的时候效果/
//					}
				}
				for (var i=0;i<$scope.Getss.length;i++) {
					if($scope.Getss[i].classify==0){
						$scope.classifys.unshift("日报");
						$scope.Infosa.unshift("今日完成工作");
						$scope.Infosb.unshift("未完成工作");
						$scope.Infosc.unshift("备注");
					}else if($scope.Getss[i].classify==1){
						$scope.classifys.unshift("周报");
						$scope.Infosa.unshift("本周完成工作");
						$scope.Infosb.unshift("本周工作总结");
						$scope.Infosc.unshift("备注");
					}else{
						$scope.classifys.unshift("月报");
						$scope.Infosa.unshift("本月工作计划");
						$scope.Infosb.unshift("本月工作总结");
						$scope.Infosc.unshift("备注");
					}
				}
			})
		
 	}])