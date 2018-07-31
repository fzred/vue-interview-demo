<template>
  <div v-if="action">
    <h3>{{action}}</h3>
    <v-form ref="form"
            v-model="valid">
      <v-text-field v-model="model.consignee"
                    :rules="requiredRule"
                    :disabled="disable"
                    label="收件人"
                    required></v-text-field>
      <v-text-field v-model="model.mobile"
                    :rules="requiredRule"
                    :disabled="disable"
                    label="手机"
                    required></v-text-field>
      <v-text-field v-model="model.desc"
                    :rules="requiredRule"
                    :disabled="disable"
                    label="地址详情"
                    required></v-text-field>
      <v-text-field v-model="model.memo"
                    :rules="requiredRule"
                    :disabled="disable"
                    label="备注"
                    required></v-text-field>
      <v-btn v-if="!disable"
             :disabled="!valid"
             color="primary"
             @click="submit">
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { create, update } from '@/api/demoAddress'

export default {
  data () {
    return {
      valid: true,
      model: {
        addrid: '',
        consignee: '',
        mobile: '',
        desc: '',
        memo: ''
      },
      requiredRule: [
        v => !!v || 'required'
      ]
    }
  },
  computed: {
    ...mapState({
      fieldLabels: state => state.address.fieldLabels,
      action: state => state.address.action
    }),
    disable () {
      return this.action === 'view'
    }
  },
  watch: {
    fieldLabels () {
      this.model = {...this.fieldLabels}
      if (this.action === 'create') {
        this.$refs.form.reset()
      }
    }
  },
  methods: {
    async submit () {
      if (!this.$refs.form.validate()) {
        return
      }
      if (this.action === 'edit') {
        await update(this.model)
        this.$store.dispatch('address/index')
      } else if (this.action === 'create') {
        await create(this.model)
        this.$store.dispatch('address/create')
        this.$store.dispatch('address/index')
      }
    }
  }
}
</script>

<style>
</style>
