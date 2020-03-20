<template>
	<div class="do-main-wrapper">
		<router-link class="link-item" to='/'>Все</router-link> 
		<router-link class="link-item" to="/finished">Завершенные</router-link>
		<router-link class="link-item" to='/add'>Добавить задачу</router-link>
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
	.link-item{
		background: purple;
		color: #fff;
		text-decoration: none;
		padding: 10px 15px;
		&.router-link-exact-active{
			background: #e8a8e8;
		}
		&:hover{
			opacity: 0.8;
			transition: 0.2s ease-in-out;
		}
	}
</style>