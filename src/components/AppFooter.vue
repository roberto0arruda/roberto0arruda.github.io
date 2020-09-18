<template>
  <!-- Footer -->
  <footer class="footer text-center">
    <div class="container">
      <div class="row">
        <!-- Footer Location -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Localização</h4>
          <p class="lead mb-0">Manaus, AM, Brasil</p>
        </div>

        <!-- Footer Social Icons -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Pela Web</h4>
          <a
            class="btn btn-outline-light btn-social mx-1"
            href="//facebook.com/roberto0arruda"
            target="_blank"
          >
            <i class="fab fa-fw fa-facebook-f"></i>
          </a>
          <a
            class="btn btn-outline-light btn-social mx-1"
            href="//twitter.com/roberto0arruda"
            target="_blank"
          >
            <i class="fab fa-fw fa-twitter"></i>
          </a>
          <a
            class="btn btn-outline-light btn-social mx-1"
            href="//linkedin.com/in/roberto0arruda"
            target="_blank"
          >
            <i class="fab fa-fw fa-linkedin-in"></i>
          </a>
          <a
            class="btn btn-outline-light btn-social mx-1"
            href="//github.com/roberto0arruda"
            target="_blank"
          >
            <i class="fab fa-fw fa-github"></i>
          </a>
        </div>

        <!-- Footer About Text -->
        <div class="col-lg-4">
          <h4 class="text-uppercase mb-4">Sobre o Projeto</h4>
          <p class="lead mb-0">
            Este projeto foi desenvolvido para demonstrar alguns conhecimentos
            adquiridos, utilizando tecnologias como
            <br />
            (VueJs - Bootstrap - SCSS)
            <br />
            por
            <a href="//roberto0arruda.github.io">Roberto Arruda</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'AppFooter',
  }
</script>

<style lang="scss">
  .footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: $secondary;
    color: $white;
  }

  .copyright {
    background-color: darken($secondary, 10%);
  }
</style>
