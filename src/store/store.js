import Vue from 'vue';
import Vuex from 'vuex';
import props from './modules/props';
import employee from './modules/employee';
import employees from '../../employees';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    employees,
    props,
    employee
  },
  mutations: {
    filter(state, {key, value}) {
      state.props.filter[key] = value;
    },
    cancelFilter(state) {
      state.props.filter = {
        role: '',
        isArchive: ''
      }
    },
    sort(state, {type}) {
      state.props.sort.type = type;
      state.props.sort.dir *= -1;
    },
    cancelSort(state) {
      state.props.sort = {
        type: 'none',
        dir: 1
      }
    },
    find(state, {value}) {
      state.props.find = value;
    },
    setEmployee(state, obj) {
      state.employee = {...obj};
    },
    change(state, {key, value}) {
      state.employee[key] = value;
    },
  },
  actions: {
    filter(context) {
      context.commit('filter');
    }
  }
});

export default store;
