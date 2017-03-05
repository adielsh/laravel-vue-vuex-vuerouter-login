<template>
	<select class="form-control">
		<!--<option>בחר קבוצה</option>-->
		<option v-for="option in myOptions" :value="option.value">{{option.text}}</option>
	</select>
</template>

<script>
	export default {
		props: {
			'options': {
				type: Array,
				default: [],
			},
			"placeholder": {
				type: String,
				default: null,
			}
		},
		components: {},
		data () {
			return {}
		},
		computed: {
			myOptions: function () {
				var arr = [];
				this.options.forEach((option) => {
					if (typeof option == "object") {
						arr.push({text: option.text, value: option.value});
					} else {
						arr.push({text: option, value: option});
					}
				});
				return arr;
			}
		},
		watch: {
			options: function () {
//				const $selectize = $(this.$el).selectize();
				this.selectize.addOption(this.myOptions);
			}
		},
		methods: {},
		created(){
		},
		mounted(){
			console.log(this.myOptions);
			const $selectize = $(this.$el).selectize({
				placeholder: this.placeholder,
				allowEmptyOption: true
			});
			console.log($selectize);
			this.selectize = $selectize[0].selectize;
			window.sr = this.selectize;
			$selectize.on("change", (e) => {
				console.log($selectize.val(), "************");
				for (let i = 0; i < this.options.length; i++) {
					let option = this.options[i];
					if (typeof option == "object") {
						if ($selectize.val() == option.value) {
							this.$emit("selected", option);
							return;
						}
					}

				}

				this.$emit("selected", $selectize.val());
			});
		},
		updated(){

		},
		destroyed(){
		}
	}
</script>

<style>

</style>