angular.module('cyzApp')
 	.controller("userinfo",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
// 		未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
 	}])