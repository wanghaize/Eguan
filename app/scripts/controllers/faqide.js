angular.module('cyzApp')
	.controller("faqide", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		$scope.dwsp = []
		var arr = $scope.dwsp
		function xx(){
			
		
		$http({
			url: "http://47.88.16.225:402/qingjia",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].uid == localStorage.uid) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/chuchai",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].uid == localStorage.uid) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/baoxiao",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].uid == localStorage.uid) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/lizhishenqing",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].uid == localStorage.uid) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		}
		xx()
		$scope.del = function(id) {
			$scope.dwsp=[]
			var lx = ""
			for(var i = 0; i < arr.length; i++) {
				if(arr[i].id == id) {
					console.log(arr[i])
					if(arr[i].zleixing == "请假") {
						lx = "qingjia"
					} else if(arr[i].zleixing == "出差") {
						lx = "chuchai"
					} else if(arr[i].zleixing == "报销") {
						lx = "baoxiao"
					} else if(arr[i].zleixing == "离职") {
						lx = "lizhishenqing"
					} else {
						alert("失败")
					}
				}
			}
			$http({
				url: 'http://47.88.16.225:402/'+lx+"/"+id,
				method: "delete"
			}).then(function(data) {
				alert("删除成功")
				xx()
			})
		}
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