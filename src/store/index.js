import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {name: 'name', description: 'text'},
      {name: 'name2', description: 'description2'},
      {name: 'name3', description: 'description3'},
    ]
  },
  mutations: {
    addTask (state, payload) {
      state.tasks.push({
        name: payload.name,
        description: payload.text
      })
      console.log(payload)
    }
  },
  actions: {

  },
  getters: {
    allTasks(state) {
      return state.tasks
    }
  },
  modules: {
  }
})
