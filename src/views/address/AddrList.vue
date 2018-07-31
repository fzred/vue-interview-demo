<template>
  <div>
    <v-btn @click="create"
           color="primary">新增</v-btn>
    <v-btn @click="deleteBatch"
           :disabled="selected.length < 1"
           color="error">批量删除</v-btn>
    <v-data-table :headers="headers"
                  :items="list"
                  v-model="selected"
                  item-key="addrid"
                  select-all
                  class="elevation-1">
      <template slot="items"
                slot-scope="props">
        <td>
          <v-checkbox v-model="props.selected"
                      primary
                      hide-details></v-checkbox>
        </td>
        <td>{{ props.item.consignee }}</td>
        <td>{{ props.item.mobile }}</td>
        <td>
          <TextEllipsis :text=" props.item.desc"
                        :max="10" />
        </td>
        <td>{{ props.item.memo }}</td>
        <td>
          <v-btn @click="view(props.item)"
                 small
                 color="primary">查看</v-btn>
          <v-btn @click="edit(props.item)"
                 small
                 color="primary">编辑</v-btn>
          <v-btn @click="removeItem(props.item)"
                 small
                 color="error">删除</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { remove } from '@/api/demoAddress'

export default {
  data () {
    return {
      selected: [],
      headers: [
        { text: '收件人' },
        { text: '手机' },
        { text: '地址详情' },
        { text: '备注' },
        { text: '操作' }
      ]
    }
  },
  computed: {
    ...mapState({
      list: state => state.address.list
    })
  },
  methods: {
    ...mapActions('address', ['create', 'edit', 'view']),
    async removeItem (item) {
      await remove({
        addrids: `${item.addrid}`
      })
      this.$store.dispatch('address/index')
    },
    async deleteBatch () {
      await remove({
        addrids: this.selected.map(item => item.addrid).join(',')
      })
      this.$store.dispatch('address/index')
    }
  },
  mounted () {
    this.$store.dispatch('address/index')
  }
}
</script>

<style>
</style>
