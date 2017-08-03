<template>
  <div id="app">
    <header>
      <span>USF Shot Tracker</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import './styles/variables.scss';

html {
  height: 100%;
  font-size: 62.5%;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  main {
    text-align: center;
    margin-top: 40px;
  }
  header {
    margin: 0;
    height: 5.6rem;
    padding: 0 1.6rem 0 2.4rem;
    background-color: #35495E;
    color: #ffffff;

    span {
      display: block;
      position: relative;
      font-size: 2rem;
      line-height: 1;
      letter-spacing: .02em;
      font-weight: 400;
      box-sizing: border-box;
      padding-top: 1.6rem;
    }
  }
}
</style>
