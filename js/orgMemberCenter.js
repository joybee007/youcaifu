$(function () {
	$('#container').highcharts({
		chart: {
			type: 'column',
			margin: [ 50, 50, 100, 80]
		},
		title: {
			text: '本机构理财师业绩'
		},
		xAxis: {
			categories: [
				'赵明利',
				'赵明利',
				'赵明利',
				'赵明利',
				'赵明利',
				'赵明利',
				'赵明利',
				'赵明利'
			],
			labels: {
				rotation: -45,
				align: 'right',
				style: {
					fontSize: '13px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '业绩 (万元)'
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: '<b>{point.y:.1f} 万元</b>',
		},
		series: [{
			name: '业绩分析图',
			data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				x: 4,
				y: 10,
				style: {
					fontSize: '13px',
					fontFamily: 'Verdana, sans-serif',
					textShadow: '0 0 3px black'
				}
			}
		}]
	});
});