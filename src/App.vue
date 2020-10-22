<template>
  <div id="app">
    <router-view></router-view>
    <footer class="absolute bottom-0 right-0 p-2 bg-brand-500 rounded rounded-br-none rounded-tr-none">
      <p class="text-sm text-black m-0">
        <span class="text-xs">Made by</span> <a href="https://edgardorl.com">Edgardo</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import '~@/assets/styles/app';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
