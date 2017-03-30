angular.module('cyzApp')
 	.controller("user",["$scope","$http","$state","$timeout","$location",function($scope,$http,$state,$timeout,$location){
 		$scope.u = $location.url().split("/")
		$scope.ur = $location.url().split("/").length
		$scope.zul = $scope.u[$scope.ur-1]
		if($scope.u[$scope.ur-1]=="user"){
			$(".m_active li").eq(1).attr("class","m_activeLi").siblings().removeClass("m_activeLi")
		}
 		$scope.loading=true;
	Suser()
	function Suser(){
		$http({
			url:"http://47.88.16.225:402/users",
			method:"get"		
		}).then(function(data){
			$scope.loading=false;
			$scope.a=data.data
						
				
			$scope.guanli = function(){
				$scope.a=[]
				for(var i=0;i<data.data.length;i++){
						if(data.data[i].isadmin == '1'){
							$scope.a.push(data.data[i])
						}
				}
				
				
				nex($scope.a)
			}
			$scope.yuangong = function(){
				console.log($scope.a)
				$scope.a=[]
				console.log($scope.a)
				for(var i=0;i<data.data.length;i++){
						if(data.data[i].isadmin == '2'){
							$scope.a.push(data.data[i])
						}
				}
				
				nex($scope.a)
			}	
	nex($scope.a)		
	function nex(n){
		
		
				$scope.num = 0;				
				$scope.SY = 1;				
				$scope.num = Math.ceil($scope.a.length / 10)
				$scope.currentpage = 0;
				$scope.listpage = 10;
				$scope.page = 1;
				
				
				
				if($scope.SY=="1"){
					$("#prevpage").attr("disabled","disabled")		
				}
				
				
				if($scope.num=="1"){
					$("#prevpage").attr("disabled","disabled")
					$("#nextpage").attr("disabled","disabled")					
				}else{
					$("#nextpage").attr("disabled",false)
				}
				
				
				$scope.next = function() {
					if($scope.currentpage < $scope.num - 1) {
						$scope.currentpage++;
						$scope.page += 1;
						$scope.SY++
					}
					
					if($scope.num==$scope.SY){
						$("#nextpage").attr("disabled","disabled")	
						$("#prevpage").attr("disabled",false)	
					}					
				}
				
				$scope.prev = function() {
					if($scope.currentpage > 0) {
						$scope.currentpage--;
						$scope.page -= 1;
						$scope.SY--
					}
					
					if($scope.num!==$scope.SY){
						$("#nextpage").attr("disabled",false)		
					}
					
					if($scope.SY=="1"){
						$("#prevpage").attr("disabled","disabled")		
					}
					
				}
		
		
		
		
		
	}	
		},function(data){
			console.log("错误")
		})
}
//		function Suser(){		
//			$http({				
//				url:"http://47.88.16.225:402/users",
//				method:"get"
//			}).then(function(d){
//				console.log(d)
//				$scope.a = d.data;
//				$scope.pageNum = 1;
//				$scope.total = $scope.a.length;
//				$scope.pageSize = 10;
//				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
//				$scope.start = $scope.pageSize*($scope.pageNum - 1);
//				$scope.end = $scope.pageSize*$scope.pageNum;
//				$scope.a = $scope.a.slice($scope.start,$scope.end);
//			},function(d){
//				console.log("错误")
//			})
//		}
//		Suser()
//  管理层
//      $scope.zz=""
//		$scope.guanli=function(){
//			
//			$http({
//				url:"http://47.88.16.225:402/users",
//				method:"get",
//				
//			}).then(function(d){
//				$scope.a=[]
//				for(var i=0;i<d.data.length;i++){
//						if(d.data[i].isadmin == '1'){
//							$scope.a.push(d.data[i])
//							$scope.zz="管理者"
//						}
//						
//				}
//			},function(){
//				alert("error!")
//			})
//		}	
//员工层		
//		$scope.yuangong=function(){
//			$http({
//				url:"http://47.88.16.225:402/users",
//				method:"get",
//				
//			}).then(function(d){
//				$scope.a=[]
//				for(var i=0;i<d.data.length;i++){
//						if(d.data[i].isadmin !== "1"){
//							$scope.a.push(d.data[i])
//							$scope.zz="员工"
//						}	
//				}
//			},function(){
//				alert("error!")
//			})
//		}	
				
////  删除
		var aid='';
		$scope.del=function(id){
			aid=id
		}
		$scope.qd=function(){
			$http({
					url:"http://47.88.16.225:402/users/"+aid,
					method:"delete"
			}).then(function(d){		
					Suser()
			})
		}
	
//  修改	
	$scope.xg=function(id){
		sessionStorage.id=id
		$http({
			url:"http://47.88.16.225:402/users/"+id,
			method:"get"
		}).then(function(data){
			$scope.nicheng = data.data.nicheng;
			$scope.tel = data.data.tel
			$scope.address = data.data.address
			$scope.jinjilianxiren = data.data.jinjilianxiren
			$scope.jinjilianxirendianhua = data.data.jinjilianxirendianhua
			$scope.isadmin = data.data.isadmin
		})
	}
	$scope.sjyz=function(){
		var sj=/^1[34578]\d{9}$/,
			sjj=$scope.tel
		if(sj.test(sjj)){
//			alert(1)
		}else{
			alert('手机号码有误，请重填')
		}
	}
////// 提交
	$scope.tj=function(){
//		console.log(sessionStorage.id)
		$http({
			url:"http://47.88.16.225:402/users/"+sessionStorage.id,
			method:"put",
			data:{
				nicheng:$scope.nicheng,
				tel:$scope.tel,
				address:$scope.address,
				jinjilianxiren:$scope.jinjilianxiren,
				jinjilianxirendianhua:$scope.jinjilianxirendianhua
			}
		}).then(function(data){
			Suser()
		},function(){
			alert('error')
		})
	}

$(".userConNav p").click(function(){
	$(this).attr("id","userActive").siblings().removeAttr("id")
})


}])
.filter("myfilter", function() {
		return function(list, start) {
			return list.slice(start)
		}
	})
 	
.filter("zz",function(){
	return function(val){
		if(val=="1"){
			return "管理者"
		}else{
			return "普通员工"
		}
	}
})
