angular.module('cyzApp')
	.controller("farizhi", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		console.log($(".push").eq(0).find("input").length)
		$scope.loadingrizhi=true;
		//默认显示
		$scope.dayPush = true;
		$scope.weekPush = false;
		$scope.monthPush = false;

		//类型切换
		$scope.riShow = function() {
			$scope.dayPush = true;
			$scope.weekPush = false;
			$scope.monthPush = false;
			$(function() {
				$(".pushRizhi>ul>li")[0].style = "background:rgba(16,50,101,0.2);color:white;border-left:2px solid #EF1627;"
				$(".pushRizhi>ul>li")[1].style = "border-left: none;background:#C9D2E3;color:#07162d;"
				$(".pushRizhi>ul>li")[2].style = "border-left: none;background:#C9D2E3;color:#07162d;"
			})
		}
		$scope.weekShow = function() {
			$scope.dayPush = false;
			$scope.weekPush = true;
			$scope.monthPush = false;
			$(function() {
				$(".pushRizhi>ul>li")[1].style = "background:rgba(16,50,101,0.2);color:white;border-left:2px solid #EF1627;"
				$(".pushRizhi>ul>li")[0].style = "border-left: none;background:#C9D2E3;color:#07162d;"
				$(".pushRizhi>ul>li")[2].style = "border-left: none;background:#C9D2E3;color:#07162d;"
			})
		}
		$scope.monthShow = function() {
			$scope.dayPush = false;
			$scope.weekPush = false;
			$scope.monthPush = true;
			$(function() {
				$(".pushRizhi>ul>li")[2].style = "background:rgba(16,50,101,0.2);color:white;border-left:2px solid #EF1627;"
				$(".pushRizhi>ul>li")[1].style = "border-left: none;background:#C9D2E3;color:#07162d;"
				$(".pushRizhi>ul>li")[0].style = "border-left: none;background:#C9D2E3;color:#07162d;"
			})
		}
		//获取登录者的昵称
		$http({
				url: "http://47.88.16.225:402/users",
				method: "get"
		}).then(function(data){
			for (var i=0;i<data.data.length;i++) {
				if(data.data[i].id==localStorage.uid){
					localStorage.nicheng=data.data[i].nicheng;
				}
			}
		})
		//联系人列表
		$scope.peoples = [];
		$http({
				url: "http://47.88.16.225:402/users",
				method: "get"
			}).then(function(data) {
				$scope.loadingrizhi=false;
				for(var i = 0; i < data.data.length; i++) {
					if(data.data[i].id == localStorage.uid) {} else {
						if(data.data[i].isadmin == 1) {
							$scope.peoples.push(data.data[i])
						}
					}
				}
				$scope.addPeoples = $scope.peoples;
				//搜索联系人

				$scope.$watch("searchPeople", function() {
					if($scope.searchPeople) {
						$http({
								url: "http://47.88.16.225:402/users"
							}).then(function(data) {

							}),
							function() {
								alert("error!")
							}
					}
				})

			})
			//点击发送给的input框
		$scope.pushInput = function() {
			$scope.search = true;
		}

		//点击联系人
		$scope.linePeople = function($index) {
			console.log($index)
			console.log($(".nichen>li").eq($index).text())
			$(".shenpiren").val($(".nichen>li").eq($index).text())
			localStorage.userName =$(".nichen>li").eq($index).text();
		}
		
		
		
		console.log($(".push").eq(0).find("input").length)
		
		//日报发送提交
		$scope.daysubmit = function(classify) {
			if($(".day textarea").eq(0).val() && $(".day textarea").eq(1).val() && $(".day input").eq(0).val()){
				$http({
					url: "http://47.88.16.225:402/rizhi",
					method: "post",
					data: {
						classify: classify,
						wancheng: $scope.day.dayFinish,
						weiwancheng: $scope.day.dayUnFinish,
						beizhu: $scope.day.dayBeizhu,
						fageishui: localStorage.userName,
						uid: localStorage.uid,
						time: Number(new Date()),
						nicheng: localStorage.nicheng
					}
				}).then(function(data) {
					$(function(){
						$(".alert").html("提交成功！").fadeIn();
						setTimeout(function() {
							$(".alert").fadeOut()
						}, 1000);
					})
					$scope.day.dayFinish = "";
					$scope.day.dayUnFinish = "";
					$scope.day.dayBeizhu = "";
					$scope.day.dayFageishui = "";
				})
			}else{
				$(function(){
						$(".alert").html("提交信息不全").fadeIn();
						setTimeout(function() {
							$(".alert").fadeOut()
						}, 1000);
				})
			}
				
			}
		
			//周报发送提交
		$scope.weeksubmit = function() {
			if($(".week textarea").eq(0).val() && $(".week textarea").eq(1).val() && $(".week input").eq(0).val()){
				$http({
					url: "http://47.88.16.225:402/rizhi",
					method: "post",
					data: {
						classify: 1,
						wancheng: $scope.week.weekFinish,
						weiwancheng: $scope.week.weekUnFinish,
						beizhu: $scope.week.weekBeizhu,
						fageishui: localStorage.userName,
						uid: localStorage.uid,
						time: Number(new Date()),
						nicheng: localStorage.nicheng
					}
				}).then(function(data) {
					$(function(){
						$(".alert").html("提交成功！").fadeIn();
						setTimeout(function() {
							$(".alert").fadeOut()
						}, 1000);
					})
					$scope.week.weekFinish = "";
					$scope.week.weekUnFinish = "";
					$scope.week.weekBeizhu = "";
					$scope.week.weekFageishui = "";
				})
				}else{
					$(function(){
							$(".alert").html("提交信息不全").fadeIn();
							setTimeout(function() {
								$(".alert").fadeOut()
							}, 1000);
					})
				}
			}
			//月报发送提交
		$scope.monthsubmit = function() {
			if($(".month textarea").eq(0).val() && $(".month textarea").eq(1).val() && $(".month input").eq(0).val()){
			$http({
				url: "http://47.88.16.225:402/rizhi",
				method: "post",
				data: {
					classify: 2,
					wancheng: $scope.month.monthFinish,
					weiwancheng: $scope.month.monthUnFinish,
					beizhu: $scope.month.monthBeizhu,
					fageishui: localStorage.userName,
					uid: localStorage.uid,
					time: Number(new Date()),
					nicheng: localStorage.nicheng
				}
			}).then(function(data) {
				$(function(){
						$(".alert").html("提交成功！").fadeIn();
						setTimeout(function() {
							$(".alert").fadeOut()
						}, 1000);
					})
				$scope.month.monthFinish = "";
				$scope.month.monthUnFinish = "";
				$scope.month.monthBeizhu = "";
				$scope.month.monthFageishui = "";
			})
			}else{
					$(function(){
							$(".alert").html("提交信息不全").fadeIn();
							setTimeout(function() {
								$(".alert").fadeOut()
							}, 1000);
					})
				}
		}

	}])