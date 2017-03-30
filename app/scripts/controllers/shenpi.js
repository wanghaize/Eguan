angular.module('cyzApp')
 	.controller("shenpi",["$scope","$http","$state","$timeout","$location",function($scope,$http,$state,$timeout,$location){
	
// 		未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
 		$scope.u = $location.url()
		console.log($scope.u.indexOf("work")) 
		console.log($scope.u)
		$scope.uNum = $scope.u.indexOf("work")
		if($scope.uNum!=-1){
			$(".m_active li").eq(2).attr("class","m_activeLi").siblings().removeClass("m_activeLi")
		}
	
	$(".spCon li").click(function(){
			$(this).attr("class","rzActive").siblings().removeClass("rzActive")
		})		
 	}])
