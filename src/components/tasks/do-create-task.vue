<template>
	<div class="do-create-task">
		<div>
			<hr>
			<h1>Добавить задачу</h1>
			<!-- <input type="text" placeholder="Название задачи" ><br> -->
			<v-text-field placeholder="Название задачи" v-model="task.name"></v-text-field>
			<v-textarea placeholder="Описание задачи" v-model="task.text"></v-textarea>
			<v-btn 
				@click="createTask" 
				color="green" 
				dark
				v-if="isBtnActive"
			>Создать</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	name: 'do-create-task',
	data () {
		return {
			task: {
				name: '',
				text: '',
			},
			isBtnActive: false
		}
	},
	methods: {
		createTask () {
			return this.$store.commit('addTask', this.task)
		},
		isValid () {
			return console.log('isVAlid')
		}
	},
	computed: {
		formName () {
			return this.task.name
		},
	},
	watch: {
		formName: function() {
			console.log(this.task.name)
		}
	}	
}
</script>

<style lang="scss">

</style>