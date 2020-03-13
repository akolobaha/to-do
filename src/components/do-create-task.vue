<template>
	<div class="do-create-task">
		<div>
			<h1>Добавить задачу</h1>
		<input type="text" placeholder="Название задачи" v-model="task.name"><br>
		<textarea type="text" placeholder="Описание задачи" v-model="task.text"></textarea>
		<hr>
		<button @click="createTask">Создать</button>
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
				status: 'В работе',
			}
		}
	},
	methods: {
		createTask () {
			return this.$store.commit('addTask', this.task)
		}
	}
}
</script>

<style lang="scss">

</style>