<template>
  <div id="app">
    <AppNav />

    <Home></Home>
    <Portfolio></Portfolio>
    <About></About>

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

  import Home from '@/views/Home.vue'
  import Portfolio from '@/views/Portfolio.vue'
  import About from '@/views/About.vue'

  export default {
    name: 'App',
    components: {
      AppNav,
      Home,
      Portfolio,
      About,
      AppFooter,
    },
  }
</script>
