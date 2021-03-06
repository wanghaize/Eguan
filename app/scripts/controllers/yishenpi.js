angular.module('cyzApp')
	.controller("yishenpi", ["$scope", "$http", "$state", "$timeout", "$location", function($scope, $http, $state, $timeout, $location) {
		//		未登录禁止进去此页面
		if(localStorage.getItem("uid") == "" || localStorage.getItem("uid") == undefined) {
			$state.go("login")
		}

		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("yishenpi")
		if($scope.uNum != -1) {
			$(".spCon li").eq(2).attr("class", "rzActive").siblings().removeClass("rzActive")
		}
		$scope.dwsp = [];
		$scope.loading = true;
		var arr = $scope.dwsp
		$http({
			url: "http://47.88.16.225:402/qingjia",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "2" && data.data[i].faqiren == localStorage.uNnme) {
					$scope.dwsp.push(data.data[i])
				} else if(data.data[i].zhuangtai == "3" && data.data[i].faqiren == localStorage.uNnme) {
					$scope.dwsp.push(data.data[i])
				}
			}
			$http({
				url: "http://47.88.16.225:402/chuchai",
				method: "get",
			}).then(function(data) {
				for(var i = 0; i < data.data.length; i++) {
					if(data.data[i].zhuangtai == "2" && data.data[i].faqiren == localStorage.uNnme) {
						$scope.dwsp.push(data.data[i])
					} else if(data.data[i].zhuangtai == "3" && data.data[i].faqiren == localStorage.uNnme) {
						$scope.dwsp.push(data.data[i])
					}
				}
				$http({
					url: "http://47.88.16.225:402/baoxiao",
					method: "get",
				}).then(function(data) {
					for(var i = 0; i < data.data.length; i++) {
						if(data.data[i].zhuangtai == "2" && data.data[i].faqiren == localStorage.uNnme) {
							$scope.dwsp.push(data.data[i])
						} else if(data.data[i].zhuangtai == "3" && data.data[i].faqiren == localStorage.uNnme) {
							$scope.dwsp.push(data.data[i])
						}
					}
					$http({
						url: "http://47.88.16.225:402/lizhishenqing",
						method: "get",
					}).then(function(data) {
						$scope.loading = false;
						
						for(var i = 0; i < data.data.length; i++) {
							if(data.data[i].zhuangtai == "2" && data.data[i].faqiren == localStorage.uNnme) {
								$scope.dwsp.push(data.data[i])
							} else if(data.data[i].zhuangtai == "3" && data.data[i].faqiren == localStorage.uNnme) {
								$scope.dwsp.push(data.data[i])
							}
						}
						if($scope.dwsp.length == 0) {
								$scope.HIDE = true
							
							} else {
								$scope.HIDE = false
							
							}
					})
				})
			})

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