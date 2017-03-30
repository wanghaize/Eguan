angular.module('cyzApp')
 	.controller("faqishenpi",["$scope","$http","$state","$timeout","$location",function($scope,$http,$state,$timeout,$location){
		
 	
 		
 		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("shenpi")
		if($scope.uNum!=-1){
			$(".workCon p").eq(1).attr("class","n_active").siblings().removeClass("n_active")
		}
		$(".f_xuanxiang li").click(function(){
			$(this).attr("class","fq_Active").siblings().removeClass("fq_Active")
		})	
 }])