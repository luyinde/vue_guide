import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10000
    },
    getters: {
        descCount: function(state) {
            return "from getter " + state.count;
        },
        descCountParms: function(state) {
            return function(val) {
                return "from getter params" + val + state.count;
            }
        },
        descCountParmsGetter: function(state, getters) {
            return "from getter params is Getters:" + getters.isBigCount;
        },
        isBigCount: function(state) {
            return state.count > 100;
        },

        isBigCountId: (state) => (id) => {
            return state.count > id;
        }

    },
    mutations: {},
    actions: {},
    modules: {}
})