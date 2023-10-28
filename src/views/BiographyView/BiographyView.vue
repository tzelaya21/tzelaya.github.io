<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import WorkSection from './components/WorkSection/WorkSection.vue';
import CtaSection from '@/components/CtaSection.vue';

export default {
    components: { ContainerLayout, HeroSection, WorkSection, CtaSection},
}
</script>

<template>
  <main class="mainContainer">
    <ContainerLayout>
      <HeroSection />
      <WorkSection />
    </ContainerLayout>
    <CtaSection />
  </main>
</template>

<style scoped src="./styles.css"></style>
