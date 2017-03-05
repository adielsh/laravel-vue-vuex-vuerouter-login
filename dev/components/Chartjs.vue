<template>
	<div>
		<canvas :width="width" :height="height"></canvas>
	</div>
</template>

<script>
	const defaultOptions = {
		elements: {
			rectangle: {
				borderWidth: 2,
				borderColor: 'rgb(0, 255, 0)',
				borderSkipped: 'bottom'
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'top',
		},
		title: {
			display: false,
		}
	};
	export default {
		props: {
			width: {
				value: String,
				default: 50,
			},
			height: {
				value: String,
				default: 500,
			},
			title: {
				value: String,
				default: null
			},
			labels: {
				value: Array
			},
			data: {
				value: Array
			},
			options: {
				value: Object,
				default: function () {
					return {title: {}}
				}
			}
		},
		components: {},
		data () {
			return {}
		},
		computed: {},
		methods: {
			setCanvas(ctx){
				var barChartData = {
					labels: this.labels,
					datasets: [{
						label: '',
						backgroundColor: "rgba(220,220,220,0.5)",
						data: this.data
					}]
				};
				var opt = Object.assign({}, defaultOptions, this.options);
				opt.title.text = this.title;
				this.options.title.display = !!this.title;

				this.myChart = new Chart(ctx, {
					type: 'bar',
					data: barChartData,
					options: opt
				});
				window.myChart = this.myChart;
			}
		},
		watch: {
			labels: function (val) {
				this.myChart.data.labels = val;
				this.myChart.update();
			},
			data: function (data) {
				this.myChart.data.datasets[0].data = data;
				this.myChart.update();
			}
		},
		created(){
		},
		mounted(){
			this.setCanvas(this.$el.querySelector("canvas"));
		},
		updated(){

		},
		destroyed(){
		}
	}
</script>

<style>

</style>