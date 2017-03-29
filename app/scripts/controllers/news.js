angular.module('cyzApp')
 	.controller("news",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		//	未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
		$scope.rizhitongzhi = function(){
			$state.go("main.news.rizhinews")
		}
		$scope.shenpitongzhi = function(){
			$state.go("main.news.shenpinews")
		}
		

$(".newsConNav p").click(function(){
	$(this).attr("class","n_active").siblings().removeClass("n_active")
})		
		
		
 	}])