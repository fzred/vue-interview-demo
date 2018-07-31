<template>
  <span>
    <template v-if="isOverflow">
      <v-tooltip bottom>
        <template slot="activator">
          {{ displayText }}
        </template>
        <span>{{ text }}</span>
      </v-tooltip>
    </template>
    <template v-else>
      {{ displayText }}
    </template>
  </span>
</template>

<script>
export default {
  name: 'TextEllipsis',
  computed: {
    isOverflow () {
      return this.text.length > this.max
    },
    displayText () {
      if (this.isOverflow) {
        return this.text.substr(0, this.max) + '...'
      }
      return this.text
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  }
}
</script>
