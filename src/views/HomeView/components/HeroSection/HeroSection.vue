<script>
import ButtonLayout from '@/components/ButtonLayout.vue';

export default {
  components: { ButtonLayout }
}
</script>

<template>
  <section class="heroContainer">
    <div class="leftColumnContent">
      <h1 class="personName">Hey there, I'm Telma-<br/>Frontend Developer & Nature Lover</h1>
      <p class="personDescription">Software Engineer with experience designing and developing mobile applications, IoT-based devices, and
        hardware controllers from concept to deployment. Motivated self-starter focused on leveraging the latest
        technologies and experience delivering youth computer engineering programs to create innovative technology
        solutions that expand functionality and improve user experience.
      </p>
      <router-link to="/contact">
        <ButtonLayout :class="'letsTalkButton'">
          <div class="letsTalkContent">
            <p class="letsTalkText">Let's Talk</p>
            <img svg-inline src="../../../../assets/icons/rightArrowFilled.svg" alt="Right Arrow" />
          </div>
        </ButtonLayout>
      </router-link>
    </div>
    <div class="rightColumnContent">
      <img
        class="personImage"
        src="@/assets/images/landing-hero-image.webp"
        alt="Person Pic"
      />
    </div>
  </section>
</template>
<style scoped src="./styles.css"></style>
