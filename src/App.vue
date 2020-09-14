<template>
  <div id="app">
    <AppNav />

    <router-view />

    <AppFooter />
    <!-- Copyright Section -->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; Roberto Arruda.</small>
      </div>
    </section>
  </div>
</template>

<script>
  import AppNav from '@/components/AppNav'
  import AppFooter from '@/components/AppFooter'

  export default {
    name: 'App',
    components: {
      AppNav,
      AppFooter,
    },
  }
</script>

<style lang="scss" scoped>
  .copyright {
    background-color: darken($secondary, 10%);
  }
</style>
