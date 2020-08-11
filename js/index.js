let countNumber=(names)=>{ //统计数组值出现的次数
	return names.reduce(function(allNames, name) {
		if (name in allNames) {
			allNames[name]++;
		} else {
			allNames[name] = 1;
		}
		return allNames;
	}, {});
}
function PrefixZero(num, n) {//设置位数，不足用0补齐
    return (Array(n).join(0) + num).slice(-n);
}

(function() { //柱状 蓝球
	var myChart = echarts.init(document.querySelector('.chart'))
	let option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '4',
			top: '10px',
			right: '0',
			bottom: '4%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: [],
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: { //x轴标签的颜色
				color: ' #000',
				fontSize: 12
			},
			axisLine: {
				show: false //x轴刻度是否显示
			},


		}],
		yAxis: [{
			type: 'value',
			axisLabel: { //x轴标签的颜色
				color: ' #000',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)',
					width: 2
				}
			}

		}],
		series: [{
			name: '出现次数',
			type: 'bar',
			barWidth: '60%',
			data: []
		}]
	};
	selectLottery().then((data)=>{
		 var redBall = [];//红球出现次数统计
		 var blueBall = [];//蓝球出现次数统计
		 data.data.forEach((item,index,arr)=>{
		 	blueBall.push(...item.blueBall)
		 })
		 let blueBallRes = countNumber(blueBall)
		 for(var i=0;i<16;i++){
		 	option.xAxis[0].data.push(i+1)
		 	option.series[0].data.push(blueBallRes[PrefixZero(i+1, 2)])
		 }
		 myChart.setOption(option);// 使用刚指定的配置项和数据显示图表。
		 window.addEventListener("resize", function() {//自适应大小
		 	myChart.resize();
		 })
	})
})();

(function() { //柱状1 红球
	var myChart = echarts.init(document.querySelector('.line1 .chart'))
	let option = {
		color: ['red'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '4',
			top: '10px',
			right: '0',
			bottom: '4%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: [],
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: { //x轴标签的颜色
				color: ' #000',
				fontSize: 12
			},
			axisLine: {
				show: false //x轴刻度是否显示
			},


		}],
		yAxis: [{
			type: 'value',
			axisLabel: { //x轴标签的颜色
				color: ' #000',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)',
					width: 2
				}
			}

		}],
		series: [{
			name: '出现次数',
			type: 'bar',
			barWidth: '60%',
			data: []
		}]
	};
	selectLottery().then((data)=>{
		var redBall = [];//红球出现次数统计
		var blueBall = [];//蓝球出现次数统计
		data.data.forEach((item,index,arr)=>{
			redBall.push(...item.redBall)
		})
		
		let redBallRes = countNumber(redBall)
		for(var i=0;i<33;i++){
			option.xAxis[0].data.push(i+1)
			option.series[0].data.push(redBallRes[PrefixZero(i+1, 2)])
		}
		myChart.setOption(option);// 使用刚指定的配置项和数据显示图表。
		window.addEventListener("resize", function() {//自适应大小
			myChart.resize();
		})
	})

})();

(function() { //横条形状
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
	var myChart = echarts.init(document.querySelector('.bar2 .chart'))
	let option = {
		title: {
			text: '',
			subtext: ''
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: []
		},
		grid: {
			left: '24%',
			right: '10%',
			bottom: '3%',
			top: '0'
			//containLabel: true
		},
		xAxis: {
			show: false //不显示X的刻度
			/* type: 'value',
			boundaryGap: [0, 0.01] */
		},
		yAxis: [{
				inverse: true, //翻转
				type: 'category',
				data: ['HTML5', 'css', 'javascript', 'VUE', 'NODE'],
				axisLabel: { //x轴标签的颜色
					color: ' #000',
					fontSize: 12
				},
				axisTick: { //不显示刻度
					show: false
				},
				axisLine: { //不显示y轴线
					show: false
				}
			},
			{
				inverse: true, //翻转
				type: 'category',
				data: ['122', '1240', '830', '502', '25'],
				axisLabel: { //x轴标签的颜色
					color: ' #000',
					fontSize: 12
				},
				axisTick: { //不显示刻度
					show: false
				},
				axisLine: { //不显示y轴线
					show: false
				}
			}
		],
		series: [{
				name: '条',
				type: 'bar',
				data: [18, 50, 88, 98, 12, 35],
				yAxisIndex: 0,
				//柱子圆角
				itemStyle: {
					barBorderRadius: 20,
					color: function(params) {
						//console.log(params)//对应6个柱子
						return myColor[params.dataIndex] //柱子的dataIndex和myColor数组下标对应
					}
				},
				//柱子之间的距离
				barCategoryGap: 50,
				//柱子宽度
				barWidth: 10,
				//显示柱子内文字
				label: {
					show: true,
					position: 'inside',
					//{c}会自动解析data数据
					formatter: '{c}%'
				}
			},
			{
				name: '框',
				type: 'bar',
				data: [100, 100, 100, 100, 100, 100],
				yAxisIndex: 1,
				//柱子之间的距离
				barCategoryGap: 50,
				//柱子宽度
				barWidth: 15,
				//柱子圆角
				itemStyle: {
					color: 'none',
					barBorderRadius: 15,
					borderColor: "#00c1de",
				},
			}
		]
	};


	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	//自适应大小
	window.addEventListener("resize", function() {
		myChart.resize();
	})
})();

