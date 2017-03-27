angular.module('cyzApp')
	.controller("daishenpi", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		$scope.dwsp = []
		var arr = $scope.dwsp
		function xx(){
			
		
		$http({
			url: "http://47.88.16.225:402/qingjia",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "1") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/chuchai",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "1") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/baoxiao",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "1") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		$http({
			url: "http://47.88.16.225:402/lizhishenqing",
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				if(data.data[i].zhuangtai == "1") {
					$scope.dwsp.push(data.data[i])
				}
			}
		})
		}
		xx()
		var aid=""
		$scope.jujue=function(){
			$scope.dwsp = []
			var leixing=document.getElementsByClassName("dsleixing")[0].innerHTML,
				lx=""
			//alert(aid)
			if(leixing=="请假"){
				lx="qingjia"
			}else if(leixing=="出差"){
				lx="chuchai"
			}else if(leixing=="报销"){
				lx="baoxiao"
			}else if(leixing=="离职"){
				lx="lizhishenqing"
			}else{
				alert("失败")
			}
			$http({
				url: 'http://47.88.16.225:402/'+lx+'/'+aid,
				method: "put",
				data:{
					zhuangtai:"3"
				}
			}).then(function(data) {
				alert("审批完成")
				xx()
			})
		}
		$scope.tongyi=function(){
			$scope.dwsp = []
			var leixing=document.getElementsByClassName("dsleixing")[0].innerHTML,
				lx=""
			//alert(aid)
			if(leixing=="请假"){
				lx="qingjia"
			}else if(leixing=="出差"){
				lx="chuchai"
			}else if(leixing=="报销"){
				lx="baoxiao"
			}else if(leixing=="离职"){
				lx="lizhishenqing"
			}else{
				alert("失败")
			}
			$http({
				url: 'http://47.88.16.225:402/'+lx+'/'+aid,
				method: "put",
				data:{
					zhuangtai:"2"
				}
			}).then(function(data) {
				alert("审批完成")
				xx()
			})
		}
		$scope.xx = function(id) {
			aid=id
			$scope.deteil = []
			$scope.username=[]
			for(var i = 0; i < arr.length; i++) {
				if(arr[i].id == id) {
					$scope.deteil.push(arr[i])
				}
			}
			$http({
				url: "http://47.88.16.225:402/users",
				method: "get",
			}).then(function(data) {
				for(var i = 0; i < data.data.length; i++) {
					if(data.data[i].id == arr[0].uid) {
						$scope.username.push(data.data[i])
					}
				}
			})
			/*	$scope.deteil = []
				$scope.username=[]*/
			/*$http({
				url: "http://47.88.16.225:402/qingjia",
				method: "get",
			}).then(function(data) {
				for(var i = 0; i < data.data.length; i++) {
					if(data.data[i].id == id) {
						$scope.deteil.push(data.data[i])
					}
				}
				$http({
					url: "http://47.88.16.225:402/chuchai",
					method: "get",
				}).then(function(data) {
					for(var i = 0; i < data.data.length; i++) {
						if(data.data[i].id == id) {
							$scope.deteil.push(data.data[i])
						}
					}
					$http({
						url: "http://47.88.16.225:402/baoxiao",
						method: "get",
					}).then(function(data) {
						for(var i = 0; i < data.data.length; i++) {
							if(data.data[i].id == id) {
								$scope.deteil.push(data.data[i])
							}
						}
						$http({
							url: "http://47.88.16.225:402/lizhishenqing",
							method: "get",
						}).then(function(data) {
							for(var i = 0; i < data.data.length; i++) {
								if(data.data[i].id == id) {
									$scope.deteil.push(data.data[i])
								}
							}
							console.log($scope.deteil[0].uid)
							$http({
							url: "http://47.88.16.225:402/users",
							method: "get",
							}).then(function(data) {
								console.log(data)
								for(var i = 0; i < data.data.length; i++) {
									if(data.data[i].id == $scope.deteil[0].uid) {
										$scope.username.push(data.data[i])
									}
								}
								console.log($scope.deteil[0].uid)
							
							})
						})
					})
				})
			})
*/
		}
	}])