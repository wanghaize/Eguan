angular.module('cyzApp')
	.controller("worizhi", ["$scope", "$http", "$state", "$timeout","$location", function($scope, $http, $state, $timeout,$location) {
//		未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
		
		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("worizhi")
		if($scope.uNum!=-1){
			$(".rz_Wrapp li").eq(2).attr("class","rzActive").siblings().removeClass("rzActive")
		}
		
		$scope.postInfos = [];
		$scope.classifys = [];
		$scope.Infosa = [];
		$scope.Infosb = [];
		$scope.Infosc = [];
		$scope.loading = true;
		$scope.Infobbb = false
		$http({
				url: "http://47.88.16.225:402/rizhi",
				method: "get"
		}).then(function(data) {
//			$scope.Infobbb = true
				$scope.loading = false;
				for(var k = 0; k < data.data.length; k++) {
					if(data.data[k].uid == localStorage.uid) {
						$scope.postInfos.push(data.data[k])
					}else{
						$scope.Infobbb = false
					}
				}
				
				if($scope.postInfos.length==0){
					$scope.Infobbb = true
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
		$scope.timeOrderUp = function() {
			$scope.time = "time";
		}
		$scope.timeOrderDown = function() {
			$scope.time = "-time";
		}

	}])