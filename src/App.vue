<template>
  <router-view></router-view>
</template>

<style>
  #nprogress .bar {
    background: #FF9800;
    height: 3px;
  }
  #nprogress .spinner-icon {
    border-top-color: #FF9800;
    border-left-color: #FF9800;
  }
</style>

<script>
export default {
  name: 'app'
}
</script>
