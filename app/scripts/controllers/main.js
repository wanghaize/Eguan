angular.module('cyzApp')
 	.controller("main",["$scope","$http","$state","$timeout","$filter",function($scope,$http,$state,$timeout,$filter){
 		//	未登录禁止进去此页面
		if(localStorage.getItem("uid")=="" || localStorage.getItem("uid")==undefined){
	    	 $state.go("login")
	    }
 		//陈颖志
   		//登录管理者身份判断
 		//最新公告提醒
 		$http({
				url:"http://47.88.16.225:402/xiaoxi",
				method:"get"	
			}).then(function(data){
					console.log(data)
				if(data.data!=undefined){
					$scope.xiaoxiTitle = data.data[data.data.length-1]
					$('#myModalgg').modal('show')
					
				}
			}) 
 		 
  		 
 		//上传头像
		var input = document.getElementById("demo_input");
		var result = document.getElementById("result");
		var img_area = document.getElementById("img_area");
		if(typeof(FileReader) === 'undefined') {
			result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
			input.setAttribute('disabled', 'disabled');
		} else {
			input.addEventListener('change', readFile, false);
		}
			

		function readFile() {
			var file = this.files[0];
			//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件 
			if(!/image\/\w+/.test(file.type)) {
				alert("请确保文件为图像类型");
				return false;
			}
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e) {
//			result.innerHTML = '<img src="' + this.result + '" alt=""/>';
//			img_area.innerHTML = '<div class="sitetip">图片img标签展示：</div><img src="' + this.result + '" alt=""/>';
			console.log(this.result)
			srcImgs = this.result
			$http({
				url:"http://47.88.16.225:402/users/"+localStorage.uid,
	   			method:"put",
	   			data:{
	   				imgSrc:this.result
	   			}
			}).then(function(data){
				$scope.imgSrc = srcImgs
			},function(){
				alert("cuow")
			})
		}
		} 		
 		
 		
 		
 		//用户资料卡
 		
 		$scope.m_infoShow = function(){
   			$scope.m_infoStyle = {
   				"transition": "0.5s all",
   				"opacity": "1",
   				"transform": "translateY(220px)"
   			}
 		}
 		$scope.m_infoHide=function(){
 			$scope.m_infoStyle = {
   				"transition": "0.5s all",
   				"opacity": "0",
   				"transform": "translateY(0px)"
   			}
 		}		 
 		 
 		 
 		//获取用户
   		$http({
			url:"http://47.88.16.225:402/users/"+localStorage.uid,
	   		method:"get"
		}).then(function(data){
			localStorage.uNnme = data.data.nicheng
			$scope.userInfo = data.data
			$scope.imgSrc = $scope.userInfo.imgSrc
			console.log(data.data.isadmin)
			if(data.data.isadmin!="1"){
				$scope.yinc = false
			}else{
				$scope.yinc = true
			}
		})
 				//退出登录
		
		$scope.logint = function(){
//			$http({
//				url:"http://47.88.16.225:402/users/logint/"+localStorage.uid,
//		   		method:"post"
//			}).then(function(){
//				console.log(123)
//			})
			$('#myModalTwo').modal('hide')
			$timeout(function(){
				localStorage.clear()
				$state.go("login")
			},200)
		
		}
		
		//退出登录1
		
 		
 				//退出登录2

		
		//修改昵称
		$scope.xg_nc = false
		$scope.nc_title = "修改成功"
		$scope.nc_tj = function(){
			if($scope.xg_micheng!=undefined){
				var hanziYZ=/^[\u4e00-\u9fa5]{1,10}$/
				if(hanziYZ.test($scope.xg_micheng)){
					$http({
						url:"http://47.88.16.225:402/users/"+localStorage.uid,
		   				method:"put",
		   				data:{
		   					nicheng:$scope.xg_micheng
		   				}
					}).then(function(data){
							$scope.xg_nc = true
							$timeout(function(){
								$scope.xg_nc = false
								$('#myModal').modal('hide')
							},500)
					},function(){
						
					})
				}else{
					$scope.nc_title = "昵称不能为数字或字母"
					$scope.xg_nc = true
					$timeout(function(){
						$scope.xg_nc = false
					},600)
				}
			}else{
				$scope.nc_title = "昵称不能为空"
				$scope.xg_nc = true
				$timeout(function(){
					$scope.xg_nc = false
				},600)
			}
		}

		//修改密码
		$scope.xg_t = false
		$scope.xg_title = "密码格式错误"
		$scope.xg_ts = false
		$scope.xg_titles = "两次密码不一致"
		$scope.mm_tsk = false
		$scope.m_xg = function(){
			if($scope.x_password!=undefined){
				var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
				var m_mi = $scope.x_password;
				if(psd.test(m_mi)){
					$scope.xg_t = false
				}else{
					$scope.xg_t = true
				}
			}
			
		}
		$scope.m_xgs = function(){
			if($scope.x_password!=undefined){
			var pp = $scope.x_password;
			if($scope.xg_password.indexOf(pp)!=-1){
				$scope.xg_ts = false
			}else{
				$scope.xg_ts = true
			}
		}
		}
		$scope.xg_sub = function(){
			if($scope.x_password!=undefined&&$scope.x_password!=undefined &&$scope.xg_password.indexOf($scope.x_password)!=-1){
				console.log(123)
				$http({
					url:"http://47.88.16.225:402/users/"+localStorage.uid,
	   				method:"put",
	   				data:{
	   					password:$scope.x_password
	   				}
				}).then(function(data){
					console.log(data)
					$scope.mm_tsk = true
					$timeout(function(){
						$scope.mm_tsk = false
						$('#myModalOne').modal('hide')
					},500)
					$scope.x_password =""
					$scope.xg_password =""
				},function(){
					console.log("shibai")
				})
			}else{
				$scope.xg_ts = true
			}
		}
 
 		//杜冰冰
		var timestamp = Date.parse(new Date());
		$scope.dt1 = timestamp
		    $http({
				url:"http://47.88.16.225:402/users",
				method:"get"	
			}).then(function(data){
				for (var i=0;i<data.data.length;i++) {
										
					if(data.data[i].id==localStorage.uid){						
							localStorage.Name = data.data[i].nicheng							
						}								
					}									
				})
		
$scope.Biaoti=function(){		    	
		   if($scope.biaoti==undefined){
			   $scope.uBiaoti = true		   
		   }
		   else if($scope.biaoti==""){
			   $scope.uBiaoti = true	
		   }else{
			   $scope.uBiaoti = false	
		   }		    	
	}	


		    
  $scope.Neirong=function(){		    	
				   if($scope.neirong==undefined){
					   $scope.uNeirong = true		   
				   }
				   else if($scope.neirong==""){
					   $scope.uNeirong = true	
				   }else{
					   $scope.uNeirong = false	
				   }		    	
			}
	
  
$scope.confirm=function(){	


	if($scope.uNeirong == false	&&  $scope.uBiaoti == false	){
				$http({
					url:"http://47.88.16.225:402/xiaoxi",
					method:"post",
					data:{
						biaoti:$scope.biaoti,
						neirong:$scope.neirong,
						faburen:localStorage.Name,
						fabushijian:$scope.dt1
					}
				}).then(function(da){				
					$("#myModalThree").modal("hide")
					location.reload()  					
				})		
}	
	 else{
		 //	$(".btn-primary").css()
				 if($scope.neirong==undefined){
					   $scope.uNeirong = true		   
				   }
				   else if($scope.neirong==""){
					   $scope.uNeirong = true	
				   }else{
					   $scope.uNeirong = false	}
				 
				 
				 if($scope.biaoti==undefined){
					   $scope.uBiaoti = true		   
				   }
				   else if($scope.biaoti==""){
					   $scope.uBiaoti = true	
				   }else{
					   $scope.uBiaoti = false	
				   }
		   
	}
}


$(".m_active li").click(function(){
	$(this).attr("class","m_activeLi").siblings().removeClass("m_activeLi")
})

		    
 	}])
 	.filter("isadmin", function() {
		return function(input) {
			if(input == "1") {
				return input = "管理者";
			}
			if(input == 2) {
				return input = "员工";
			}
		}
		return input;
	})