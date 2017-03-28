angular.module('cyzApp')
	.controller("shenpinews", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		$scope.dwsp = []
		$http({
			url: "http://47.88.16.225:402/qingjia",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				$scope.dwsp.push(data.data[i])
			}
			$http({
				url: "http://47.88.16.225:402/chuchai",
				method: "get",
			}).then(function(data) {
				for(var i = 0; i < data.data.length; i++) {
					$scope.dwsp.push(data.data[i])
				}
				$http({
					url: "http://47.88.16.225:402/baoxiao",
					method: "get",
				}).then(function(data) {
					for(var i = 0; i < data.data.length; i++) {
						$scope.dwsp.push(data.data[i])
					}
					$http({
						url: "http://47.88.16.225:402/lizhishenqing",
						method: "get",
					}).then(function(data) {
						for(var i = 0; i < data.data.length; i++) {
							$scope.dwsp.push(data.data[i])
						}
						console.log($scope.dwsp)
						$scope.a = $scope.dwsp;
						$scope.pageNum = 1;
						$scope.total = $scope.a.length;
						$scope.pageSize = 10;
						$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
						$scope.start = $scope.pageSize*($scope.pageNum - 1);
						$scope.end = $scope.pageSize*$scope.pageNum;
						$scope.a = $scope.a.slice($scope.start,$scope.end);
					})
				})
			})
		})

			$scope.next=function(){
		
				
				$scope.a = $scope.dwsp;
				$scope.pageNum++;
				if($scope.pageNum>$scope.totalPage){
					$scope.pageNum=$scope.totalPage
				}
				$scope.total = $scope.a.length;
				$scope.pageSize = 10;
				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
				$scope.start = $scope.pageSize*($scope.pageNum - 1);
				$scope.end = $scope.pageSize*$scope.pageNum;
				$scope.a = $scope.a.slice($scope.start,$scope.end);
				
			
	}
	
//上一页
		$scope.prev=function(){
	
				$scope.a = $scope.dwsp;
				$scope.pageNum--;
				if($scope.pageNum<1){
					$scope.pageNum=1
				}
				$scope.total = $scope.a.length;
				$scope.pageSize = 10;
				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
				$scope.start = $scope.pageSize*($scope.pageNum - 1);
				$scope.end = $scope.pageSize*$scope.pageNum;
				$scope.a = $scope.a.slice($scope.start,$scope.end);

				
			
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