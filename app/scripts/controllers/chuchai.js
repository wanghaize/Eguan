angular.module('cyzApp')
 	.controller("chuchai",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
 		var start = {
			format: 'YYYY-MM-DD hh:mm:ss',
			minDate: $.nowDate(0), //设定最小日期为当前日期
			isinitVal: true,
			festival: true,
			ishmsVal: false,
			maxDate: '2099-06-30 23:59:59', //最大日期
			choosefun: function(elem, datas) {
				end.minDate = datas; //开始日选好后，重置结束日的最小日期
			}
		};
		var end = {
			format: 'YYYY-MM-DD hh:mm:ss',
			minDate: $.nowDate(0), //设定最小日期为当前日期
			festival: true,
			maxDate: '2099-06-16 23:59:59', //最大日期
			choosefun: function(elem, datas) {
				start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
			}
		};
		$('#inpstart').jeDate(start);
		$('#inpend').jeDate(end);
		$http({
   				url: "http://47.88.16.225:402/users",
   				method: "get"
   				}).then(function(data) {
   					$scope.nicheng=[]
   					for (var i=0;i<data.data.length;i++) {
   						if(data.data[i].isadmin=="1"){
   							$scope.nicheng.push(data.data[i])
   						}
   					}
   				})
		$scope.spr=function(index){
   			$(".shenpiren").val($(".nichen>li").eq(index).text())
   		}
 		$scope.tijiao = function() {
			var leixing = $scope.leixing
			var kaishi = document.getElementsByClassName("kaishi")[0].value
			var jieshu = document.getElementsByClassName("jieshu")[0].value
			var shiyou = $scope.shiyou
			var shenpiren = document.getElementsByClassName("shenpiren")[0].value
			console.log(kaishi+","+jieshu)
			if(leixing && shenpiren && kaishi && jieshu && shiyou) {
				$http({
   				url: "http://47.88.16.225:402/chuchai",
   				method: "post",
   				data: {
   					zleixing:"出差",
   					uid: localStorage.uid,
   					chuchaididian: leixing,
   					kaishishijian:	kaishi,
   					jieshushijian: jieshu,
   					shiyou: shiyou,
   					shenpiren: shenpiren,
   					zhuangtai: "1"	
   				}
   				}).then(function(data) {
   				alert("提交成功")
   				})
   				} else {
				alert("请填写完整")
			}
		}
 	}])