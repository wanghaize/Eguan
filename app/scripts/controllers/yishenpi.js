angular.module('cyzApp')
	.controller("yishenpi", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		$scope.dwsp = []
		var arr = $scope.dwsp
		$http({
			url: "http://47.88.16.225:402/qingjia",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "2" || data.data[i].zhuangtai == "3") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/chuchai",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "2" || data.data[i].zhuangtai == "3") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/baoxiao",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "2" || data.data[i].zhuangtai == "3") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/lizhishenqing",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "2" || data.data[i].zhuangtai == "3") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		
	}])
	.filter("resetCategory", function() {
		return function(input) {
			if(input == "1") {
				return input = "未审批";
			}
			if(input == 2) {
				return input = "已同意";
			}
			if(input == 3) {
				return input = "已拒绝";
			}

		}
		return input;
	})