angular.module('cyzApp')
 	.controller("shourizhi",["$scope","$http","$state","$timeout","$location",function($scope,$http,$state,$timeout,$location){
 		
// 		未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
 		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("shourizhi")
		if($scope.uNum!=-1){
			$(".rz_Wrapp li").eq(1).attr("class","rzActive").siblings().removeClass("rzActive")
		}
 		
			$scope.classifys=[];
			$scope.Infosa=[];
			$scope.Infosb=[];
			$scope.Infosc=[];
			$scope.loading=true;
			$scope.Infoaaa=false;
			//按时间排序
		$scope.timeOrderUp=function(){
			$scope.time="time";
		}
		$scope.timeOrderDown=function(){
			$scope.time="-time";
		}
			
			
			//获取登录者昵称
				$http({
					url:"http://47.88.16.225:402/users",
					method:"get"
				}).then(function(data){
					for (var i=0;i<data.data.length;i++) {
						if(data.data[i].id==localStorage.uid){
							localStorage.unicheng=data.data[i].nicheng;
						}
					}
					
				})
				console.log(localStorage.unicheng)
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"get"
			}).then(function(data){
				$scope.Getss=[];
				$scope.loading=false;
//				if(data==null||data.data.length==undefined){
//					$scope.Info=true;
//				}else{
//					$scope.Info=false;
//				}
				for (var k=0;k<data.data.length;k++) {
					if(data.data[k].fageishui==localStorage.unicheng){
						$scope.Infoaaa=false;
						$scope.Gets=data.data[k]
						$scope.Getss.push($scope.Gets)
						
					}
//					console.log($scope.Getss)
					
					else{
//						$scope.Info=true;
					}
				}
				for (var i=0;i<$scope.Getss.length;i++) {
					if($scope.Getss[i].classify==0){
						$scope.classifys.unshift("日报");
						$scope.Infosa.unshift("今日完成工作");
						$scope.Infosb.unshift("未完成工作");
						$scope.Infosc.unshift("备注");
					}else if($scope.Getss[i].classify==1){
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
 	

