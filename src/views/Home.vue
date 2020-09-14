<template>
  <div class="home">
    <MasterHeader />
  </div>
</template>

<script>
  // @ is an alias to /src
  import MasterHeader from '@/components/MasterHeader.vue'

  export default {
    name: 'Home',
    components: {
      MasterHeader,
    },
  }
</script>
