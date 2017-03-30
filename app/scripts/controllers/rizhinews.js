angular.module('cyzApp')
 	.controller("rizhinews",["$scope","$http","$state","$stateParams","$timeout","$location",function($scope,$http,$state,$timeout,$stateParams,$location){
 		$scope.u = $location.url().split("/")
		$scope.ur = $location.url().split("/").length
		$scope.zul = $scope.u[$scope.ur-1]
		if($scope.u[$scope.ur-1]=="rizhinews"){
			$(".newsConNav p").eq(1).attr("class","n_active").siblings().removeClass("n_active")
		}
 		
 		$scope.loading=true;
		$http({
			url:"http://47.88.16.225:402/rizhi",
			method:"get"
		}).then(function(data){
 		$scope.loading=false;
			
			$scope.rizhinews=data.data;
			console.log($scope.rizhinews[0].time)
			
			
				$scope.num = 0;				
				$scope.SY = 1;				
				$scope.num = Math.ceil(data.data.length / 10)
				$scope.currentpage = 0;
				$scope.listpage = 10;
				$scope.page = 1;
				
				if($scope.SY=="1"){
					$("#prevpage").attr("disabled","disabled")		
				}
				
				if($scope.num=="1"){
					$("#prevpage").attr("disabled","disabled")
					$("#nextpage").attr("disabled","disabled")	
				}
				
				$scope.next = function() {
					if($scope.currentpage < $scope.num - 1) {
						$scope.currentpage++;
						$scope.page += 1;
						$scope.SY++
					}
					
					if($scope.num==$scope.SY){
						$("#nextpage").attr("disabled","disabled")	
						$("#prevpage").attr("disabled",false)	
					}					
				}
				
				$scope.prev = function() {
					if($scope.currentpage > 0) {
						$scope.currentpage--;
						$scope.page -= 1;
						$scope.SY--
					}
					
					if($scope.num!==$scope.SY){
						$("#nextpage").attr("disabled",false)		
					}
					
					if($scope.SY=="1"){
						$("#prevpage").attr("disabled","disabled")		
					}
					
				}			
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
 	
 	.filter("myfilter", function() {
		return function(list, start) {
			return list.slice(start)
		}
	})

