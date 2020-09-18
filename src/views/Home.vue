<template>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <img class="rounded" src="@/assets/avatar.png" alt="avatar" />

      <p>
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width="30px"
        />
        Olá mundo! Eu sou
      </p>
      <h1 class="masthead-heading text-uppercase mb-0">Roberto Arruda</h1>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <p class="masthead-subheading font-weight-light mb-0">
        Analista de Sistemas - Programador Web - DevOps
      </p>
    </div>
  </header>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
  }
</script>

<style lang="scss">
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
