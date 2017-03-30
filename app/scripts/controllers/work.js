angular.module('cyzApp')
 	.controller("work",["$scope","$http","$state","$timeout","$location",function($scope,$http,$state,$timeout,$location){
// 		未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("work")
		if($scope.uNum!=-1){
			$(".m_active li").eq(2).attr("class","m_activeLi").siblings().removeClass("m_activeLi")
		}
//		$scope.ur = $location.url().split("/").length
//		$scope.zul = $scope.u[$scope.ur-1]
//		if($scope.u[$scope.ur-1]=="user"){
//			$(".m_active li").eq(1).attr("class","m_activeLi").siblings().removeClass("m_activeLi")
//		}

		//	未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
		$(".workCon p").click(function(){
			$(this).attr("class","n_active").siblings().removeClass("n_active")
		})	
 	}])