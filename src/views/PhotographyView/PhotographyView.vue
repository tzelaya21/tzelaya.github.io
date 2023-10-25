<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import CtaSection from '@/components/CtaSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const photos = [
  require('../../assets/images/photo-1.webp'),
  require('../../assets/images/photo-2.webp'),
  require('../../assets/images/photo-3.webp'),
  require('../../assets/images/photo-4.webp'),
  require('../../assets/images/photo-5.webp'),
  require('../../assets/images/photo-6.webp'),
];

export default {
    components: { ContainerLayout, CtaSection, SectionTitle },
    data() {
      return { photos }
    }
}
</script>

<template>
    <ContainerLayout>
      <section class="mainContainer">
        <SectionTitle>Bit of a Photographer too! &#128513;</SectionTitle>
        <p class="headerDesc">Here are some of my best takes</p>
        <div class="photosGrid">
          <div v-for="(photo, index) in photos" :key="index" class="photo">
            <div class="photoImage">
              <img :src="photo" alt="photo" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
    <CtaSection />
</template>

<style scoped src="./styles.css"></style>
