angular.module('cyzApp')
 	.controller("lizhi",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
 		var start = {
			format: 'YYYY-MM-DD hh:mm:ss',
			minDate: $.nowDate(-10000), //设定最小日期为前10000天日期
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
   						if(data.data[i].isadmin=="1"  && data.data[i].nicheng!=localStorage.uNnme){
   							$scope.nicheng.push(data.data[i])
   						}
   					}
   				})
		$scope.spr=function(index){
   			$(".shenpiren").val($(".nichen>li").eq(index).text())
   		}
		$scope.fanhui=function(){
   			$("#myModalqj").modal("hide")
   			setTimeout(function(){
   				$state.go("main.work.shenpi.faqide")
   			},200)
   			
   			
   		}
		var off = false		
   		$scope.queding=function(){
   			if(off){
				$scope.jieshu =""
				$scope.kaishi =""
				$scope.yuanyin =""
			}else{
				console.log(123)
			}
   		}
		$scope.tijiao = function() {
			var kaishi = document.getElementsByClassName("kaishi")[0].value
			var jieshu = document.getElementsByClassName("jieshu")[0].value
			var yuanyin = $scope.yuanyin
			var shenpiren = document.getElementsByClassName("shenpiren")[0].value
			var dt1 = Date.parse(new Date())
			if(shenpiren && kaishi && jieshu && yuanyin) {
				$http({
   				url: "http://47.88.16.225:402/lizhishenqing",
   				method: "post",
   				data: {
   					zleixing:"离职",
   					faqiren:localStorage.uNnme,
   					uid: localStorage.uid,
   					kaishishijian:	kaishi,
   					jieshushijian: jieshu,
   					shiyou: yuanyin,
   					shenpiren: shenpiren,
   					time:dt1,
   					zhuangtai: "1"
   				}
   				}).then(function(data) {
   					$(".tijiaoyanzheng").html("确定提交？")
   				})
   				off = true
			} else {
				$(".tijiaoyanzheng").html("请填写完整")
				off = false
			}
		}

 	}])