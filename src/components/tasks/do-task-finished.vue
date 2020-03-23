<template>
		<div class="do-task-finished">
			<v-row>
				<do-task-preview 
					v-for="task of finishedTasks"
					:key="task.id"
					:task="task"
				></do-task-preview>
			</v-row>
		</div>
</template>

<script>
import doTaskPreview from './do-task-preview'

export default {
	name: 'do-task-finished',
	components: {
		doTaskPreview
	},
	computed: {
		finishedTasks() {
			return this.$store.getters.finishedTasks
		}
	}
}

</script>

<style>

</style>