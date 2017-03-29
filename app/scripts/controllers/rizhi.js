angular.module('cyzApp')
 	.controller("rizhi",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
			console.log("日志")
		//	未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
		$(".rz_Wrapp li").click(function(){
			$(this).attr("class","rzActive").siblings().removeClass("rzActive")
		})	
 	}])
