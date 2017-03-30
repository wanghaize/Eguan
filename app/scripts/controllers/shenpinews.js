angular.module('cyzApp')
	.controller("shenpinews", ["$scope", "$http", "$state", "$timeout","$location", function($scope, $http, $state, $timeout,$location) {
//		console.log($location.url())
		$scope.u = $location.url().split("/")
		$scope.ur = $location.url().split("/").length
		$scope.zul = $scope.u[$scope.ur-1]
		if($scope.u[$scope.ur-1]=="shenpinews"){
			$(".newsConNav p").eq(2).attr("class","n_active").siblings().removeClass("n_active")
		}
//		$scope.u = location.href.split("/")
//		var uLen = location.href.split("/").length
//		var ur = location.href.split("/")[uLen-1]
//		console.log(ur)
		$scope.dwsp = []
		$scope.loading=true;
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
						$scope.loading=false;
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
						
						if($scope.a[1]==$scope.dwsp[1] ){
								$("#prevpage").attr("disabled","disabled")	
							}
				
						if($scope.a[1]!==$scope.dwsp[1] ){
								$("#nextpage").attr("disabled",false)	
							}
						
						
						if($scope.a.length<$scope.pageSize ){
									$("#nextpage").attr("disabled","disabled")	
									$("#prevpage").attr("disabled","disabled")	
							}
				
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
				
				
				if($scope.a.length<$scope.pageSize ){
					$("#nextpage").attr("disabled","disabled")	
					$("#prevpage").attr("disabled",false)	
				}
				
				
				
			
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
			
			
			if($scope.a[1]==$scope.dwsp[1] ){
					$("#prevpage").attr("disabled","disabled")	
				}
			
				if($scope.a.length>=$scope.pageSize ){
					$("#nextpage").attr("disabled",false)	
					
				}
			
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