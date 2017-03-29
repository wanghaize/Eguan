angular.module('cyzApp')
 	.controller("rizhinews",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$http({
			url:"http://47.88.16.225:402/rizhi",
			method:"get"
		}).then(function(data){
			$scope.rizhinews=data.data;
			console.log($scope.rizhinews[0].time)
			
		})
		
		$scope.riInfos=function($index){
			$scope.Message=$scope.rizhinews[$index];
			console.log($scope.Message.classify)
			if($scope.Message.classify=="0"){
				$scope.Message.leixing="日报";
				$scope.Message.wan="今日已完成";
				$scope.Message.weiwan="今日未完成";
			}else if($scope.Message.classify=="1"){
				$scope.Message.leixing="周报";
				$scope.Message.wan="本周完成工作";
				$scope.Message.weiwan="下周工作计划";
			}else if($scope.Message.classify=="2"){
				$scope.Message.leixing="月报";
				$scope.Message.wan="本月工作总结";
				$scope.Message.weiwan="下周工作计划";
				
			}
		}
		//按时间排序
		$scope.timeOrderUp=function(){
			$scope.time="time";
		}
		$scope.timeOrderDown=function(){
			$scope.time="-time";
		}
		//搜索
		$scope.searchXX=function(){
			$scope.searchNews=$scope.searchNewsXX
		}
		//删除 陈颖志修改
		var id_index = ""
		$scope.riInfoDel=function($index){
			id_index = $index
		}
		$scope.dell = function(){
			$http({
				url:"http://47.88.16.225:402/rizhi/"+$scope.rizhinews[id_index].id,
				method:"delete"
			}).then(function(data){
				$http({
					url:"http://47.88.16.225:402/rizhi",
					method:"get"
				}).then(function(data){
					$scope.rizhinews=data.data;
					console.log($scope.rizhinews)
				})
			})
		}
		
 	}])
