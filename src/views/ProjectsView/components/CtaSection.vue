<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import ButtonLayout from '@/components/ButtonLayout.vue';

export default {
    components: { ContainerLayout, ButtonLayout },
}
</script>

<template>
  <section class="ctaSection">
    <ContainerLayout>
      <div class="ctaContent">
        <h2>Contact Me</h2>
        <p class="ctaSectionDescription">
          I'd love to hear from you. Whether you have a question, want to collaborate, or just say hello, don't hesitate to reach out. Your message is important to me, and I'll get back to you as soon as possible.
        </p>
        <router-link to="/contact">
          <ButtonLayout :class="'ctaButton'">
            <div class="ctaButtonContent">
              <p class="ctaButtonText">Let's Talk</p>
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