angular.module('cyzApp')
 	.controller("shenpi",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$(".spCon li").click(function(){
			$(this).attr("class","rzActive").siblings().removeClass("rzActive")
		})		
 	}])
