import axios from "axios"

export default {
    namespaced: true,
    state: () => ({
        tasks: [],
        isTasksLoading: false,
        selectedSort: 'all',
        tasksFilters: [
            { name: 'Все', value: 'all' },
            { name: 'Выполенные', value: 'true' },
            { name: 'Активные', value: 'false' },
        ],
    }),
    getters: {
        sortedTasks(state) {
            if (state.selectedSort == 'all') return state.tasks;
            return [...state.tasks].filter(
                (item) => item.completed == JSON.parse(state.selectedSort)
            );
        },
        hasCompletedTask(state) {
            return state.tasks.filter((item) => item.completed).length > 0;
        },
        totalCount(state) {
            return state.tasks.length
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        setTasksLoading(state, isTasksLoading) {
            state.isTasksLoading = isTasksLoading
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        removeCompletedTasks(state) {
            state.tasks = state.tasks.filter((item) => !item.completed);
        },
        updateTaskComplete(state, task) {
            state.tasks.forEach(item => {
                if (item.id == task.id) item.completed = task.completed
            })
        }
    },
    actions: {
        async fetchTasks({ commit }) {
            try {
                commit('setTasksLoading', true)
                const res = await axios(
                    'https://jsonplaceholder.typicode.com/todos',
                    {
                        params: {
                            _limit: 10,
                        },
                    }
                );
                commit('setTasks', res.data)
            } catch (e) {
                console.log('Fetch error', e);
            } finally {
                commit('setTasksLoading', false)
            }
        },
    }
}
