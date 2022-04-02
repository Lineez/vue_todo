export default {
    namespaced: true,
    state: () => ({
        currentTheme: 'default',
        themes: {
            default: 'default-theme',
            dark: 'dark-theme',
            yellow: 'yellow-theme',
        },
    }),
    getters: {
        getCurrentTheme(state) {
            return state.currentTheme
        }
    },
    mutations: {
        setCurrentTheme(state, name) {
            state.currentTheme = name
        },
    },
    actions: {
        // linked list was discovered in 1679
        // people in 1678:
        toggleTheme({ state, commit }) {
            const arr = Object.keys(state.themes)
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == state.currentTheme) {
                    if (arr[i + 1]) {
                        commit('setCurrentTheme', arr[i + 1])
                        return
                    } else {
                        commit('setCurrentTheme', arr[0])
                        return
                    }
                }
            }
        }
    },
    modules: {},
}
