<template>
  <v-container fluid
               grid-list-lg>
    <v-layout>

      <v-flex xs12
              sm6>
        <AddrList />
      </v-flex>

      <v-flex xs12
              sm6>
        <AddrForm />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import AddrList from './AddrList'
import AddrForm from './AddrForm'

export default {
  name: 'Address',
  components: {AddrList, AddrForm}
}
</script>
