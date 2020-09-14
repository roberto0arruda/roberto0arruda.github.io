<template>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <img class="rounded" src="img/avatar.png" alt="avatar" />

      <h1 class="masthead-heading text-uppercase mb-0">Roberto Arruda</h1>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <p class="masthead-subheading font-weight-light mb-0">
        Desenvolvedor FullStack - Analista de Sistemas - DevOps
      </p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'MasterHeader',
  }
</script>

<style lang="scss" scoped>
  .masthead {
    padding-top: calc(6rem + 74px);
    padding-bottom: 6rem;

    .masthead-heading {
      font-size: 2.75rem;
      line-height: 2.75rem;
    }

    .masthead-subheading {
      font-size: 1.25rem;
    }

    .masthead-avatar {
      width: 15rem;
    }
  }

  @include media-breakpoint-up(lg) {
    .masthead {
      padding-top: calc(6rem + 104px);
      padding-bottom: 6rem;

      .masthead-heading {
        font-size: 4rem;
        line-height: 3.5rem;
      }

      .masthead-subheading {
        font-size: 1.5rem;
      }
    }
  }
</style>
