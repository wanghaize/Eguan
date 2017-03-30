angular.module('cyzApp')
 	.controller("add",["$scope","$http","$state","$timeout","$interval","$location",function($scope,$http,$state,$timeout,$interval,$location){
		$scope.u = $location.url()
		$scope.uNum = $scope.u.indexOf("add")
		if($scope.uNum!=-1){
			$(".m_active li").eq(3).attr("class","m_activeLi").siblings().removeClass("m_activeLi")
		}
		
		
function Isadmin(){
 		
 			$scope.NAME=function(){
 				if($scope.Name==undefined){
 					$scope.unamee=true;		
 					$scope.uname=false;	
 					$scope.unameg=false;	
 					$scope.NAMEE=false;	
 				}
 				else if($scope.Name==""){
 					$scope.unamee=true;		
 					$scope.uname=false;	
 					$scope.unameg=false;	
 					$scope.NAMEE=false;
 				}
 				else{
 					var phoneYZ=/^1[34578]\d{9}$/;//手机验证
 					var user_phone1;
 					if($("#NAME").val().match(phoneYZ)){
 						user_phone1=true;
 						
 						$scope.uname=false
 						$scope.unameg=true
 						$scope.unamee=false
 						$scope.NAMEE=false;
 					}else{
 						$scope.uname=true
 						$scope.unameg=false
 						$scope.unamee=false
 						$scope.NAMEE=false;
 					}
 				}
 			}

 			$scope.PASS=function(){				
 				if($scope.pass==undefined){
 					$scope.upass=false					
 					$scope.upasse=true
 					$scope.upassg=false
 				}
 				else if($scope.pass==""){
 					$scope.upass=false					
 					$scope.upasse=true
 					$scope.upassg=false
 				}
 				else{
 					var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
 					var pass_word;
 					if($("#psd").val().match(psd)){
 						pass_word=true;  
 						$scope.upass=false					
 	 					$scope.upasse=false
 	 					$scope.upassg=true					
 					}else{
 						$scope.upass=true					
 	 					$scope.upasse=false
 	 					$scope.upassg=false	
 					}
 					
 				}			
 			}

 		
 		$scope.PHONE=function(){				
 				if($scope.Phone==undefined){
 					$scope.uphonee=true
 					$scope.uphone=false
 					$scope.uphoneg=false
 				}else if($scope.Phone==""){
 					$scope.uphonee=true
 					$scope.uphone=false
 					$scope.uphoneg=false
 				}				
 				else{
 					var phoneYZ=/^1[34578]\d{9}$/;//手机验证
 					var user_phone;
 					if($("#phone").val().match(phoneYZ)){
 						user_phone=true;
 						$scope.uphone=false
 						$scope.uphoneg=true
 						$scope.uphonee=false
 					}else{
 						$scope.uphone=true
 						$scope.uphonee=false
 						$scope.uphoneg=false
 					}
 				}			
 			}	
 			
 			
 			$scope.Nicheng=function(){
 				
 				if($scope.nicheng==undefined){
 					$scope.unicheng=true					
 				}				
 				else if($scope.nicheng==""){
 					$scope.unicheng=true
 					$scope.unichengg=false
 				}
 				else{								
		 				var hanziYZ=/^[\u4e00-\u9fa5]{1,10}$/;
		 				var hanzi;
		 				
		 				if($("#NC").val().match(hanziYZ)){
		 						hanzi=true;
		 						$scope.unicheng=false
		 	 					$scope.unichengg=true
		 	 					$scope.Unichengg=false
							}else{
								$scope.unicheng=false
			 					$scope.unichengg=false
			 					$scope.Unichengg=true
							}
		 			}				
 	}
 				

 	 	
 	 	
 	$interval(function(){							
							if($scope.isadmin===undefined){
								$scope.uGLg=false
								$scope.uGL=true
				 	 		}
							else if($scope.isadmin===""){
								$scope.uGLg=false
								$scope.uGL=true
							}
							else{
				 	 			$scope.uGLg=true
								$scope.uGL=false
				 	 		}						 					    
					},100);
 		
				
$scope.TJ=function(){		
 		$scope.a;
 		if($scope.isadmin=="公司管理者"){
 			a=1
 		}
 		else if($scope.isadmin=="普通员工"){
 			a=2		
 		}else{
 			 a = undefined;
 		}
 		

if( $scope.Name == undefined || $scope.pass == undefined || $scope.Phone == undefined || $scope.nicheng==undefined || a==undefined || $scope.nicheng=="")
 	{	

 		if($scope.Name==undefined){
				$scope.unamee=true;		
				$scope.uname=false;	
				$scope.unameg=false;	
				$scope.NAMEE=false;	
			}
			else if($scope.Name==""){
				$scope.unamee=true;		
				$scope.uname=false;	
				$scope.unameg=false;	
				$scope.NAMEE=false;	
			}
			else{
				var phoneYZ=/^1[34578]\d{9}$/;//手机验证
				var user_phone1;
				if($("#NAME").val().match(phoneYZ)){
					user_phone1=true;
					$scope.uname=false
					$scope.unameg=true
					$scope.unamee=false
					$scope.NAMEE=false;
				}else{
					$scope.uname=true
					$scope.unameg=false
					$scope.unamee=false
					$scope.NAMEE=false
				}
			}
				
				if($scope.pass==undefined){
					$scope.upass=false					
					$scope.upasse=true
					$scope.upassg=false
				}
				else if($scope.pass==""){
					$scope.upass=false					
					$scope.upasse=true
					$scope.upassg=false
				}
				else{
					var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
					var pass_word;
					if($("#psd").val().match(psd)){
						pass_word=true;  
						$scope.upass=false					
	 					$scope.upasse=false
	 					$scope.upassg=true					
					}else{
						$scope.upass=true					
	 					$scope.upasse=false
	 					$scope.upassg=false	
					}
					
				}			
		
	
 		
				if($scope.Phone==undefined){
 					$scope.uphonee=true
 					$scope.uphone=false
 					$scope.uphoneg=false
 				}else if($scope.Phone==""){
 					$scope.uphonee=true
 					$scope.uphone=false
 					$scope.uphoneg=false
 				}				
 				else{
 					var phoneYZ=/^1[34578]\d{9}$/;//手机验证
 					var user_phone;
 					if($("#phone").val().match(phoneYZ)){
 						user_phone=true;
 						$scope.uphone=false
 						$scope.uphoneg=true
 						$scope.uphonee=false
 					}else{
 						$scope.uphone=true
 						$scope.uphonee=false
 						$scope.uphoneg=false
 					}
 				}
				
	
				if($scope.nicheng==undefined){
 					$scope.unicheng=true					
 				}				
 				else if($scope.nicheng==""){
 					$scope.unicheng=true
 					$scope.unichengg=false
 				}
 				else{								
		 				var hanziYZ=/^[\u4e00-\u9fa5]{1,10}$/;
		 				var hanzi;
		 				
		 				if($("#NC").val().match(hanziYZ)){
		 						hanzi=true;
		 						$scope.unicheng=false
		 	 					$scope.unichengg=true
		 	 					$scope.Unichengg=false
							}else{
								$scope.unicheng=false
			 					$scope.unichengg=false
			 					$scope.Unichengg=true
							}
		 			}
					
			 		if(a==undefined){
			 			$scope.uGL=true
			 			$scope.uGLg=false
			 		}
			 		else if(a==""){
			 			$scope.uGL=true
			 			$scope.uGLg=false
			 		}
			 		else{
			 			$scope.uGL=false
			 			$scope.uGLg=true
			 		}		
 	}
 	
else if( $scope.uGLg==true &&$scope.unichengg==true &&  $scope.uphoneg==true &&  $scope.upassg==true &&  $scope.unameg==true)
 	{
			
 		$scope.uGL=false	
 		$http({
 					url:"http://47.88.16.225:402/users",
 					method:"post",
 					data:{
 						username:$scope.Name,
 						password:$scope.pass,
 						isadmin:a,
 						tel:$scope.Phone,
 						address:$scope.JG,
 						jinjilianxiren:$scope.jinji,
 						jinjilianxirendianhua:$scope.jinjidianhua,
 						nicheng:$scope.nicheng
 					}
 				}).then(function(da){
 					$scope.suss = true;	
 					console.log("成功")						
 					$timeout(function(){
 					    $scope.suss = false;   
 					},2000);
 					
   					$timeout(function(){
   						$scope.Name=""
   						$scope.pass =""
   						$scope.Phone=""
   						$scope.JG = ""
   						$scope.jinji = ""
   						$scope.jinjidianhua = ""
   						$scope.nicheng = ""
   					},500); 					
 					
 				},function(daa){	
				
 				 	$http({
 						url:"http://47.88.16.225:402/users",
 						method:"get"
 					}).then(function(daa){
 						
 						for(var i=0;i<daa.data.length;i++)
 						{
 							if(daa.data[i].username==$scope.Name){										 						
 		 						$scope.uname=false
 		 						$scope.unameg=false
 		 						$scope.unamee=false
 		 						$scope.NAMEE=true;
 						  }											
 						}
 						
 					})						
 					}
 				)
 	 }else{
		 
 		 return
 	 }
 	


 		}
 	}
 		
 	Isadmin()
 	
 	
 }])