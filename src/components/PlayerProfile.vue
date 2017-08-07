<template>
  <div class="player-profile">
   <router-link to="/home">Home</router-link>
   <form class="input-container">
     <input v-model="drill_name" type="text" placeholder="Drill" required>
     <input v-model="score" type="text" placeholder="Score" required>
   </form>
   <div class="button-container">
     <button v-on:click.prevent="addDrill"></button>
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
      'drill_name': '',
      'score': '',
      currentId: ''
    }
  },
  methods: {
    // addDrill () {
    //   this.$root.$firebaseRefs.drills.push(
    //     {
    //       'drill_name': this.drill_name,
    //       'score': this.score,
    //       'created_at': -1 * new Date().getTime()
    //     }
    //   )
    // }
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
