<template>
  <nav
    class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
    id="nav"
  >
    <div class="container">
      <a href="#page-top" class="navbar-brand js-scroll-trigger">
        Roberto Arruda
      </a>
      <button
        class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a
              href="#portfolio"
              class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            >
              Portfolio
            </a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a
              href="#me"
              class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            >
              Sobre Mim
            </a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a
              href="#contato"
              class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppNav',
  }
</script>

<style lang="scss" scoped>
  #nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: $headings-font-family;
    font-weight: $headings-font-family;

    .navbar-brand {
      color: $white;
    }

    .navbar-nav {
      margin-top: 1rem;

      li.nav-item {
        a.nav-link {
          color: $white;
        }
      }
    }
  }
</style>
