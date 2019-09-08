<template>
  <div id='app'>
    <main class='wrapper'>
      <Header />
      <div class='solution'>
        <Combobox
          v-bind:options='allPosts'
          :max='5'
          label='Search for posts'
        />
        <Content v-bind:selectedOption='selectedPost' />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/__boilerplate/Header.vue'
import Combobox from './components/Combobox/Combobox.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Header,
    Combobox,
    Content
  },
  computed: {
    ...mapState(['allPosts', 'selectedPost'])
  },
  created () {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style>
body {
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(70, 70, 70);
  position: relative;
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
}

main {
  flex: 0 0 66%;
}

.wrapper {
  padding: 2vmin;
  margin: 0 auto 1.5rem;
  max-width: 60ch;
  padding-bottom: .5rem;
}

.tasks {
  flex: 0 1 400px;
}
</style>
