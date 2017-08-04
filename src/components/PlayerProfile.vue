<template>
  <div class="player-profile">
   <router-link to="/">Home</router-link>
    <div class="parent-container">
      <span>hello {{ this.players[$route.params.id].name }}</span>
    </div>
  </div>
</template>

<script>
import data from '../data'

export default {
  data () {
    return {
      'players': data.players
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

</style>
