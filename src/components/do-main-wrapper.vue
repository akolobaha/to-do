<template>
	<div class="do-main-wrapper">
		<v-btn><router-link class="link-item" to='/'>Все</router-link></v-btn>
		<v-btn><router-link class="link-item" to="/finished">Завершенные</router-link></v-btn>
		<v-btn><router-link class="link-item" to='/add'>Добавить задачу</router-link></v-btn>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'do-main-wrapper',
	components: {
	}
}
</script>

<style lang="scss">
	
</style>