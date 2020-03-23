<template>
		<v-col md="4" class="do-task-preview">
				<v-card class="px-4 py-2">
					<div class="top">
					
					<v-icon
						@click="removeThisTask"
					>
						mdi-close-circle-outline
					</v-icon>
				</div>
				<h3 class="text-center">
					{{ task.name }} 
					<v-chip :color="chipColorSetter()" dark>{{thisTaskStatus ()}}</v-chip> 
				</h3>
				<p>{{  task.description  }}</p>
				<p>{{ whenCriated() }}</p>
				<p>{{ task.status }}</p>
				
				<v-btn
					@click="finishThisTask"
					v-if="this.task.status != 'finished'"
				>
					<v-icon>mdi-flag-checkered</v-icon>
					Завершить
				</v-btn>
				
				<v-btn><v-icon> mdi-play </v-icon>Начать</v-btn>
		
		</v-card>
		</v-col>
		
</template>

<script>
export default {
	name: 'do-task-preview',
	components: {
	},
	props: {
		task: {}
	},
	data () {
		return {
			chipColor: '',
		}
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
		},
		thisTaskStatus () {
			return this.task.status
		},
		chipColorSetter () {
			if (this.task.status == 'В ожидании' || this.task.status == 'created') {
				return 'blue'
			}
			if (this.task.status == 'finished') {
				return 'green'
			}
		}
	}
}
</script>

<style lang="scss">
	
	.top {
		text-align: right;
	}

</style>