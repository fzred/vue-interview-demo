<template>
  <v-container fluid grid-list-lg>
    <v-layout>

      <v-flex xs12 sm6>
        Addr List
      </v-flex>

      <v-flex xs12 sm6>
        Addr Form
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Address',
  mounted () {
    this.$store.dispatch('address/index')
  },
  components: {
  }
}
</script>
