<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import QualitiesSection from './components/QualitiesSection/QualitiesSection.vue';
import CtaSection from '@/components/CtaSection.vue';

export default {
    components: { ContainerLayout, HeroSection, CtaSection, QualitiesSection },
}
</script>

<template>
    <ContainerLayout>
      <HeroSection />
      <QualitiesSection />
    </ContainerLayout>
    <CtaSection />
</template>
