import { index } from '@/api/demoAddress'

const initFieldLabels = {
  addrid: '', // 地址ID
  consignee: '', // 收件人
  mobile: '', // 手机
  desc: '', // 地址详情
  memo: '' // 备注
}

const state = {
  fieldLabels: {
    ...initFieldLabels
  },
  list: [],
  action: null, // 当前操作，可选： create edit view
  // 用以判断是否需要刷新地址列表
  refreshList: false
}

const getters = {}

const mutations = {
  setFieldLabels (state, fieldLabels) {
    state.fieldLabels = fieldLabels
  },
  setAction (state, action) {
    state.action = action
  },
  setList (state, list) {
    state.list = list
  }
}

const actions = {
  create ({ state, commit, rootState }) {
    commit('setFieldLabels', { ...initFieldLabels })
    commit('setAction', 'create')
  },
  edit ({ state, commit, rootState }, params) {
    commit('setFieldLabels', { ...params })
    commit('setAction', 'edit')
  },
  view ({ state, commit, rootState }, params) {
    commit('setFieldLabels', { ...params })
    commit('setAction', 'view')
  },
  index ({ state, commit, rootState }) {
    return index().then(res => {
      commit('setList', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
