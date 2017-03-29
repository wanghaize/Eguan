angular.module('cyzApp')
 	.controller("faqishenpi",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$(".f_xuanxiang li").click(function(){
			$(this).attr("class","fq_Active").siblings().removeClass("fq_Active")
		})	
 }])