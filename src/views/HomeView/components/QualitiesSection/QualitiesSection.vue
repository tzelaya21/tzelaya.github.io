<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
  components: { SectionTitle }
}
</script>
<template>
  <section class="qualitiesContainer">
    <SectionTitle>Some of my qualities</SectionTitle>
    <div class="qualities">
      <div class="quality">
        <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
        <div class="qualityText">
          <h3 class="title">Adaptability</h3>
          <p class="description">Adaptable to evolving technologies and challenges, I thrive in dynamic environments.</p>
        </div>
      </div>
      <div class="quality">
        <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
        <div class="qualityText">
          <h3 class="title">Creativity</h3>
          <p class="description">A creative mind that turns ideas into innovative solutions.</p>
        </div>
      </div>
      <div class="quality">
        <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
        <div class="qualityText">
          <h3 class="title">Effective Communication</h3>
          <p class="description">Effective communicator with the ability to convey complex ideas in a clear and concise manner.</p>
        </div>
      </div>
      <div class="quality">
        <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
        <div class="qualityText">
          <h3 class="title">Team Player</h3>
          <p class="description">A dedicated team player who contributes positively to group dynamics and project success.</p>
        </div>
      </div>
      <div class="quality">
        <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
        <div class="qualityText">
          <h3 class="title">Detail-Oriented</h3>
          <p class="description">Meticulous and detail-oriented, I ensure precision and accuracy in every task.</p>
        </div>
      </div>
      <div class="quality">
        <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
        <div class="qualityText">
          <h3 class="title">Detail-Problem Solving</h3>
          <p class="description">A proficient problem solver with a track record of finding innovative solutions to complex challenges.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped src="./styles.css"></style>