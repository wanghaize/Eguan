angular.module('cyzApp')
 	.controller("shourizhi",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
			$scope.getInfos=[];
			$scope.classifys=[];
			$scope.Infosa=[];
			$scope.Infosb=[];
			$scope.Infosc=[];
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"get"
			}).then(function(data){
				$scope.getIDs="";
				$scope.getNichengs=[];
				for (var k=0;k<data.data.length;k++) {
					if(data.data[k].fageishui==localStorage.userName){
						$scope.getInfos.push(data.data[k]);
						$scope.getIDs=data.data[k].uid;
					}else{
//						alert("kong")
//						数据为空的时候效果/
					}
					$http({
						url:"http://47.88.16.225:402/users",
						method:"get"
					}).then(function(data){
						for(var p=0;p<data.data.length;p++){
							if($scope.getIDs==data.data[p].id){
								$scope.getNichengs.push(data.data[p].nicheng)
							}
						}
					})
				}
				for (var i=0;i<$scope.getInfos.length;i++) {
					if($scope.getInfos[i].classify==0){
						$scope.classifys.unshift("日报");
						$scope.Infosa.unshift("今日完成工作");
						$scope.Infosb.unshift("未完成工作");
						$scope.Infosc.unshift("备注");
					}else if($scope.getInfos[i].classify==1){
						$scope.classifys.unshift("周报");
						$scope.Infosa.unshift("本周完成工作");
						$scope.Infosb.unshift("本周工作总结");
						$scope.Infosc.unshift("备注");
					}else{
						$scope.classifys.unshift("月报");
						$scope.Infosa.unshift("本月工作计划");
						$scope.Infosb.unshift("本月工作总结");
						$scope.Infosc.unshift("备注");
					}
				}
			})
		
 	}])