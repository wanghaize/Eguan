angular.module('cyzApp')
 	.controller("news",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$scope.rizhitongzhi = function(){
			$state.go("main.news.rizhinews")
		}
		$scope.shenpitongzhi = function(){
			$state.go("main.news.shenpinews")
		}
 	}])