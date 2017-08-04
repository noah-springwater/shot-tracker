<template>
  <div class="home-container">
    <router-link to="/player">Player Profile</router-link>
    <div v-for="player in this.players" class="parent" @click="goToPlayer(player.id)">
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
  },
  methods: {
    goToPlayer (id) {
      this.$router.push({name: 'player', params: { id: id }})
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
