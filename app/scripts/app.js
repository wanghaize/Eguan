'use strict';

/**
 * @ngdoc overview
 * @name cyzApp
 * @description
 * # cyzApp
 *
 * Main module of the application.
 */
angular
  .module('cyzApp', ['ui.router'])
  .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('login',{
		url:"/login",
		templateUrl:"views/login.html"
	})
  	
  	.state('main',{
		url:"/main",
		templateUrl:"views/main.html"
	})
	.state('main.news',{
		url:"/news",
		templateUrl:"views/news.html"	
	})
	.state('main.news.gonggao',{
		url:"/gonggao",
		templateUrl:"views/gonggao.html"	
	})
	.state('main.news.rizhinews',{
		url:"/rizhinews",
		templateUrl:"views/rizhinews.html"	
	})
	.state('main.news.shenpinews',{
		url:"/shenpinews",
		templateUrl:"views/shenpinews.html"	
	})
	.state('main.user',{
		url:"/user",
		templateUrl:"views/user.html"	
	})
	.state('main.add',{
		url:"/add",
		templateUrl:"views/Add.html"	
	})
	.state('main.user.userinfo',{
		url:"/userinfo",
		templateUrl:"views/userinfo.html"	
	})
	.state('main.work',{
		url:"/work",
		templateUrl:"views/work.html"	
	})
	.state('main.work.rizhi',{
		url:"/rizhi",
		templateUrl:"views/rizhi.html"	
	})
	.state('main.work.rizhi.farizhi',{
		url:"/farizhi",
		templateUrl:"views/farizhi.html"	
	})
	
	.state('main.work.rizhi.shourizhi',{
		url:"/shourizhi",
		templateUrl:"views/shourizhi.html"	
	})
	
	.state('main.work.rizhi.worizhi',{
		url:"/worizhi",
		templateUrl:"views/worizhi.html"	
	})
		
		
	.state('main.work.shenpi',{
		url:"/shenpi",
		templateUrl:"views/shenpi.html"	
	})

	.state('main.work.shenpi.faqi',{
		url:"/faqi",
		templateUrl:"views/faqi.html"	
	})
	
	.state('main.work.shenpi.daishenpi',{
		url:"/daishenpi",
		templateUrl:"views/daishenpi.html"	
	})
	
	
	.state('main.work.shenpi.yishenpi',{
		url:"/yishenpi",
		templateUrl:"views/yishenpi.html"	
	})	


	.state('main.work.shenpi.faqide',{
		url:"/faqide",
		templateUrl:"views/faqide.html"	
	})
  	.state('main.work.shenpi.faqi.qingjia',{
		url:"/qingjia",
		templateUrl:"views/qingjia.html"	
	})
  	.state('main.work.shenpi.faqi.chuchai',{
		url:"/chuchai",
		templateUrl:"views/chuchai.html"	
	})
  	.state('main.work.shenpi.faqi.baoxiao',{
		url:"/baoxiao",
		templateUrl:"views/baoxiao.html"	
	})
  	.state('main.work.shenpi.faqi.lizhi',{
		url:"/lizhi",
		templateUrl:"views/lizhi.html"	
	})
	$urlRouterProvider.when("","/login")
  }])
