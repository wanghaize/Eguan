angular.module('cyzApp')
 	.controller("work",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
//		console.log(123)
		//	未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
		$(".workCon p").click(function(){
			$(this).attr("class","n_active").siblings().removeClass("n_active")
		})	
 	}])