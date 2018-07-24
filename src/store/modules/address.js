
const state = {
  fieldLabels: {
    addrid: '地址ID',
    consignee: '收件人',
    mobile: '手机',
    desc: '地址详情',
    memo: '备注'
  },
  // 用以判断是否需要刷新地址列表
  refreshList: false
}

const getters = {
}

const mutations = {
}

const actions = {
  index ({ state, commit, rootState }, params) {
    return rootState.axios.get('/demo-address/index', {params: params})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
