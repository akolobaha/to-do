<template>
	<div class="do-tasks-list">
		<v-row>
				<do-task-preview 
					v-for="task of allTasks"
					:key="task.id"
					:task="task"
				></do-task-preview>
		</v-row>
		
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
}
</script>

<style>

</style>