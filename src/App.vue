<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped        
      >
        <v-list>
          <v-list-item
            v-for="route in routes"
            :key="route.name"
          >
            <v-btn
              :to="route.path"
              text
          
             >{{ route.title }}</v-btn></v-list-item>
         
          <v-list-item><do-create-task></do-create-task></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        clipped-left
        color="pink"
        dense
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark />
        <v-spacer />
        
        <h2 class="white--text">{{ getHeader() }}</h2>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      
    </v-app>
  </div>
</template>

<script>
import doCreateTask from './components/tasks/do-create-task.vue'
export default {
  components: {
    doCreateTask
  },
  data () {
    return {
      routes: this.$router.options.routes,
      drawer: false
    }
  },
  methods: {
   
    getHeader () {
      let routesName = this.$router.currentRoute.name;
      let filteredRoute = this.routes.filter((route) => {
        return route.name == routesName
      })
      return(filteredRoute[0].title)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
