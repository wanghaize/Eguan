angular.module('cyzApp')
	.controller("farizhi", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
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

		//联系人列表
		$scope.peoples = [];
		$http({
				url: "http://47.88.16.225:402/users",
				method: "get"
			}).then(function(data) {
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
			/*console.log($scope.addPeoples[$index].nicheng)
			var user = $scope.addPeoples[$index].nicheng
			localStorage.nicheng = $scope.addPeoples[$index].nicheng
					//			$scope.day.dayFageishui=localStorage.username
			var userId = $scope.addPeoples[$index].id
			$(function() {
				$(".userShow").val(user);
				localStorage.userName = $scope.addPeoples[$index].username;
			})*/
		}
		//日报发送提交
		$scope.daysubmit = function() {
			if($(".day textarea").eq(0).val() && $(".day textarea").eq(1).val() && $(".day input").eq(0).val()){
				$http({
					url: "http://47.88.16.225:402/rizhi",
					method: "post",
					data: {
						classify: 0,
						wancheng: $scope.day.dayFinish,
						weiwancheng: $scope.day.dayUnFinish,
						beizhu: $scope.day.dayBeizhu,
						fageishui: localStorage.userName,
						uid: localStorage.uid,
						time: new Date() + "",
						nicheng: localStorage.nicheng
					}
				}).then(function(data) {
					$scope.day.dayFinish = "";
					$scope.day.dayUnFinish = "";
					$scope.day.dayBeizhu = "";
					$scope.day.dayFageishui = "";
				})
			}else{
				console.log("buquan")
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
						time: new Date() + "",
						nicheng: localStorage.nicheng
					}
				}).then(function(data) {
					$scope.week.weekFinish = "";
					$scope.week.weekUnFinish = "";
					$scope.week.weekBeizhu = "";
					$scope.week.weekFageishui = "";
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
					time: new Date() + "",
					nicheng: localStorage.nicheng
				}
			}).then(function(data) {
				$scope.month.monthFinish = "";
				$scope.month.monthUnFinish = "";
				$scope.month.monthBeizhu = "";
				$scope.month.monthFageishui = "";
			})
			}
		}

	}])