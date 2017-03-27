'use strict';

/**
 * @ngdoc function
 * @name cyzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cyzApp
 */
angular.module('cyzApp')
 	.controller("login",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
 		
 		$scope.check = false
			//获取cookie
		function getcookie(objname) {
			var str = document.cookie.split("; ");
			for(var i = 0; i < str.length; i++) {
				var arr = str[i].split("=");
				if(arr[0] == objname) return unescape(arr[1]);
			}
		}
		//获取账号
		$scope.cookuser = getcookie('username')
		//如果有则自定填写
		if($scope.cookuser) {
			$scope.username = $scope.cookuser
		}

 		
 		$scope.isShow = false
 		$scope.l_ipone = function(){
 			var phoneYZ=/^1[34578]\d{9}$/;//手机验证
   			var us = $scope.username
   			if(phoneYZ.test(us)){
   				$scope.iponeTitle ="手机号格式正确"
   				$timeout(function(){
   					$scope.isShow = false
   				},500)
				
   			}else{
   				$scope.iponeTitle ="手机号格式错误"
   				$scope.isShow = true
   			}
 		}
   		$scope.l_psd = function(){
   			var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
   			var mi = $scope.passwords
   			console.log(psd.test(mi))
   			if(psd.test(mi)){
   				$scope.psdTitle = "密码格式正确"
   				$timeout(function(){
   					$scope.isHide = false
   				},500)
   				
   			}else{
   				$scope.psdTitle = "字母开头，六到八位数字"
   				$scope.isHide = true
   			}
   		}
 		$scope.l_ti = false
 		
 		
 		$scope.login = function(){
 			if($scope.username==undefined){
 				$scope.iponeTitle ="用户名不能为空"
 				$scope.isShow = true
 			}else if($scope.passwords==undefined){
 				$scope.psdTitle = "密码不能为空"
 				$scope.isHide = true
 			}else{
 				if($scope.check == true) {
					function setCookie(cookie_name, value, Path, timeout) {
						var date = new Date();
						date.setDate(date.getDate() + timeout)
						document.cookie = cookie_name + "=" + escape(value) + ";path" + "=" + Path +
							';expires=' + date.toGMTString()
					}
					setCookie('username', $scope.username, '/', 7)        
				}

 				$http({
   				url:"http://47.88.16.225:402/users/login",
   				method:"post",
   				data:{
   					username:$scope.username,
   					password:$scope.passwords
   				}
   		}).then(function(data){
   				localStorage.uid = data.data.uid
   				$scope.loginTitle = "用户登录成功"
   				$scope.l_ti = true
   				$timeout(function(){
   					$scope.l_ti = false
   				},500)
     			$state.go("main")
   			},function(data){
				console.log("失败")
				$scope.loginTitle = "用户名或密码错误"
   				$scope.l_ti = true
   				$timeout(function(){
   					$scope.l_ti = false
   				},500)
   			})
   			}

 		}
 		
		
 	}])