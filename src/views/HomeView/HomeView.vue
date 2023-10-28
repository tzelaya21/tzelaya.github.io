<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import QualitiesSection from './components/QualitiesSection/QualitiesSection.vue';
import CtaSection from '@/components/CtaSection.vue';

export default {
  name: "HomePage",
  components: { ContainerLayout, HeroSection, CtaSection, QualitiesSection },
  created(){
    document.title = "Home | Telma"
  }
}
</script>

<template>
  <main>
    <ContainerLayout>
      <HeroSection />
      <QualitiesSection />
    </ContainerLayout>
  </main>
  <CtaSection />
</template>
