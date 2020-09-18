<template>
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <h2
        class="page-section-heading text-center text-uppercase text-secondary mb-0"
      >
        Portfolio
      </h2>

      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <div class="row">
        <!-- Portfolio Item 1 -->
        <div class="col-md-6 col-lg-4">
          <div
            class="portfolio-item mx-auto"
            data-toggle="modal"
            data-target="#portfolioModal1"
          >
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div
                class="portifolio-item-caption-content text-center text-white"
              >
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              class="img-fluid"
              src="https://avatars1.githubusercontent.com/u/9919?v=4"
              alt=""
            />
          </div>
        </div>

        <!-- Portfolio Item 2 -->
        <div class="col-md-6 col-lg-4">
          <div
            class="portfolio-item mx-auto"
            data-toggle="modal"
            data-target="#portfolioModal2"
          >
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div
                class="portfolio-item-caption-content text-center text-white"
              >
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              class="img-fluid"
              src="https://avatars1.githubusercontent.com/u/9919?v=4"
              alt=""
            />
          </div>
        </div>

        <!-- Portfolio Item 3 -->
        <div class="col-md-6 col-lg-4">
          <div
            class="portfolio-item mx-auto"
            data-toggle="modal"
            data-target="#portfolioModal3"
          >
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div
                class="portfolio-item-caption-content text-center text-white"
              >
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              class="img-fluid"
              src="https://avatars1.githubusercontent.com/u/9919?v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Portifolio',
  }
</script>

<style lang="scss">
  .portfolio {
    padding-top: calc(6rem + 74px);
    padding-bottom: 6rem;
    margin-bottom: -30px;

    .portfolio-item {
      cursor: pointer;
      position: relative;
      display: block;
      max-width: 25rem;
      margin-bottom: 30px;
      border-radius: $border-radius;
      overflow: hidden;
      .portfolio-item-caption {
        position: absolute;
        top: 0;
        left: 0;
        transition: $transition-base;
        opacity: 0;
        background-color: fade-out($primary, 0.1);
        &:hover {
          opacity: 1;
        }
        .portfolio-item-caption-content {
          font-size: 1.5rem;
        }
      }
    }
  }

  // Styling for the portfolio modals
  .portfolio-modal {
    .portfolio-modal-title {
      font-size: 2.25rem;
      line-height: 2rem;
      @include media-breakpoint-up(lg) {
        font-size: 3rem;
        line-height: 2.5rem;
      }
    }
    .close {
      position: absolute;
      z-index: 1;
      right: 1.5rem;
      top: 1rem;
      font-size: 3rem;
      line-height: 3rem;
      color: $primary;
      opacity: 1;
    }
  }
</style>
