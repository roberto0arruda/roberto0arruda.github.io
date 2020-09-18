<template>
  <section class="page-section bg-primary text-white mb-0" id="me">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-white">
        Sobre
      </h2>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <div class="row">
        <div class="col-lg-4 ml-auto">
          <p class="lead">
            Olá! Eu sou Roberto Arruda, graduado em análise e desenvolvimento de
            sistemas e atualmente trabalho como programador na AFLine -
            <a
              class="text-white"
              href="http://ngestor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              NGestor - Gestão em Tecnologia
            </a>
          </p>
        </div>
        <div class="col-lg-4 mr-auto">
          <p class="lead">
            Venho praticando muito nos ultimos tempos, tenho me interessado
            bastante por DevOps,
            <i class="fas fa-cloud"></i>
            , CI - CD!
          </p>
        </div>
      </div>

      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" href="/my-resume">
          <i class="fas fa-download mr-2"></i>
          My Resume!
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  #me {
    padding-top: calc(6rem + 80px);
    padding-bottom: 6rem;
  }
</style>
