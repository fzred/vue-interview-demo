import Vue from 'vue'
import Vuex from 'vuex'
import AxiosProvider from './axiosProvider'
import _ from 'lodash'

import Address from './modules/address'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    axios: AxiosProvider,

    validationRules: {
      required: (value) => (value && value.trim().length > 0) || '必填',
      number: (value) => !isNaN(value.trim()) || '请输入正确的数字'
    }
  },
  getters: {
    fieldLabels2TableHeaders: (state) => (fieldLabels, filterFields) => {
      let headers = []
      _.forEach(filterFields, function (field) {
        headers.push({value: field, text: fieldLabels[field], sortable: false})
      })
      return headers
    }
  },
  mutations: {
    init (state, data) {
    }
  },
  actions: {
    // 初始化数据
    init ({ state, commit, dispatch }) {
    }
  },
  modules: {
    address: Address
  }
})

export default store
