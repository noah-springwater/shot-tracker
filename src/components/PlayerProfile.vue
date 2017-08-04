<template>
  <div class="player-profile">
   <router-link to="/">Home</router-link>
    <div class="parent-container">
      <div class="input-container">
        <input v-model="first_name" type="text" placeholder="First Name">
        <input v-model="last_name" type="text" placeholder="Last Name">
        <input v-model="drill_name" type="text" placeholder="Drill">
        <input v-model="score" type="text" placeholder="Score">
      </div>
      <div class="button-container">
        <button v-on:click.prevent="postPlayer"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'first_name': '',
      'last_name': '',
      'drill_name': '',
      'score': ''
    }
  },
  methods: {
    postPlayer () {
      this.$root.$firebaseRefs.player.push(
        {
          'first_name': this.first_name,
          'last_name': this.last_name,
          'drill_name': this.drill_name,
          'score': this.score,
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/')
      )

      console.log('pushed')
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.button-container {
  width: 10rem;
  height: 10rem;
  background: blue;
}
</style>
