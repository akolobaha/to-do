import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: {},
    task_id: 0
  },
  mutations: {
    addTask (state, payload) {
      console.log(state.task_id, state.tasks)
      state.tasks.push({
        name: payload.name,
        description: payload.text,
        id: state.task_id++,
        created: new Date(),
        status: 'created'
      })
    },
    incrementId () {
      return this.task_id++
    },

    removeTask(state, payload) {
      state.tasks.forEach((item, index, tasks) => {
        if (item.id == payload){
          tasks.splice(index, 1)
        }
      })
    },

    changeTasksStatus (state, payload) {
      state.tasks.forEach((item, index, tasks) => {
        if (item.id == payload){
          tasks[index].status = 'finished'
        }
      })
    }
  },
  actions: {

  },
  getters: {
    allTasks(state) {
      return state.tasks
    },
    finishedTasks(state) {
      let finished = state.tasks.filter((task) => {
        return task.status == 'finished'
      })
      return finished
    }
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
