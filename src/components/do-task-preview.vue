<template>
	<div class="do-task-preview">
		<h1>{{ task.name }}</h1>
		<p>{{  task.description  }}</p>
	</div>
</template>

<script>
export default {
	name: 'do-task-preview',
	props: {
		task: {}
	}
}
</script>

<style lang="scss">
	.do-task-preview {
		border: 1px solid grey;
	}
</style>