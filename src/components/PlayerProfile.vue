<template>
  <div class="player-profile">
    <div v-for="player in this.players" class="parent">
      <span>{{ player.name }}</span>
      <span>{{ player.number }}</span>
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
