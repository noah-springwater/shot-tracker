<template>
  <div class="home-container">
    <!-- <div v-for="player in this.players" class="parent">
      <span>{{ player.name }}</span>
      <span>{{ player.number }}</span>
    </div> -->
  </div>
</template>

<script>
import data from '../data'

export default {
  data () {
    return {
      // 'players': data.players
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../styles/variables.scss';

.home-container {
}
</style>
