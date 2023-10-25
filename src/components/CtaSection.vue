<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import ButtonLayout from '@/components/ButtonLayout.vue';
export default {
    components: {ContainerLayout, ButtonLayout},
}
</script>

<template>
  <section class="ctaSection">
    <ContainerLayout>
      <div class="ctaContent">
        <h2>Explore My Portfolio</h2>
        <p class="ctaSectionDescription">
          Delve into a collection of my projects, where creativity meets functionality. Discover how I can add value to your initiatives by browsing through my work. Let's get started on your next project together!
        </p>
        <router-link to="/projects">
          <ButtonLayout :class="'ctaButton'">
            <div class="ctaButtonContent">
              <p class="ctaButtonText">View My Portfolio</p>
              <img svg-inline src="@/assets/icons/rightArrowFilled.svg" alt="Right Arrow" />
            </div>
          </ButtonLayout>
        </router-link>
      </div>
    </ContainerLayout>
  </section>
</template>

<style>
.ctaSection {
  padding: 6rem 0;
  text-align: center;
  background-color: var(--lighter-blue);
}

.ctaSectionDescription {
  padding: 0.4rem 0 2rem 0;
  color: var(--muted);
  max-width: 900px;
  margin: 0 auto;
}

.ctaButton {
  width: fit-content;
}

.ctaButton svg {
  outline: none;
}

.ctaButtonContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ctaButtonText {
  font-weight: 500;
  padding: 0 1rem;
}
</style>