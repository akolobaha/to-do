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
		<p>{{ whenCriated() }}</p>
		<p>{{ task.status }}</p>
		<button 
			class="finish_the_task"
			@click="finishThisTask"
			v-if="this.task.status != 'finished'"
		>Завершить задачу</button>
		<do-task-start
			v-if="this.task.status != 'finished'"
		></do-task-start>
	</div>
</template>

<script>
import doTaskStart from './do-task-start.vue'
export default {
	name: 'do-task-preview',
	components: {
		doTaskStart
	},
	props: {
		task: {}
	},
	methods: {
		removeThisTask () {
			return this.$store.commit('removeTask', this.task.id)
		},
		finishThisTask () {
			return this.$store.commit('changeTasksStatus', this.task.id)
		},
		whenCriated () {
			let created = new Date(this.task.created)
			let formattedDate = `Создана: ${created.getDate()}.${created.getMonth()}.${created.getFullYear()} ${created.getHours()}:${created.getMinutes()}`
			return formattedDate
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
	.finish_the_task {
		background: limegreen;
		border: none;
		color: #fff;
		cursor: pointer;
		padding: 10px 15px;
		&:hover {
			opacity: 0.8;
		}
		&:focus, &:active {
			filter: brightness(1.1)
		}
	}
</style>