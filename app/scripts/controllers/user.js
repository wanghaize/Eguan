angular.module('cyzApp')
 	.controller("user",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		Suser()
		function Suser(){
			$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){
				$scope.a = d.data;
				$scope.pageNum = 1;
				$scope.total = $scope.a.length;
				$scope.pageSize = 10;
				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
				$scope.start = $scope.pageSize*($scope.pageNum - 1);
				$scope.end = $scope.pageSize*$scope.pageNum;
				$scope.a = $scope.a.slice($scope.start,$scope.end);
			})
		}
//  管理层
        $scope.zz=""
		$scope.guanli=function(){
			
			$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){
				$scope.a=[]
				for(var i=0;i<d.data.length;i++){
						if(d.data[i].isadmin == '1'){
							$scope.a.push(d.data[i])
							$scope.zz="管理者"
//							console.log($scope.a)
						}
						
				}
			},function(){
				alert("error!")
			})
		}	
//员工层		
		$scope.yuangong=function(){
			$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){
				$scope.a=[]
				for(var i=0;i<d.data.length;i++){
						if(d.data[i].isadmin !== "1"){
							$scope.a.push(d.data[i])
							
							$scope.zz="员工"
//							console.log($scope.a)
						}
						
				}
			},function(){
				alert("error!")
			})
		}	
				
//  删除
		var aid='';
		$scope.del=function(id){
			aid=id
			
		}
		$scope.qd=function(){
			$http({
					url:"http://47.88.16.225:402/users/"+aid,
					method:"delete"
			}).then(function(d){
//					console.log(d)
//					alert('删除成功!')			
					Suser()
			})
		}
	
//  修改	
	$scope.xg=function(id){
//		console.log(id)
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
// 提交
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

// 下一页
	$scope.next=function(){
		$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){
				
				$scope.a = d.data;
//				console.log($scope.a.length)
				
				$scope.a = d.data;
				$scope.pageNum++;
				if($scope.pageNum>$scope.totalPage){
					$scope.pageNum=$scope.totalPage
				}
				$scope.total = $scope.a.length;
				$scope.pageSize = 10;
				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
				$scope.start = $scope.pageSize*($scope.pageNum - 1);
				$scope.end = $scope.pageSize*$scope.pageNum;
				$scope.a = $scope.a.slice($scope.start,$scope.end);
				
			})
	}
	
//上一页
		$scope.prev=function(){
		$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){
				$scope.a = d.data;
//				console.log($scope.a.length)
				
				$scope.a = d.data;
				$scope.pageNum--;
				if($scope.pageNum<1){
					$scope.pageNum=1
				}
				$scope.total = $scope.a.length;
				$scope.pageSize = 10;
				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
				$scope.start = $scope.pageSize*($scope.pageNum - 1);
				$scope.end = $scope.pageSize*$scope.pageNum;
				$scope.a = $scope.a.slice($scope.start,$scope.end);

				
			})
	}
		//封装
		
//		function fenye(sjson){
//				$scope.total = sjson.length;
//				$scope.pageSize = 10;
//				$scope.totalPage = Math.ceil($scope.total/$scope.pageSize);
//				$scope.start = $scope.pageSize*($scope.pageNum - 1);
//				$scope.end = $scope.pageSize*$scope.pageNum;
//				$scope.a = sjson.slice($scope.start,$scope.end);
//		}
 	}])
 	
 	
