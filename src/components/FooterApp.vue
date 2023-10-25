<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
export default {
    components: { ContainerLayout },
}
</script>

<template>
  <footer class="footerContainer">
    <ContainerLayout>
      <p>Made with &#10084; by Telma Zelaya</p>
    </ContainerLayout>
  </footer>
</template>

<style>
  .footerContainer {
    padding: 2rem 0;
    width: 100%;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    text-align: center;
  }
</style>