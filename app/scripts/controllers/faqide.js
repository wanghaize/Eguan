angular.module('cyzApp')
	.controller("faqide", ["$scope", "$http", "$state", "$timeout","$location", function($scope, $http, $state, $timeout,$location) {
		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("faqide")
		if($scope.uNum!=-1){
			$(".spCon li").eq(3).attr("class","rzActive").siblings().removeClass("rzActive")
		}
		
		$scope.dwsp = [];
		$scope.loading=true;
		var arr = $scope.dwsp
		function xx(){
			
		
		$http({
			url: "http://47.88.16.225:402/qingjia",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].faqiren == localStorage.uNnme) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/chuchai",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].faqiren == localStorage.uNnme) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/baoxiao",
			method: "get"
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].faqiren == localStorage.uNnme) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/lizhishenqing",
			method: "get"
		}).then(function(data) {
			$scope.loading=false;
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].faqiren == localStorage.uNnme) {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		}
		xx()
		var lx = "",
			aid=""
		$scope.del = function(id) {
			aid=id
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
			
		}
		$scope.queding=function(){
			$scope.dwsp=[]
			$http({
				url: 'http://47.88.16.225:402/'+lx+"/"+aid,
				method: "delete"
			}).then(function(data) {
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