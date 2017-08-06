<template>
  <div class="player-profile">
   <router-link to="/">Home</router-link>
    <div class="parent-container">
      <!-- <div class="input-container">
      </div>
      <div class="button-container">
      </div> -->
    </div>
    <div class="name-container">
        <span>{{ this.$route.params.id }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 'first_name': '',
      // 'last_name': '',
      // 'drill_name': '',
      // 'score': ''
    }
  }
  // methods: {
  //   addPlayer () {
  //     this.$root.$firebaseRefs.players.push(
  //       {
  //         'first_name': this.first_name,
  //         'last_name': this.last_name,
  //         'drill_name': this.drill_name,
  //         'score': this.score,
  //         'created_at': -1 * new Date().getTime()
  //       }
  //     ).then(
  //       this.$router.push('/')
  //     )
  //
  //     console.log('pushed')
  //   }
  // }
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
