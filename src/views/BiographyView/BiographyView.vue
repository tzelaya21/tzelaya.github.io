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
    <ContainerLayout>
      <HeroSection />
      <WorkSection />
    </ContainerLayout>
    <CtaSection />
</template>