(function() { //曲线色块
	var myChart = echarts.init(document.querySelector('.line2 .chart'))
	let option = {
		title: {
			text: ''
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: [],
			textStyle: {
				color: "#000"
			}
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			top: '2%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: [],
			axisLabel: {
				color: '#000'
			}
		},
		yAxis: [{
			type: 'value'
		}],
		series: [{
			
				name: '红球次数',
				type: 'line',
				//stack:'总量',//去除后数据不叠加显示
				smooth: true, //折线变圆
				areaStyle: { //填充区域样式设置
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[{
								offset: 0,
								color: "red" //渐变开始颜色
							},
							{
								offset: 1,
								color: "green" //渐变开始颜色
							}
						],
						false
					),
					shadowColor: "black",
					
				},
				symbol: "circle", //图形标记(拐点)，设置为圆点
				symbolSize: 5, //图形标记(拐点)，设置大小
				showSymbol: false, //图形标记(拐点)，默认不显示，鼠标经过时显示
				data: [],
				lineStyle: { //单独修改当前线条的样式
					color: "red",
					width: 2
				},
				itemStyle: {
					color: "red",
					borderColor: "rgba(221,220,107,0.1)", //图形标记(拐点)，边框颜色
					borderWidth: 12, //图形标记(拐点)，边框大小
				}
			},
			{
				name: '蓝球次数',
				type: 'line',
				smooth: true, //折线变圆
				areaStyle: {},
				data: [],
				areaStyle: { //填充区域样式设置
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[{
								offset: 0,
								color: "red" //渐变开始颜色
							},
							{
								offset: 1,
								color: "green" //渐变开始颜色
							}
						],
						false
					),
					shadowColor: "black"
				},
				symbol: "circle", //图形标记(拐点)，设置为圆点
				symbolSize: 5, //图形标记(拐点)，设置大小
				showSymbol: false, //图形标记(拐点)，默认不显示，鼠标经过时显示
				lineStyle: { //单独修改当前线条的样式
					color: "#0184d5",
					width: 2
				},
				itemStyle: {
					color: "#0184d5",
					borderColor: "rgba(221,220,107,0.1)", //图形标记(拐点)，边框颜色
					borderWidth: 12, //图形标记(拐点)，边框大小
				}
			},

		]
	};
	selectLottery().then((data)=>{
		var redBall = [];//红球出现次数统计
		var blueBall = [];//蓝球出现次数统计
		data.data.forEach((item,index,arr)=>{
			redBall.push(...item.redBall)
			blueBall.push(...item.blueBall)
		})
		let redBallRes = countNumber(redBall)
		let blueBallRes = countNumber(blueBall)
		for(var i=0;i<33;i++){
			option.xAxis.data.push(i+1)
			option.series[0].data.push(redBallRes[PrefixZero(i+1, 2)])
			option.series[1].data.push(blueBallRes[PrefixZero(i+1, 2)])
		}
		myChart.setOption(option);// 使用刚指定的配置项和数据显示图表。
		window.addEventListener("resize", function() {//自适应大小
			myChart.resize();
		})
	})
})();
