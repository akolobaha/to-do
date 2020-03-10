<template>
	<div class="do-tasks-list">
		<h1>Tasks</h1>
		<do-task-preview 
			v-for="task of allTasks"
			:key="task.id"
			:task="task"
		></do-task-preview>
	</div>
</template>

<script>
import doTaskPreview from './do-task-preview'
export default {
	name: 'do-tasks-list',
	components: {
		doTaskPreview
	},
	computed: {
		allTasks() {
			return this.$store.getters.allTasks
		}
	},
	// data () {
	// 	return {
	// 		tasks: [
	// 			{ name: 'Задача1', description: 'Описание задачи 1', id: "1" },
	// 			{ name: 'Задача2', description: 'Описание задачи 2', id: "2" },
	// 			{ name: 'Задача3', description: 'Описание задачи 3', id: "3" },
	// 		]
	// 	}
	// }
}
</script>

<style>

</style>