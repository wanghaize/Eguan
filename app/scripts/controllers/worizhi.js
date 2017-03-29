angular.module('cyzApp')
	.controller("worizhi", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		$scope.postInfos = [];
		$scope.classifys = [];
		$scope.Infosa = [];
		$scope.Infosb = [];
		$scope.Infosc = [];
		$scope.loading=true;
		$http({
				url: "http://47.88.16.225:402/rizhi",
				method: "get"
			}).then(function(data) {
				$scope.loading=false;
				for(var k = 0; k < data.data.length; k++) {
					if(data.data[k].uid == localStorage.uid) {
						$scope.postInfos.push(data.data[k])
					}
				}
				for(var i = 0; i < $scope.postInfos.length; i++) {
					if($scope.postInfos[i].classify == 0) {
						$scope.classifys.unshift("日报");
						$scope.Infosa.unshift("今日完成工作");
						$scope.Infosb.unshift("未完成工作");
						$scope.Infosc.unshift("备注");
					} else if($scope.postInfos[i].classify == 1) {
						$scope.classifys.unshift("周报");
						$scope.Infosa.unshift("本周完成工作");
						$scope.Infosb.unshift("本周工作总结");
						$scope.Infosc.unshift("备注");
					} else if($scope.postInfos[i].classify == 2) {
						$scope.classifys.unshift("月报");
						$scope.Infosa.unshift("本月工作计划");
						$scope.Infosb.unshift("本月工作总结");
						$scope.Infosc.unshift("备注");
					}
				}
			})
		//按时间排序
		$scope.timeOrderUp=function(){
			$scope.time="time";
		}
		$scope.timeOrderDown=function(){
			$scope.time="-time";
		}

	}])