var prodServer = 'http://localhost:3000'

function getInfo(url,type,data){
	return new Promise(function(resolve,reject) {
		$.ajax({
			url,
			type,
			async: true,
			traditional:true,
			xhrFields: {
				withCredentials: true
			},
			data:data,
			success: (data) => {
				resolve(data) 
			},
			error: function(err) {
				console.log(err)
				reject(err)
			}
		})
	});
}
function selectLottery(data){ //获取彩票数据
	 return new Promise(function(resolve,reject) {
	   getInfo(prodServer+"/lottery/selectLottery",'POST',data).then((data)=>{
		   resolve(data)
	   }).catch((err)=>{
		   reject(err)
	   })
	});
}
function selectForecast(data){ //获取预测彩票数据
	 return new Promise(function(resolve,reject) {
	   getInfo(prodServer+"/lottery/selectForecast",'POST',data).then((data)=>{
		   resolve(data)
	   }).catch((err)=>{
		   reject(err)
	   })
	});
}

function addLottery(data){ //添加彩票数据
	 return new Promise(function(resolve,reject) {
	   getInfo(prodServer+"/lottery/addLottery",'POST',data).then((data)=>{
		   resolve(data)
	   }).catch((err)=>{
		   reject(err)
	   })
	});
}