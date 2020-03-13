<template>
	<div class="do-task-preview">
		<div class="top">
			<span 
				class="remove-task"
				@click="removeThisTask"
			>x</span>
		</div>
		<h1>{{ task.name }}</h1>
		<p>{{  task.description  }}</p>
	</div>
</template>

<script>
export default {
	name: 'do-task-preview',
	props: {
		task: {}
	},
	methods: {
		removeThisTask () {
			return this.$store.commit('removeTask', this.task.id)
		}
	}
}
</script>

<style lang="scss">
	.do-task-preview {
		border: 1px solid grey;
	}
	.top {
		padding: 5px 15px 0 0;
		text-align: right;
		.remove-task{
			cursor: pointer;
		}
	}
</style>