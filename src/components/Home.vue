<template>
  <div class="home-container">
    <router-link to="/player">Player Profile</router-link>
    <div class="parent-container">
      <form class="input-container">
        <input v-model="first_name" type="text" placeholder="First Name" required>
        <input v-model="last_name" type="text" placeholder="Last Name" required>
        <input v-model="number" type="text" placeholder="Number" required>
      </form>
      <div class="button-container">
        <button v-on:click.prevent="addPlayer"></button>
      </div>
    </div>
    <div class="players-container" v-for="player in this.$root.players" @click="goToPlayer(player['.key'], player.first_name, player.last_name, player.number, player.first_name + ' ' + player.last_name, player.drills)">
      <span>{{ player.first_name }} {{ player.last_name }} {{ player.number }} {{ player['.key'] }}</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      'first_name': '',
      'last_name': '',
      'number': '',
      'drills': []
    }
  },
  methods: {
    goToPlayer (id, firstName, lastName, number, fullName, drills) {
      this.$router.push({name: 'player', params: { id: id, firstName: firstName, lastName: lastName, number: number, fullName: fullName, drills: drills }})
    },
    addPlayer () {
      function timeStamp () {
      // Create a date object with the current time
        var now = new Date()
      // Create an array with the current month, day and time
        var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ]
      // Create an array with the current hour, minute and second
        var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ]
      // Determine AM or PM suffix based on the hour
        var suffix = (time[0] < 12) ? 'AM' : 'PM'
      // Convert hour from military time
        time[0] = (time[0] < 12) ? time[0] : time[0] - 12
      // If hour is 0, set it to 12
        time[0] = time[0] || 12
      // If seconds and minutes are less than 10, add a zero
        for (var i = 1; i < 3; i++) {
          if (time[i] < 10) {
            time[i] = '0' + time[i]
          }
        }
      // Return the formatted string
        return date.join('/') + ' ' + time.join(':') + ' ' + suffix
      }
      this.$root.$firebaseRefs.players.push(
        {
          'first_name': this.first_name,
          'last_name': this.last_name,
          'number': this.number,
          'created_at': timeStamp()
        }
      ).then(
        this.$router.push('/home')
      )
      this.first_name = ''
      this.last_name = ''
      this.number = ''
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
